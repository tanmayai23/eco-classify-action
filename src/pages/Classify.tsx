import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, MapPin, BookOpen, Bookmark } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Classify = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        processImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setResults({
        primary: {
          category: "Mobile Phone",
          confidence: 94,
          image: "📱"
        },
        alternatives: [
          { category: "Tablet", confidence: 78 },
          { category: "Smart Device", confidence: 65 },
          { category: "Gaming Device", confidence: 45 }
        ]
      });
      setIsProcessing(false);
      toast({
        title: "Classification Complete!",
        description: "Your device has been successfully identified.",
      });
    }, 3000);
  };

  const takePhoto = () => {
    // Simulate camera capture
    setUploadedImage("/api/placeholder/400/300");
    processImage();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Classify Your E-Waste
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload an image or take a photo to identify your electronic device
            </p>
          </motion.div>

          {!uploadedImage ? (
            /* Upload Zone */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-card border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-12 text-center">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse-eco">
                      <Upload className="w-12 h-12 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Drop your e-waste image here</h3>
                      <p className="text-muted-foreground">or click to browse your files</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                      <label className="flex-1">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <Button className="w-full bg-gradient-primary hover:shadow-glow text-white">
                          <Upload className="w-4 h-4 mr-2" />
                          Browse Files
                        </Button>
                      </label>
                      
                      <Button
                        variant="outline"
                        onClick={takePhoto}
                        className="flex-1 border-2"
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Use Camera
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            /* Results Section */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Preview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="bg-gradient-card shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Uploaded Image</h3>
                    <div className="relative rounded-xl overflow-hidden bg-muted/50 aspect-square">
                      <img
                        src={uploadedImage}
                        alt="Uploaded device"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setUploadedImage(null);
                        setResults(null);
                        setIsProcessing(false);
                      }}
                      className="w-full mt-4"
                    >
                      Upload Another Image
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Processing or Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {isProcessing ? (
                  <Card className="bg-gradient-card shadow-card">
                    <CardContent className="p-6">
                      <div className="text-center space-y-6">
                        <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-bounce-gentle">
                          <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Processing Image...</h3>
                          <p className="text-muted-foreground mb-4">Our AI is analyzing your device</p>
                          <Progress value={85} className="w-full" />
                        </div>
                        <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                          💡 Tip: Proper e-waste disposal can save up to 15kg of CO2 per device!
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : results ? (
                  <>
                    {/* Primary Result */}
                    <Card className="bg-gradient-card shadow-card border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="text-4xl">{results.primary.image}</div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-primary">{results.primary.category}</h3>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-sm text-muted-foreground">Confidence:</span>
                              <Badge variant="secondary" className="bg-success text-success-foreground">
                                {results.primary.confidence}%
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <Progress value={results.primary.confidence} className="h-2" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <Button className="bg-gradient-primary hover:shadow-glow text-white">
                            <MapPin className="w-4 h-4 mr-2" />
                            Find Centers
                          </Button>
                          <Button variant="outline">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Learn More
                          </Button>
                          <Button variant="outline">
                            <Bookmark className="w-4 h-4 mr-2" />
                            Save Result
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Alternative Results */}
                    <Card className="bg-gradient-card shadow-card">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-4">Other Possibilities</h4>
                        <div className="space-y-3">
                          {results.alternatives.map((alt: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                              <span className="font-medium">{alt.category}</span>
                              <Badge variant="outline">{alt.confidence}%</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                ) : null}
              </motion.div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Classify;
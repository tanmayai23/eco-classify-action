import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Centers = () => {
  const recyclingCenters = [
    {
      name: "EcoTech Recycling Center",
      address: "123 Green Street, Eco City, EC 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      distance: "2.3 miles",
      types: ["Mobile Devices", "Computers", "Batteries"],
      rating: 4.8
    },
    {
      name: "Green Electronics Disposal",
      address: "456 Recycle Avenue, Green Town, GT 67890",
      phone: "(555) 987-6543",
      hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-3PM",
      distance: "3.7 miles",
      types: ["All Electronics", "Appliances", "Cables"],
      rating: 4.6
    },
    {
      name: "Sustainable Tech Solutions",
      address: "789 Environment Way, Clean City, CC 54321",
      phone: "(555) 456-7890",
      hours: "Daily: 8AM-8PM",
      distance: "5.1 miles",
      types: ["Computers", "Audio Equipment", "Gaming"],
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Recycling Centers
            </h1>
            <p className="text-xl text-muted-foreground">
              Find certified e-waste recycling centers near you
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Enter your location..."
                    className="flex-1"
                  />
                  <Button className="bg-gradient-primary hover:shadow-glow text-white">
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Centers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-0">
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Centers List */}
          <div className="space-y-6">
            {recyclingCenters.map((center, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold">{center.name}</h3>
                          <div className="flex items-center space-x-1">
                            <ArrowUp className="w-4 h-4 text-warning fill-current" />
                            <span className="text-sm font-medium">{center.rating}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{center.address}</span>
                            <Badge variant="outline">{center.distance}</Badge>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>{center.phone}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{center.hours}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {center.types.map((type, typeIndex) => (
                            <Badge key={typeIndex} variant="secondary">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline">
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </Button>
                        <Button className="bg-gradient-primary hover:shadow-glow text-white">
                          <MapPin className="w-4 h-4 mr-2" />
                          Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Centers;
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Learn = () => {
  const categories = [
    {
      title: "Mobile Devices",
      icon: "📱",
      items: ["Smartphones", "Tablets", "Smart Watches"],
      impact: "Contains precious metals like gold and rare earth elements",
      recycling: "Remove personal data, find certified recyclers"
    },
    {
      title: "Computers",
      icon: "💻",
      items: ["Laptops", "Desktops", "Monitors"],
      impact: "High energy consumption to manufacture, toxic materials",
      recycling: "Data destruction, component separation for reuse"
    },
    {
      title: "Batteries",
      icon: "🔋",
      items: ["Lithium-ion", "Lead-acid", "Alkaline"],
      impact: "Toxic chemicals can contaminate soil and water",
      recycling: "Special handling required, never throw in regular trash"
    },
    {
      title: "Audio Equipment",
      icon: "🎧",
      items: ["Headphones", "Speakers", "Microphones"],
      impact: "Plastic and metal components, electronic circuits",
      recycling: "Disassemble for material recovery"
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
              Learn About E-Waste
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understand the environmental impact of electronic waste and learn how to make a difference
            </p>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-destructive mb-2">54M</div>
                <div className="text-sm text-muted-foreground">Tons of e-waste generated globally per year</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warning mb-2">20%</div>
                <div className="text-sm text-muted-foreground">Of e-waste is properly recycled</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-success mb-2">15kg</div>
                <div className="text-sm text-muted-foreground">CO2 saved per recycled device</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Device Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-3xl">{category.icon}</div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">INCLUDES</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item, itemIndex) => (
                            <Badge key={itemIndex} variant="secondary">{item}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">ENVIRONMENTAL IMPACT</h4>
                        <p className="text-sm text-foreground">{category.impact}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">RECYCLING TIPS</h4>
                        <p className="text-sm text-foreground">{category.recycling}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Card className="bg-gradient-primary text-white shadow-glow">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
                <p className="text-white/90 mb-6">Start classifying your e-waste today and contribute to a cleaner planet.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Learn;
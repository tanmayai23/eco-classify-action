import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, BookOpen, BarChart3 } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: Camera,
      title: "Smart Classification",
      description: "Upload photos of your electronic devices and get instant AI-powered identification and recycling guidance.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: BookOpen,
      title: "Learn & Educate",
      description: "Discover the environmental impact of e-waste and learn sustainable practices for electronic device disposal.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: BarChart3,
      title: "Track Impact",
      description: "Monitor your environmental contribution with detailed analytics on your recycling activities and CO2 savings.",
      gradient: "from-accent to-warning"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Why Choose E-Waste Management?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Making electronic waste management simple, educational, and impactful for everyone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
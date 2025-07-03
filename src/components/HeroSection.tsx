import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, Upload, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    itemsRecycled: 0,
    co2Saved: 0,
    itemsClassified: 0
  });

  // Animate counters
  useEffect(() => {
    const targetStats = {
      itemsRecycled: 1234,
      co2Saved: 567,
      itemsClassified: 8942
    };

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        itemsRecycled: Math.floor(targetStats.itemsRecycled * progress),
        co2Saved: Math.floor(targetStats.co2Saved * progress),
        itemsClassified: Math.floor(targetStats.itemsClassified * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats(targetStats);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { icon: "📱", delay: 0, x: "10%", y: "20%" },
    { icon: "💻", delay: 1, x: "80%", y: "30%" },
    { icon: "🔋", delay: 2, x: "20%", y: "70%" },
    { icon: "🖥️", delay: 1.5, x: "70%", y: "60%" },
    { icon: "⌚", delay: 0.5, x: "90%", y: "80%" },
    { icon: "🎧", delay: 2.5, x: "15%", y: "50%" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-20"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight"
          >
            Turn Your Tech Trash into{" "}
            <span className="text-primary">Environmental Action</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            AI-powered e-waste classification for a cleaner tomorrow
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => navigate("/classify")}
              className="group bg-gradient-primary hover:shadow-glow text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Camera className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start Classifying
              <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity animate-pulse-eco"></div>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/learn")}
              className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-muted transition-all duration-300"
            >
              <Upload className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center group">
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stats.itemsRecycled.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Items Recycled
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stats.co2Saved.toLocaleString()}
                  <span className="text-lg">kg</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  CO2 Saved
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stats.itemsClassified.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Items Classified
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-2 text-muted-foreground">
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp className="w-5 h-5 rotate-180" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
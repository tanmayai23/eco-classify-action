import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const Impact = () => {
  const personalStats = [
    { label: "Items Classified", value: 47, max: 100, color: "primary" },
    { label: "CO2 Saved (kg)", value: 156, max: 200, color: "success" },
    { label: "Devices Recycled", value: 23, max: 50, color: "secondary" },
  ];

  const achievements = [
    { title: "First Classification", icon: "🎯", earned: true },
    { title: "Eco Warrior", icon: "🌱", earned: true },
    { title: "Carbon Saver", icon: "🌍", earned: false },
    { title: "Recycling Champion", icon: "♻️", earned: false },
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
              Your Environmental Impact
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your contribution to a sustainable future
            </p>
          </motion.div>

          {/* Personal Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {personalStats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-foreground">{stat.label}</h3>
                    <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  </div>
                  <Progress value={(stat.value / stat.max) * 100} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">
                    {stat.value} / {stat.max}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Global Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Global Community Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">8,943</div>
                    <div className="text-sm text-muted-foreground">Total Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">45.2k</div>
                    <div className="text-sm text-muted-foreground">Items Classified</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">12.8k</div>
                    <div className="text-sm text-muted-foreground">Devices Recycled</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">189</div>
                    <div className="text-sm text-muted-foreground">Tons CO2 Saved</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Your Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-card shadow-card transition-all duration-300 ${
                    achievement.earned
                      ? "border-primary/50 shadow-glow"
                      : "opacity-50 grayscale"
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <h3 className="font-semibold text-sm">{achievement.title}</h3>
                    {achievement.earned && (
                      <div className="text-xs text-success mt-2">✓ Earned</div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Impact;
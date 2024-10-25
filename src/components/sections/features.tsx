import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { BarChart3, Globe, Users2, Zap } from "lucide-react";
import { WavePattern } from "@/components/graphics/abstract-shapes";

const features = [
  {
    name: "AI-Powered Matching",
    description: "Our advanced AI algorithms match you with buyers who are actively looking for products like yours.",
    icon: Zap,
  },
  {
    name: "Global Database",
    description: "Access our extensive database of verified international buyers across 190+ countries.",
    icon: Globe,
  },
  {
    name: "Verified Contacts",
    description: "Every lead is verified and validated to ensure you're connecting with real decision-makers.",
    icon: Users2,
  },
  {
    name: "Analytics Dashboard",
    description: "Track your lead generation performance with detailed analytics and insights.",
    icon: BarChart3,
  },
];

export function Features() {
  return (
    <div className="relative py-24 bg-muted/50 overflow-hidden">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to expand globally
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform provides all the tools and insights you need to succeed in international markets.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.name} className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-background/80">
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.name}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
      
      {/* Background Graphics */}
      <div className="absolute inset-0 -z-0">
        <WavePattern className="absolute bottom-0 left-0 w-full h-64" />
      </div>
    </div>
  );
}
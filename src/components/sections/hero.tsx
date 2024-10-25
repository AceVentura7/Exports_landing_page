import { ArrowUpRight, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CircleGrid, Rings } from "@/components/graphics/abstract-shapes";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-24 pb-20">
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Globe2 className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold tracking-tight">GlobalLeads</h2>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Generate High-Quality{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              International Leads
            </span>{" "}
            for Your Export Business
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with verified international buyers, expand your global reach, and grow your export business with our AI-powered lead generation platform.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Abstract Graphics */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <CircleGrid className="absolute top-0 left-0 w-full h-full" />
        <Rings className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rotate-12" />
        <Rings className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] rotate-45" />
      </div>
      
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-cyan-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}
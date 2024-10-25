import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Globe2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe2 className="h-6 w-6" />
            <span className="text-lg font-semibold">GlobalLeads</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
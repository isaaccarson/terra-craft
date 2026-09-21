import { Navigation } from "@/components/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/10" />
        
        {/* 3D Model Placeholder - this will be replaced with actual 3D content later */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated wireframe placeholder */}
              <svg
                className="w-full h-full max-w-2xl max-h-96 animate-[spin_20s_linear_infinite]"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M200 50 L350 150 L350 250 L200 350 L50 250 L50 150 Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/30"
                />
                <path
                  d="M200 50 L200 350 M50 150 L350 150 M50 250 L350 250 M50 150 L200 50 M200 50 L350 150 M350 150 L350 250 M350 250 L200 350 M200 350 L50 250 M50 250 L50 150"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/20"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
              Design & Fabrication
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12">
              Mechanical engineering meets craftsmanship.
              <br className="hidden sm:block" />
              Where precision and artistry converge.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
              >
                View Projects
              </Link>
              <Link
                href="/guitar-shop"
                className="w-full sm:w-auto px-8 py-3 border border-border text-foreground rounded-md hover:bg-secondary transition-colors font-medium"
              >
                Custom Guitars
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
              A selection of projects showcasing mechanical design, fabrication,
              and craftsmanship
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Project 1: Custom Guitars */}
            <ScrollReveal delay={100}>
              <Link href="/guitar-shop">
                <Card className="group overflow-hidden cursor-pointer border-border hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl sm:text-8xl text-primary/20 group-hover:scale-110 transition-transform duration-500">
                        🎸
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                      Custom Guitar Building
                    </h3>
                    <p className="text-muted-foreground">
                      Hand-crafted instruments combining traditional lutherie
                      with modern CAD and CNC precision
                    </p>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>

            {/* Project 2: Metal Fabrication */}
            <ScrollReveal delay={200}>
              <Link href="/projects#metal-fabrication">
                <Card className="group overflow-hidden cursor-pointer border-border hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-secondary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl sm:text-8xl text-primary/20 group-hover:scale-110 transition-transform duration-500">
                        ⚙️
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                      Metal Fabrication
                    </h3>
                    <p className="text-muted-foreground">
                      Custom metalwork for commercial and institutional clients
                    </p>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>

            {/* Project 3: Mechanical Design */}
            <ScrollReveal delay={300}>
              <Link href="/projects#mechanical-design">
                <Card className="group overflow-hidden cursor-pointer border-border hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary/50 to-background relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl sm:text-8xl text-primary/20 group-hover:scale-110 transition-transform duration-500">
                        📐
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                      Mechanical Design
                    </h3>
                    <p className="text-muted-foreground">
                      Engineering solutions from concept to production
                    </p>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>

            {/* Project 4: Woodworking */}
            <ScrollReveal delay={400}>
              <Link href="/projects#woodworking">
                <Card className="group overflow-hidden cursor-pointer border-border hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-secondary/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl sm:text-8xl text-primary/20 group-hover:scale-110 transition-transform duration-500">
                        🪵
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                      Custom Woodworking
                    </h3>
                    <p className="text-muted-foreground">
                      One-of-a-kind pieces blending function and form
                    </p>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 sm:mb-16 text-center">
              Capabilities
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  CAD Design
                </h3>
                <p className="text-muted-foreground">
                  3D modeling and technical drawings in Fusion 360
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  CNC Machining
                </h3>
                <p className="text-muted-foreground">
                  Precision manufacturing from CAD to finished product
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Design Aesthetic
                </h3>
                <p className="text-muted-foreground">
                  Engineering with an eye for visual appeal
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Let's Create Something
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10">
              Whether you're looking for a custom guitar, a unique fabrication
              project, or engineering expertise
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium text-lg"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Isaac Carson. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/photography"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Photography
            </Link>
            <Link
              href="/resume"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Resume
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Navigation } from "@/components/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function GuitarShop() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Custom Guitar Shop
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-12">
              Hand-crafted instruments where traditional lutherie meets modern
              precision. Each guitar is designed and built from scratch with
              meticulous attention to detail, combining CAD design, CNC
              machining, and time-honored woodworking techniques.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Guitars */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Completed Builds
            </h2>
            <p className="text-muted-foreground mb-12 sm:mb-16">
              Two custom instruments, each representing hundreds of hours of
              design and craftsmanship
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Guitar 1 */}
            <ScrollReveal delay={100}>
              <Card className="overflow-hidden border-border">
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-accent/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl sm:text-9xl text-primary/10">
                      🎸
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                    Build #1
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                    Custom Electric Guitar
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <span className="font-medium text-foreground">Body:</span>{" "}
                      Custom carved
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Neck:</span>{" "}
                      Hand-shaped profile
                    </div>
                    <div>
                      <span className="font-medium text-foreground">
                        Process:
                      </span>{" "}
                      CAD design, CNC routing, hand finishing
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Guitar 2 */}
            <ScrollReveal delay={200}>
              <Card className="overflow-hidden border-border">
                <div className="aspect-[3/4] bg-gradient-to-br from-accent/10 to-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl sm:text-9xl text-primary/10">
                      🎸
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                    Build #2
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                    Custom Electric Guitar
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <span className="font-medium text-foreground">Body:</span>{" "}
                      Custom carved
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Neck:</span>{" "}
                      Hand-shaped profile
                    </div>
                    <div>
                      <span className="font-medium text-foreground">
                        Process:
                      </span>{" "}
                      CAD design, CNC routing, hand finishing
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 sm:mb-16 text-center">
              The Build Process
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Design
                </h3>
                <p className="text-muted-foreground">
                  CAD modeling in Fusion 360 for precise geometry and toolpaths
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  CNC Machining
                </h3>
                <p className="text-muted-foreground">
                  Precision routing and cutting for consistent quality
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🪵</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Handwork
                </h3>
                <p className="text-muted-foreground">
                  Shaping, sanding, and finishing by hand for optimal feel
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Finishing
                </h3>
                <p className="text-muted-foreground">
                  Custom finishes and final assembly with attention to detail
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* In Progress Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Builds in Progress
            </h2>
            <p className="text-muted-foreground mb-12 sm:mb-16">
              Multiple instruments currently in various stages of completion
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="overflow-hidden border-border">
                  <div className="aspect-square bg-gradient-to-br from-secondary/50 to-accent/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-primary/10">🎸</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Build #{i + 2} - In Progress
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Commission CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Commission a Custom Guitar
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10">
              Each instrument is built to your specifications. From wood
              selection to final setup, work directly with me to create your
              ideal guitar.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium text-lg"
            >
              Start Your Build
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
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}

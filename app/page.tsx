import { Navigation } from "@/components/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Strong First Impression */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 60% - Background */}
        <div className="absolute inset-0 bg-background" />
        
        {/* 30% - Secondary layer with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-secondary/20" />
        
        {/* 3D Model Placeholder - Will be replaced with actual 3D content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
            <svg
              className="w-full h-full max-w-2xl max-h-96 animate-[spin_20s_linear_infinite]"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M200 50 L350 150 L350 250 L200 350 L50 250 L50 150 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary/40"
              />
              <path
                d="M200 50 L200 350 M50 150 L350 150 M50 250 L350 250 M50 150 L200 50 M200 50 L350 150 M350 150 L350 250 M350 250 L200 350 M200 350 L50 250 M50 250 L50 150"
                stroke="currentColor"
                strokeWidth="0.75"
                className="text-primary/25"
              />
            </svg>
          </div>
        </div>

        {/* Hero Content - Clear Visual Hierarchy */}
        <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto">
          <ScrollReveal direction="up">
            {/* Primary Heading - Largest, most prominent */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 tracking-tight">
              Design.<br className="sm:hidden" /> Build. Create.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            {/* Supporting Text - Scannable */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 font-medium mb-4">
              Mechanical Engineering + Craftsmanship
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              CAD design • CNC fabrication • Custom guitars • One-of-a-kind builds
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300}>
            {/* Clear CTAs - 10% Terracotta Accent, No Ghost Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Overview - Scannable Content */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🎸</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Custom Guitars
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Hand-crafted electric guitars built from the ground up
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Metal Fabrication
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Custom metalwork for commercial and institutional projects
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  CAD Design
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Precision modeling and manufacturing with Fusion 360
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects - Visual Hierarchy */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A selection of recent work spanning multiple disciplines
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Project 1: Guitars */}
            <ScrollReveal delay={100}>
              <Link href="/guitar-shop" className="group block">
                <Card className="overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-secondary/50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="text-8xl lg:text-9xl text-primary/15">🎸</div>
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold">
                      GUITAR SHOP
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      Custom Guitar Building
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      Two completed builds + multiple in progress. CAD design, CNC machining, hand finishing.
                    </p>
                    <div className="text-primary font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                      Explore Guitar Shop →
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>

            {/* Project 2: Fabrication */}
            <ScrollReveal delay={200}>
              <Link href="/projects#metal-fabrication" className="group block">
                <Card className="overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary/70 to-background relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="text-8xl lg:text-9xl text-primary/15">⚙️</div>
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold">
                      FABRICATION
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      Commercial Metalwork
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      Custom signage and fabrication for commercial clients including Penn State Athletics.
                    </p>
                    <div className="text-primary font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                      View Projects →
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>

            {/* Project 3: Engineering */}
            <ScrollReveal delay={300}>
              <Link href="/projects#mechanical-design" className="group block">
                <Card className="overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary/50 to-secondary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="text-8xl lg:text-9xl text-primary/15">📐</div>
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold">
                      ENGINEERING
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      Mechanical Design
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      Professional engineering work at SMS Group in industrial manufacturing.
                    </p>
                    <div className="text-primary font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                      See More →
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>

            {/* Project 4: Woodworking */}
            <ScrollReveal delay={400}>
              <Link href="/projects#woodworking" className="group block">
                <Card className="overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-background to-secondary/40 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="text-8xl lg:text-9xl text-primary/15">🪵</div>
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold">
                      WOODWORK
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      Custom Woodworking
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      One-off functional pieces combining craftsmanship with practical design.
                    </p>
                    <div className="text-primary font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                      Browse Work →
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Strong CTA - No Friction */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Let's Build Something
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Custom guitar commission? Fabrication project? Just want to chat about design?
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer - Clean and Simple */}
      <footer className="py-10 px-6 sm:px-8 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-foreground font-semibold text-lg mb-1">Isaac Carson</p>
              <p className="text-muted-foreground text-sm">Pittsburgh, PA</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/guitar-shop" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Guitar Shop
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Projects
              </Link>
              <Link href="/photography" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Photography
              </Link>
              <Link href="/resume" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Resume
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © 2026 Isaac Carson. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

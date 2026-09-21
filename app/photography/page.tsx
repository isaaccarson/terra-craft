import { Navigation } from "@/components/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Photography() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Photography
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
              Nature and landscape photography captured during moments away from
              the workshop. A collection of scenes that inspire the aesthetic
              sensibilities behind my design work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Photography Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Large featured image */}
            <ScrollReveal delay={100}>
              <Card className="overflow-hidden border-border sm:col-span-2 sm:row-span-2 group cursor-pointer">
                <div className="aspect-[4/3] sm:aspect-auto sm:h-full bg-gradient-to-br from-secondary via-accent/10 to-primary/5 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl text-primary/10 group-hover:scale-105 transition-transform duration-700">
                      🏔️
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Regular images */}
            {[
              { emoji: "🌲", delay: 200 },
              { emoji: "🌅", delay: 250 },
              { emoji: "🏞️", delay: 300 },
              { emoji: "🌊", delay: 350 },
              { emoji: "🍂", delay: 400 },
              { emoji: "⛰️", delay: 450 },
              { emoji: "🌄", delay: 500 },
              { emoji: "🌾", delay: 550 },
              { emoji: "🏕️", delay: 600 },
              { emoji: "🌳", delay: 650 },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={item.delay}>
                <Card className="overflow-hidden border-border group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-secondary/50 to-accent/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-primary/10 group-hover:scale-110 transition-transform duration-700">
                        {item.emoji}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Photography Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Photography offers a counterbalance to fabrication work—capturing
              rather than creating, observing rather than designing. The
              attention to composition, light, and form in nature photography
              informs the aesthetic decisions in every mechanical design and
              build.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Back to Projects Link */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-muted-foreground mb-8">
              Interested in my design and fabrication work?
            </p>
            <Link
              href="/projects"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium text-lg"
            >
              View Projects
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

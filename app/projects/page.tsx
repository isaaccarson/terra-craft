import { Navigation } from "@/components/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Projects
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
              A showcase of mechanical design, fabrication, and custom builds
              spanning multiple disciplines and materials
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 sm:mb-16">
              Featured Work
            </h2>
          </ScrollReveal>

          <div className="space-y-16 sm:space-y-24">
            {/* Project 1: Guitars */}
            <ScrollReveal delay={100}>
              <div
                id="guitar-building"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
              >
                <Card className="overflow-hidden border-border order-2 lg:order-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-accent/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl text-primary/10">🎸</div>
                    </div>
                  </div>
                </Card>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium mb-4">
                    Guitar Building
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Custom Electric Guitars
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Two completed hand-crafted instruments built from scratch.
                    Each guitar represents the full design and fabrication
                    process: from initial CAD modeling to CNC machining, hand
                    shaping, finishing, and final setup. Multiple builds
                    currently in progress.
                  </p>
                  <div className="space-y-2 text-muted-foreground mb-6">
                    <p>
                      <span className="font-medium text-foreground">
                        Skills:
                      </span>{" "}
                      CAD Design, CNC Routing, Lutherie, Wood Finishing
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Tools:</span>{" "}
                      Fusion 360, CNC Router, Traditional Hand Tools
                    </p>
                  </div>
                  <Link
                    href="/guitar-shop"
                    className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
                  >
                    View Guitar Shop
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Project 2: Metal Fabrication - Dentist Sign */}
            <ScrollReveal delay={200}>
              <div
                id="metal-fabrication"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
              >
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium mb-4">
                    Commercial Fabrication
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Dental Office Signage
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Custom metal fabrication for a dental practice waiting room.
                    Designed and manufactured signage that combines professional
                    aesthetics with durability. Project involved CAD design,
                    material selection, precision cutting, and finishing for a
                    polished commercial installation.
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Skills:
                      </span>{" "}
                      Metal Fabrication, CAD Design, Commercial Installation
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Materials:
                      </span>{" "}
                      Metal, Custom Finish
                    </p>
                  </div>
                </div>
                <Card className="overflow-hidden border-border">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-secondary relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl text-primary/10">🏥</div>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>

            {/* Project 3: PSU Football */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <Card className="overflow-hidden border-border order-2 lg:order-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary/50 to-accent/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl text-primary/10">🏈</div>
                    </div>
                  </div>
                </Card>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium mb-4">
                    Institutional Project
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Penn State Football Project
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Metal fabrication project for Penn State University football
                    program. Designed and fabricated custom metal components to
                    specification. Project showcases ability to work with
                    institutional clients and deliver high-quality results on
                    deadline.
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Skills:
                      </span>{" "}
                      Metal Fabrication, Project Management, Client Collaboration
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Client:
                      </span>{" "}
                      Penn State University Athletics
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Project 4: Mechanical Design Internship */}
            <ScrollReveal delay={400}>
              <div
                id="mechanical-design"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
              >
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium mb-4">
                    Professional Experience
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Mechanical Design - SMS Group
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Mechanical design project completed during internship at SMS
                    Group. Applied CAD and engineering principles to real-world
                    industrial challenges. Project involved detailed modeling,
                    analysis, and documentation for manufacturing applications in
                    the metals industry.
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Skills:
                      </span>{" "}
                      Mechanical Design, CAD, Engineering Documentation
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Company:
                      </span>{" "}
                      SMS Group - Pittsburgh, PA
                    </p>
                  </div>
                </div>
                <Card className="overflow-hidden border-border">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-secondary/30 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl text-primary/10">⚙️</div>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Additional Work Gallery */}
      <section
        id="woodworking"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Additional Work
            </h2>
            <p className="text-muted-foreground mb-12 sm:mb-16">
              A collection of custom woodworking and smaller fabrication projects
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <Card className="overflow-hidden border-border group cursor-pointer hover:shadow-lg transition-all">
                  <div className="aspect-square bg-gradient-to-br from-secondary/50 to-accent/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="text-4xl text-primary/10">🪵</div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10">
              From concept to completion, let's discuss how I can help bring
              your ideas to life
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

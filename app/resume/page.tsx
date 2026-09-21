import { Navigation } from "@/components/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";

export default function Resume() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Isaac Carson
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              Mechanical Engineer
            </p>
            <p className="text-lg text-muted-foreground">
              Pittsburgh, PA
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <ScrollReveal>
            <Card className="p-6 sm:p-8 border-border">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Education
              </h2>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  The Pennsylvania State University
                </h3>
                <p className="text-muted-foreground mt-1">
                  Bachelor of Science in Mechanical Engineering
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  University Park • Graduated December 2025
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* Experience */}
          <ScrollReveal delay={100}>
            <Card className="p-6 sm:p-8 border-border">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Professional Experience
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Mechanical Engineer
                  </h3>
                  <p className="text-muted-foreground mt-1">SMS Group</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pittsburgh, PA • Current
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        Mechanical design for industrial manufacturing equipment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        CAD modeling and technical documentation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        Collaboration with cross-functional engineering teams
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Engineering Intern
                  </h3>
                  <p className="text-muted-foreground mt-1">SMS Group</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pittsburgh, PA
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        Completed mechanical design projects for metals industry
                        applications
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        Applied engineering principles to real-world industrial
                        challenges
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal delay={200}>
            <Card className="p-6 sm:p-8 border-border">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    CAD & Design
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Fusion 360</li>
                    <li>3D Modeling</li>
                    <li>Technical Drawings</li>
                    <li>Design for Manufacturing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Fabrication
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>CNC Machining</li>
                    <li>Metal Fabrication</li>
                    <li>Woodworking</li>
                    <li>Hand Tool Proficiency</li>
                  </ul>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Projects Highlight */}
          <ScrollReveal delay={300}>
            <Card className="p-6 sm:p-8 border-border">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Notable Projects
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Custom Guitar Building
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Two completed hand-crafted electric guitars built from
                    scratch using CAD design, CNC machining, and traditional
                    lutherie techniques
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Commercial Metal Fabrication
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Custom signage and fabrication projects for commercial and
                    institutional clients including Penn State Athletics
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Custom Woodworking
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Various one-off functional pieces combining design
                    aesthetics with practical application
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Download Resume CTA */}
          <ScrollReveal delay={400}>
            <div className="text-center pt-8">
              <p className="text-muted-foreground mb-6">
                Interested in working together?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium">
                  Download PDF Resume
                </button>
                <a
                  href="/contact"
                  className="px-8 py-3 border border-border text-foreground rounded-md hover:bg-secondary transition-colors font-medium inline-block"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Isaac Carson. All rights reserved.
          </p>
          <a
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
}

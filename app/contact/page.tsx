"use client";

import { Navigation } from "@/components/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Let's Connect
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're interested in a custom guitar, have a fabrication
              project in mind, or want to discuss opportunities, I'd love to
              hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <Card className="p-6 sm:p-8 border-border">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="guitar">Custom Guitar Commission</option>
                      <option value="fabrication">Fabrication Project</option>
                      <option value="employment">Employment Opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <Card className="p-6 sm:p-8 border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">
                        Location
                      </h3>
                      <p className="text-foreground">Pittsburgh, PA</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:isaac@example.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        isaac@example.com
                      </a>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="p-6 sm:p-8 border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Project Inquiries
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Guitar Commissions:
                      </span>{" "}
                      Custom builds are currently available. Lead time varies by
                      project complexity.
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Fabrication Projects:
                      </span>{" "}
                      Taking on select custom fabrication and design projects.
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Collaborations:
                      </span>{" "}
                      Open to interesting projects that combine engineering,
                      design, and craftsmanship.
                    </p>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="p-6 sm:p-8 border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Response Time
                  </h2>
                  <p className="text-muted-foreground">
                    I typically respond to inquiries within 24-48 hours. For
                    urgent matters, please indicate so in your message subject.
                  </p>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Explore My Work
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="px-6 py-3 border border-border text-foreground rounded-md hover:bg-background transition-colors font-medium"
              >
                View Projects
              </a>
              <a
                href="/guitar-shop"
                className="px-6 py-3 border border-border text-foreground rounded-md hover:bg-background transition-colors font-medium"
              >
                Guitar Shop
              </a>
              <a
                href="/resume"
                className="px-6 py-3 border border-border text-foreground rounded-md hover:bg-background transition-colors font-medium"
              >
                Resume
              </a>
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

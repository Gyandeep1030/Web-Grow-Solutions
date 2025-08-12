import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import {
  Monitor,
  Smartphone,
  Code,
  ArrowRight,
  Palette,
  TrendingUp,
  Settings,
  Lightbulb,
  Rocket,
  Lock,
  Users,
  CheckCircle,
  Quote,
  MessageCircle,
  Calendar,
} from "lucide-react";

import LOGO from "../assets/LOGO.png"; // Adjust the path as necessary

export default function Services() {
  const coreServices = [
    {
      icon: Monitor,
      title: "Custom Website Development",
      description:
        "Responsive, SEO-optimized, and user-friendly websites that convert visitors into customers.",
      features: [
        "Portfolio, business, e-commerce, or booking systems",
        "Responsive design for all devices",
        "SEO optimization for better visibility",
        "Fast loading and secure",
      ],
      tech: "HTML, CSS, React, Next.js, Bootstrap",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform apps using React Native or Flutter for smooth user experience across all devices.",
      features: [
        "Business, utility, or service-based apps",
        "iOS and Android compatibility",
        "API integrations",
        "App store deployment",
      ],
      tech: "React Native, Flutter, API Integration",
    },
    {
      icon: Code,
      title: "Custom Software Solutions",
      description:
        "Tailored software for business operations with scalable and secure backend systems.",
      features: [
        "CRM, inventory, and ERP systems",
        "Business automation tools",
        "Database design and management",
        "Cloud deployment and scaling",
      ],
      tech: "Node.js, Java Spring Boot, MongoDB, PostgreSQL",
    },
  ];

  const addOnServices = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Modern, minimal, and conversion-focused interfaces that enhance user experience.",
      features: [
        "Wireframes and mockups",
        "Interactive prototypes",
        "User journey mapping",
        "Brand consistency",
      ],
    },
    {
      icon: TrendingUp,
      title: "SEO & Analytics Setup",
      description:
        "Boost your online visibility with comprehensive SEO and analytics implementation.",
      features: [
        "On-page SEO optimization",
        "Google Analytics integration",
        "Search Console setup",
        "Performance tracking",
      ],
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description:
        "Keep your digital assets running smoothly with our ongoing maintenance and support services.",
      features: [
        "Monthly updates and backups",
        "Bug fixes and improvements",
        "Security monitoring",
        "24/7 technical support",
      ],
    },
  ];

  const industries = [
    {
      name: "Startups",
      description: "Launch your startup with a strong digital foundation",
    },
    {
      name: "Local Businesses",
      description: "Grow your local presence and reach more customers",
    },
    {
      name: "E-commerce",
      description: "Build and scale your online store effectively",
    },
    {
      name: "Education & Coaching",
      description: "Share knowledge through engaging digital platforms",
    },
    {
      name: "Health & Wellness",
      description: "Connect with clients through modern health solutions",
    },
  ];

  const whyChooseUs = [
    {
      icon: Lightbulb,
      title: "Personalized Consultation",
      description:
        "We take time to understand your unique business needs and goals.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality.",
    },
    {
      icon: Lock,
      title: "Secure & Scalable Code",
      description:
        "Built with security best practices and future growth in mind.",
    },
    {
      icon: Users,
      title: "Friendly Support",
      description:
        "Ongoing support and maintenance to keep your project running smoothly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray leading-tight mb-6">
            Smart Digital Solutions{" "}
            <span className="text-brand-blue">Tailored for Your Business</span>
          </h1>
          <p className="text-lg lg:text-xl text-brand-gray-light max-w-3xl mx-auto mb-8">
            From websites to mobile apps and software tools, we build it all —
            professionally and with precision. Transform your business with our
            comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-200"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Core Services
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              Complete digital solutions to power your business growth and
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray mb-4">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-light mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-brand-gray-light"
                      >
                        <CheckCircle className="h-4 w-4 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4 mb-6">
                    <p className="text-xs text-brand-gray-light font-medium">
                      <strong>Tech Stack:</strong> {service.tech}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200"
                  >
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-On Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Digital Growth Solutions
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              Additional services to enhance and maintain your digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-gray mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-light text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs text-brand-gray-light"
                      >
                        <CheckCircle className="h-3 w-3 text-brand-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              We work with businesses across various industries, providing
              tailored solutions for each sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-brand-gray mb-2">
                  {industry.name}
                </h3>
                <p className="text-xs text-brand-gray-light">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              We're committed to delivering exceptional results and building
              long-term partnerships with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-brand-gray mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-brand-gray-light text-sm">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Got an idea or project in mind?{" "}
            <span className="block">Let's make it real.</span>
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-blue-100">
            Ready to transform your business with our digital solutions? Let's
            discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img
                src={LOGO}
                alt="Web Grow Solution"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">Web Grow Solution</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building digital solutions that grow your business.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Web Grow Solution. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

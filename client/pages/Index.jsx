import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import {
  Monitor,
  Smartphone,
  Code,
  ArrowRight,
  Star,
  Users,
  Award,
  MessageCircle,
  CheckCircle,
  Quote,
} from "lucide-react";

import LOGO from "../assets/LOGO.png"; // Adjust the path as necessary

export default function Index() {
  const services = [
    {
      icon: Monitor,
      title: "Website Development",
      description:
        "Custom, responsive websites that convert visitors into customers. Built with modern technologies and SEO optimization.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "CMS Integration",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that provide exceptional user experiences on iOS and Android.",
      features: [
        "iOS & Android",
        "Cross-Platform",
        "UI/UX Design",
        "App Store Deployment",
      ],
    },
    {
      icon: Code,
      title: "Software Solutions",
      description:
        "Enterprise-grade software solutions tailored to your business needs with scalable architecture.",
      features: [
        "Custom Software",
        "API Integration",
        "Database Design",
        "Cloud Deployment",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Web Grow Solution transformed our digital presence completely. Their team delivered exactly what we needed, on time and within budget.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Local Retail Chain",
      text: "The mobile app they built for us increased our customer engagement by 200%. Outstanding work and professional service.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Education Platform",
      text: "Their custom software solution streamlined our entire workflow. We couldn't be happier with the results.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "3+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray leading-tight">
                We Build Websites, Apps & Software —{" "}
                <span className="text-brand-blue">The Right Way</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-brand-gray-light max-w-2xl">
                Transform your business with custom digital solutions. We create
                websites, mobile apps, and software that drive real results for
                your business.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Let's Build Together
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-200"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold">
                        {stat.number}
                      </div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Our Services
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business
              thrive in the modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
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
                        className="flex items-center text-sm text-brand-gray-light"
                      >
                        <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative"
              >
                <Quote className="h-8 w-8 text-brand-blue/20 absolute top-4 right-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-brand-gray-light mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-brand-gray">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-brand-gray-light">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <Users className="h-12 w-12 mx-auto mb-4 text-brand-blue" />
              <div className="text-2xl font-bold">150+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-white">
              <Award className="h-12 w-12 mx-auto mb-4 text-brand-blue" />
              <div className="text-2xl font-bold">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-white">
              <Code className="h-12 w-12 mx-auto mb-4 text-brand-blue" />
              <div className="text-2xl font-bold">300+</div>
              <div className="text-gray-300">Projects Done</div>
            </div>
            <div className="text-white">
              <Star className="h-12 w-12 mx-auto mb-4 text-brand-blue" />
              <div className="text-2xl font-bold">5.0</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-blue-100">
            Let's discuss how we can help bring your digital vision to life. Get
            in touch with us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => window.open("https://wa.me/8076390223", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
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

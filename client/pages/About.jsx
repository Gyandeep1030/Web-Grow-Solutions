import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Clock,
  Code,
  Smartphone,
  Monitor,
  ArrowRight,
  Star,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      description:
        "Full-stack developer with 8+ years experience in React, Node.js, and mobile development.",
      expertise: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      description:
        "Creative designer passionate about user-centered design and modern interfaces.",
      expertise: [
        "Figma",
        "Adobe Creative Suite",
        "User Research",
        "Prototyping",
      ],
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Developer",
      description:
        "Specialized in scalable backend systems, API development, and database optimization.",
      expertise: ["Java", "PostgreSQL", "Docker", "Microservices"],
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We never compromise on quality. Every line of code is written with precision and tested thoroughly.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your success is our success. We work closely with you to understand and exceed your expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to bring you cutting-edge solutions that give you a competitive edge.",
    },
    {
      icon: Heart,
      title: "Transparency",
      description:
        "Open communication, honest timelines, and clear pricing. No hidden fees or surprises.",
    },
  ];

  const achievements = [
    {
      icon: Award,
      number: "150+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries",
    },
    {
      icon: Users,
      number: "98%",
      label: "Client Satisfaction",
      description:
        "Our clients love working with us and often return for more projects",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description:
        "Round-the-clock support to keep your business running smoothly",
    },
    {
      icon: Rocket,
      number: "3+",
      label: "Years in Business",
      description:
        "Proven track record of delivering reliable digital solutions",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Proven Expertise",
      points: [
        "Certified developers with industry experience",
        "Latest technology stack and best practices",
        "Comprehensive testing and quality assurance",
        "Scalable and secure code architecture",
      ],
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      points: [
        "Regular project updates and communication",
        "Your feedback drives our development process",
        "Agile methodology for flexible project management",
        "Direct access to our development team",
      ],
    },
    {
      icon: Rocket,
      title: "Fast & Reliable",
      points: [
        "Quick turnaround without compromising quality",
        "On-time delivery guaranteed",
        "Efficient development processes",
        "Post-launch support and maintenance",
      ],
    },
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
                About <span className="text-brand-blue">Web Grow Solution</span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-brand-gray-light max-w-2xl">
                We're a passionate team of developers, designers, and digital
                strategists dedicated to helping businesses grow through
                innovative technology solutions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-200"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-blue-100">
                    To empower businesses with cutting-edge digital solutions
                    that drive growth, efficiency, and success in the modern
                    marketplace.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Monitor className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                    <div className="text-sm text-blue-100">Websites</div>
                  </div>
                  <div>
                    <Smartphone className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                    <div className="text-sm text-blue-100">Mobile Apps</div>
                  </div>
                  <div>
                    <Code className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                    <div className="text-sm text-blue-100">Software</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-brand-gray-light">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2021, Web Grow Solution started with a simple vision:
                to make high-quality digital solutions accessible to businesses
                of all sizes. What began as a small team of passionate
                developers has grown into a trusted partner for companies
                looking to establish and expand their digital presence.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We understand that every business is unique, which is why we
                take a personalized approach to every project. Whether you're a
                startup looking to make your mark or an established business
                ready to embrace digital transformation, we're here to help you
                succeed.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we've successfully delivered over 150 projects and
                continue to grow alongside our clients, building long-term
                partnerships based on trust, quality, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              Our diverse team brings together expertise in development, design,
              and strategy to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 text-center"
              >
                <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-brand-gray mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-blue font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-brand-gray-light mb-6">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Our Values
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work
              with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client
              satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-brand-green" />
                  </div>
                  <div className="text-3xl font-bold text-brand-gray mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-brand-blue mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-brand-gray-light">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Why Choose Web Grow Solution?
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              We combine technical expertise with a client-first approach to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray mb-4">
                    {reason.title}
                  </h3>
                  <ul className="space-y-3">
                    {reason.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-brand-gray-light"
                      >
                        <CheckCircle className="h-4 w-4 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
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
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-blue-100">
            Let's work together to bring your vision to life. Get in touch with
            our team and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Our Team
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg rounded-lg transition-all duration-200"
            >
              View Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
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
                src="https://cdn.builder.io/api/v1/image/assets%2Fc2768025a90349d4a41b3f36e3ea556c%2F55243b94881a4041877ea67c83eb6a04?format=webp&width=800"
                alt="Web Grow Solution"
                className="w-8 h-8 brightness-0 invert"
              />
              <span className="text-xl font-bold">Web Grow Solution</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building digital solutions that grow your business.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Web Grow Solution. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

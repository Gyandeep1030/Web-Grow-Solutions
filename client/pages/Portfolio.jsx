import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import {
  Monitor,
  Smartphone,
  Code,
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Star,
  Filter,
  Grid,
  List,
  Eye,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const projects = [
    {
      id: 1,
      title: "EcoTech Solutions",
      category: "website",
      type: "Business Website",
      description:
        "Modern corporate website for a renewable energy company featuring interactive animations and responsive design.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Interactive Animations",
        "CMS Integration",
      ],
      timeline: "6 weeks",
      client: "EcoTech Solutions",
      year: "2024",
      rating: 5,
      liveUrl: "https://ecotech-demo.com",
      caseStudyUrl: "#",
    },
    {
      id: 2,
      title: "FitTracker Pro",
      category: "mobile",
      type: "Fitness Mobile App",
      description:
        "Cross-platform fitness tracking app with real-time workout monitoring, nutrition tracking, and social features.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      features: [
        "Real-time Tracking",
        "Social Features",
        "Offline Mode",
        "Push Notifications",
      ],
      timeline: "12 weeks",
      client: "FitLife Inc.",
      year: "2024",
      rating: 5,
      liveUrl: "https://fittracker-demo.com",
      caseStudyUrl: "#",
    },
    {
      id: 3,
      title: "InventoryMax",
      category: "software",
      type: "Inventory Management System",
      description:
        "Complete inventory management solution for retail businesses with real-time tracking, automated reports, and multi-location support.",
      image: "/api/placeholder/600/400",
      technologies: ["Java Spring", "PostgreSQL", "Angular", "Docker"],
      features: [
        "Real-time Tracking",
        "Automated Reports",
        "Multi-location Support",
        "API Integration",
      ],
      timeline: "16 weeks",
      client: "RetailChain Corp",
      year: "2023",
      rating: 5,
      liveUrl: "https://inventorymax-demo.com",
      caseStudyUrl: "#",
    },
    {
      id: 4,
      title: "Artisan Marketplace",
      category: "website",
      type: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform for local artisans to sell their handmade products with integrated payment processing.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      features: [
        "Payment Processing",
        "Vendor Management",
        "Order Tracking",
        "Review System",
      ],
      timeline: "10 weeks",
      client: "Artisan Collective",
      year: "2024",
      rating: 5,
      liveUrl: "https://artisan-marketplace.com",
      caseStudyUrl: "#",
    },
    {
      id: 5,
      title: "MindfulMoments",
      category: "mobile",
      type: "Mental Health App",
      description:
        "Meditation and mindfulness app with guided sessions, progress tracking, and personalized recommendations.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Firebase", "ML Kit", "Figma"],
      features: [
        "Guided Meditations",
        "Progress Tracking",
        "Offline Content",
        "Personalized Plans",
      ],
      timeline: "8 weeks",
      client: "Wellness Co.",
      year: "2024",
      rating: 5,
      liveUrl: "https://mindfulmoments-app.com",
      caseStudyUrl: "#",
    },
    {
      id: 6,
      title: "SchoolConnect",
      category: "software",
      type: "Educational Management System",
      description:
        "Comprehensive school management software with student information systems, grade tracking, and parent communication tools.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      features: [
        "Student Management",
        "Grade Tracking",
        "Parent Portal",
        "Communication Tools",
      ],
      timeline: "20 weeks",
      client: "Metro School District",
      year: "2023",
      rating: 5,
      liveUrl: "https://schoolconnect-demo.com",
      caseStudyUrl: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "website",
      label: "Websites",
      count: projects.filter((p) => p.category === "website").length,
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "software",
      label: "Software",
      count: projects.filter((p) => p.category === "software").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "website":
        return Monitor;
      case "mobile":
        return Smartphone;
      case "software":
        return Code;
      default:
        return Monitor;
    }
  };

  const ProjectCard = ({ project }) => {
    const IconComponent = getCategoryIcon(project.category);

    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <div className="relative overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center">
            <IconComponent className="h-16 w-16 text-brand-blue/40" />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              <Button
                size="sm"
                className="bg-white text-brand-blue hover:bg-gray-100"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white border-white text-brand-blue hover:bg-gray-100"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">
              {project.type}
            </span>
            <div className="flex items-center">
              {[...Array(project.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-brand-gray mb-2">
            {project.title}
          </h3>
          <p className="text-brand-gray-light text-sm mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-brand-gray px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-gray-100 text-brand-gray px-2 py-1 rounded">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
          <div className="flex items-center justify-between text-sm text-brand-gray-light mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {project.timeline}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {project.client}
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              Case Study
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const ProjectListItem = ({ project }) => {
    const IconComponent = getCategoryIcon(project.category);

    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-6">
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 rounded-lg flex items-center justify-center flex-shrink-0">
            <IconComponent className="h-8 w-8 text-brand-blue/60" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-brand-gray">
                {project.title}
              </h3>
              <div className="flex items-center">
                {[...Array(project.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-3">
              <span className="text-sm font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">
                {project.type}
              </span>
              <span className="text-sm text-brand-gray-light">
                {project.year}
              </span>
              <span className="text-sm text-brand-gray-light">
                {project.timeline}
              </span>
            </div>
            <p className="text-brand-gray-light mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-brand-gray px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-brand-gray-light">
                <Users className="h-4 w-4 mr-1" />
                {project.client}
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  Case Study
                </Button>
                <Button
                  size="sm"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray leading-tight mb-6">
            Our <span className="text-brand-blue">Portfolio</span>
          </h1>
          <p className="text-lg lg:text-xl text-brand-gray-light max-w-3xl mx-auto mb-8">
            Discover our latest projects and see how we've helped businesses
            transform their digital presence with innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-200"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Discuss Your Idea
            </Button>
          </div>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? "bg-brand-blue text-white"
                      : "bg-white text-brand-gray hover:bg-brand-blue/10"
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-brand-gray-light">View:</span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-brand-blue text-white"
                    : "bg-white text-brand-gray hover:bg-brand-blue/10"
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-brand-blue text-white"
                    : "bg-white text-brand-gray hover:bg-brand-blue/10"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Projects Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <ProjectListItem key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Project Success Stories
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional
              results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-brand-blue" />
              </div>
              <div className="text-3xl font-bold text-brand-gray mb-2">
                150+
              </div>
              <div className="text-brand-gray-light">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-brand-green" />
              </div>
              <div className="text-3xl font-bold text-brand-gray mb-2">98%</div>
              <div className="text-brand-gray-light">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-brand-gray mb-2">5.0</div>
              <div className="text-brand-gray-light">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-brand-blue" />
              </div>
              <div className="text-3xl font-bold text-brand-gray mb-2">3+</div>
              <div className="text-brand-gray-light">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              We work with the latest technologies to deliver cutting-edge
              solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "Node.js",
              "Flutter",
              "Python",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Docker",
              "Next.js",
              "Firebase",
              "Java",
              "TypeScript",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Code className="h-6 w-6 text-brand-blue" />
                </div>
                <span className="text-sm font-medium text-brand-gray">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-blue-100">
            Let's work together to bring your project to life. Get in touch with
            our team and let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg rounded-lg transition-all duration-200"
            >
              View Case Studies
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

import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  User,
  Globe,
  CheckCircle,
  ArrowRight,
  Calendar,
  Headphones,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
        timeline: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri 9am-6pm EST",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@webgrowsolution.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "New York, NY",
      subtext: "Available for remote work worldwide",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9am-6pm EST",
      subtext: "Weekend support available",
    },
  ];

  const services = [
    "Website Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Custom Software",
    "UI/UX Design",
    "Digital Marketing",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000+",
    "Let's discuss",
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gray leading-tight mb-6">
            Get in <span className="text-brand-blue">Touch</span>
          </h1>
          <p className="text-lg lg:text-xl text-brand-gray-light max-w-3xl mx-auto mb-8">
            Ready to start your digital journey? We'd love to hear about your
            project and discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => window.open("https://wa.me/15551234567", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Button
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-200"
              onClick={() =>
                window.open("https://calendly.com/webgrowsolution", "_blank")
              }
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-brand-gray mb-6">
                Tell Us About Your Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-gray mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-brand-gray-light" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-brand-gray-light" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-gray mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-brand-gray-light" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-5 w-5 text-brand-gray-light" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-gray mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-gray mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-gray mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Please describe your project, goals, and any specific requirements..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-800">
                        Thank you! We'll get back to you within 24 hours.
                      </span>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <span className="text-red-800">
                      Something went wrong. Please try again or contact us
                      directly.
                    </span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  Contact Information
                </h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                      >
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-brand-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-gray">
                            {info.title}
                          </h3>
                          <p className="text-brand-gray-light font-medium">
                            {info.details}
                          </p>
                          <p className="text-sm text-brand-gray-light">
                            {info.subtext}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-gray mb-4">
                  Need Immediate Help?
                </h3>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={() =>
                      window.open("https://wa.me/15551234567", "_blank")
                    }
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-3 rounded-lg transition-all duration-200"
                    onClick={() => window.open("tel:+15551234567", "_blank")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-brand-gray text-brand-gray hover:bg-brand-gray hover:text-white py-3 rounded-lg transition-all duration-200"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/webgrowsolution",
                        "_blank",
                      )
                    }
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-gray mb-4">
                  Common Questions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-brand-gray-light">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                    How long does a typical project take?
                  </div>
                  <div className="flex items-center text-sm text-brand-gray-light">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                    Do you offer ongoing support?
                  </div>
                  <div className="flex items-center text-sm text-brand-gray-light">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                    What's included in your pricing?
                  </div>
                  <div className="flex items-center text-sm text-brand-gray-light">
                    <CheckCircle className="h-4 w-4 text-brand-green mr-2" />
                    Can you work with existing systems?
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-2 rounded-lg transition-all duration-200"
                >
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-gray mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-brand-gray-light max-w-2xl mx-auto">
              While we work remotely with clients worldwide, we're based in New
              York and welcome in-person meetings.
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <p className="text-brand-gray font-medium">
                Google Maps Integration
              </p>
              <p className="text-brand-gray-light text-sm">
                New York, NY - Available for meetings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Headphones className="h-16 w-16 mx-auto mb-6 text-brand-blue" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              24/7 Support Available
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-gray-300">
              Our team is here to help you succeed. Whether you have questions
              about our services or need technical support, we're just a message
              away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <MessageCircle className="mr-2 h-5 w-5" />
                Live Chat Support
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-gray px-8 py-4 text-lg rounded-lg transition-all duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </Button>
            </div>
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

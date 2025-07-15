import { Navigation } from "../components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-gray mb-4">About Us</h1>
          <p className="text-lg text-brand-gray-light">
            Coming soon - Learn about our team, mission, values, and why you
            should choose us.
          </p>
        </div>
      </div>
    </div>
  );
}

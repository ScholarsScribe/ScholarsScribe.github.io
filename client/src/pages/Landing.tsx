import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, BookOpen, Users, Zap, Shield, Globe } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: BookOpen,
      title: "Rich Content Library",
      description: "Access thousands of well-researched articles across technology, lifestyle, business, and creative topics.",
    },
    {
      icon: Users,
      title: "Expert Authors",
      description: "Learn from industry professionals and subject matter experts who share their knowledge and insights.",
    },
    {
      icon: Zap,
      title: "Personalized Experience",
      description: "Get content recommendations tailored to your interests and learning goals.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every article is fact-checked and reviewed to ensure accuracy and reliability.",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join learners from around the world in discussions and knowledge sharing.",
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Learners" },
    { value: "500+", label: "Quality Articles" },
    { value: "50+", label: "Topics Covered" },
    { value: "25+", label: "Expert Authors" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-lg flex items-center justify-center">
                <PenTool className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Scholars Scribe</h1>
                <p className="text-blue-600 text-xs">Educational Content Hub</p>
              </div>
            </div>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.location.href = '/api/login'}
            >
              Sign In
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Learn. Grow.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500">
                Succeed.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Access premium educational content from industry experts. Join thousands of learners 
              advancing their careers through our comprehensive article library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/api/login'}
              >
                Get Started Free
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300"
              >
                Explore Content
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Scholars Scribe?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality educational content to help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Diverse Topics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cutting-edge technology to personal development, find content that matches your interests.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Technology", icon: "💻", color: "from-blue-500 to-blue-600" },
              { name: "Lifestyle", icon: "❤️", color: "from-green-500 to-green-600" },
              { name: "Business", icon: "📈", color: "from-yellow-500 to-yellow-600" },
              { name: "Creative", icon: "💡", color: "from-purple-500 to-purple-600" },
            ].map((topic) => (
              <div key={topic.name} className="group">
                <div className={`bg-gradient-to-r ${topic.color} p-8 rounded-xl text-white text-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl cursor-pointer`}>
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-lg font-bold">{topic.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of learners who are advancing their careers and expanding their knowledge 
              with Scholars Scribe. Start your journey today.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/api/login'}
            >
              Sign Up Now - It's Free!
            </Button>
            <p className="text-blue-200 text-sm mt-4">No credit card required • Instant access</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-lg flex items-center justify-center">
                <PenTool className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Scholars Scribe</h3>
                <p className="text-gray-400 text-sm">Educational Content Hub</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering learners worldwide with quality educational content.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                &copy; 2024 Scholars Scribe. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
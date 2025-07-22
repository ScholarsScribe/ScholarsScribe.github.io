import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target, Award, ArrowRight, BookOpen } from "lucide-react";

export default function Career() {
  const careerPaths = [
    {
      title: "Technology & Engineering",
      description: "Software development, data science, cybersecurity, and emerging tech roles",
      growth: "15% annually",
      icon: "💻",
      skills: ["Programming", "Cloud Computing", "AI/ML", "DevOps"],
    },
    {
      title: "Business & Finance",
      description: "Management, consulting, financial analysis, and entrepreneurship",
      growth: "8% annually", 
      icon: "📊",
      skills: ["Leadership", "Analytics", "Strategy", "Communication"],
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Medical professionals, biotech, pharmaceuticals, and healthcare tech",
      growth: "13% annually",
      icon: "🏥",
      skills: ["Clinical Skills", "Research", "Compliance", "Patient Care"],
    },
    {
      title: "Creative & Design",
      description: "UX/UI design, marketing, content creation, and digital media",
      growth: "10% annually",
      icon: "🎨",
      skills: ["Design Thinking", "Creativity", "Digital Tools", "Storytelling"],
    },
  ];

  const resources = [
    {
      title: "Resume Optimization",
      description: "Learn to craft compelling resumes that pass ATS systems and impress recruiters",
      type: "Guide",
      duration: "2 hours",
    },
    {
      title: "Interview Mastery",
      description: "Master behavioral, technical, and case study interviews with proven frameworks", 
      type: "Workshop",
      duration: "4 hours",
    },
    {
      title: "Salary Negotiation",
      description: "Research methods, negotiation tactics, and scripts for maximizing compensation",
      type: "Course",
      duration: "1.5 hours",
    },
    {
      title: "LinkedIn Networking",
      description: "Build a professional network and leverage social media for career growth",
      type: "Tutorial",
      duration: "3 hours",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="mx-auto h-16 w-16 text-white mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">Career Advancement Hub</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Accelerate your professional growth with expert guidance, proven strategies, 
            and actionable insights from industry leaders.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Career Paths</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover high-growth industries and the skills you need to succeed in today's competitive job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{path.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{path.title}</h3>
                      <p className="text-gray-600 mb-4">{path.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {path.growth} growth
                        </div>
                        <Button variant="ghost" size="sm">
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill) => (
                          <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Development Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical tools and actionable content to help you advance your career at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {resource.type}
                    </span>
                    <span className="text-gray-500 text-xs">{resource.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600">Real professionals who transformed their careers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Software Engineer → Tech Lead",
                company: "Google",
                story: "Promoted to Tech Lead within 18 months using our leadership framework",
                increase: "40% salary increase",
              },
              {
                name: "Marcus Johnson", 
                role: "Analyst → Product Manager",
                company: "Microsoft",
                story: "Successfully transitioned careers using our PM bootcamp curriculum",
                increase: "60% salary increase",
              },
              {
                name: "Emily Rodriguez",
                role: "Designer → Design Director",
                company: "Airbnb", 
                story: "Advanced to director level with our executive presence program",
                increase: "85% salary increase",
              },
            ].map((story, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{story.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{story.story}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {story.increase}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
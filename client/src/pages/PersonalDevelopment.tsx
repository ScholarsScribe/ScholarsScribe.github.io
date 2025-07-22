import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, Heart, Lightbulb, TrendingUp, Clock, Users, Star } from "lucide-react";

export default function PersonalDevelopment() {
  const skillAreas = [
    {
      title: "Emotional Intelligence",
      description: "Develop self-awareness, empathy, and relationship management skills",
      icon: Heart,
      progress: 75,
      courses: 8,
      color: "bg-red-500",
    },
    {
      title: "Critical Thinking",
      description: "Enhance problem-solving, decision-making, and analytical abilities",
      icon: Brain,
      progress: 60,
      courses: 12,
      color: "bg-blue-500",
    },
    {
      title: "Goal Setting & Achievement",
      description: "Master the art of setting and achieving meaningful personal and professional goals",
      icon: Target,
      progress: 85,
      courses: 6,
      color: "bg-green-500",
    },
    {
      title: "Creative Innovation",
      description: "Unlock your creative potential and develop innovative thinking patterns",
      icon: Lightbulb,
      progress: 45,
      courses: 10,
      color: "bg-yellow-500",
    },
  ];

  const featuredPrograms = [
    {
      title: "21-Day Mindfulness Challenge",
      description: "Transform your daily routine with proven mindfulness practices",
      duration: "3 weeks",
      participants: "2,500+",
      rating: 4.9,
      price: "Free",
      tags: ["Beginner", "Mindfulness", "Wellness"],
    },
    {
      title: "Leadership Essentials Bootcamp",
      description: "Develop core leadership skills for personal and professional success",
      duration: "6 weeks",
      participants: "1,800+",
      rating: 4.8,
      price: "$149",
      tags: ["Intermediate", "Leadership", "Career"],
    },
    {
      title: "Productivity Mastery Course",
      description: "Learn time management systems used by top performers",
      duration: "4 weeks",
      participants: "3,200+",
      rating: 4.7,
      price: "$99",
      tags: ["All Levels", "Productivity", "Systems"],
    },
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Marketing Manager",
      content: "The emotional intelligence course completely changed how I approach both work and personal relationships. I feel more confident and connected.",
      rating: 5,
    },
    {
      name: "Samantha Chen",
      role: "Entrepreneur",
      content: "The goal-setting framework helped me launch my startup successfully. The structured approach made all the difference.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Software Developer",
      content: "I never thought personal development would impact my coding career so much. The critical thinking skills are invaluable.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="mx-auto h-16 w-16 text-white mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">Personal Development Hub</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Unlock your full potential with evidence-based courses, practical tools, and expert guidance 
            designed to accelerate your personal and professional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Start Learning Today
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg font-medium">
              Take Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Development Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track your progress across key personal development areas and build a well-rounded skill set.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${area.color.replace('bg-', 'bg-')} bg-opacity-10`}>
                        <IconComponent className={`h-6 w-6 ${area.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-900">{area.title}</CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{area.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{area.progress}%</span>
                      </div>
                      <Progress value={area.progress} className="h-2" />
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{area.courses} courses available</span>
                        <Button variant="ghost" size="sm">Continue Learning</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated learning experiences designed by experts to deliver maximum impact in minimum time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{program.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{program.participants}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{program.rating}</span>
                      </div>
                      <div className="text-lg font-bold text-indigo-600">{program.price}</div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {program.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button className="w-full">Enroll Now</Button>
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
            <p className="text-gray-600">Real transformations from our community members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Personalized Learning Paths</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your focus area and follow a structured path designed to build skills progressively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Executive Presence", courses: 8, duration: "12 weeks", level: "Advanced" },
              { title: "Stress Management", courses: 6, duration: "8 weeks", level: "Beginner" },
              { title: "Communication Mastery", courses: 10, duration: "16 weeks", level: "Intermediate" },
              { title: "Habits & Routine Design", courses: 5, duration: "6 weeks", level: "Beginner" },
              { title: "Conflict Resolution", courses: 7, duration: "10 weeks", level: "Intermediate" },
              { title: "Innovation Mindset", courses: 9, duration: "14 weeks", level: "Advanced" },
            ].map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{path.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div>{path.courses} courses • {path.duration}</div>
                    <div className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                      {path.level}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Start Path</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of learners who are building better habits, developing crucial skills, 
            and creating the life they want through our proven programs.
          </p>
          <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            Begin Your Journey Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
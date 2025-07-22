import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, PlayCircle, Clock, Users, Star, Trophy, CheckCircle } from "lucide-react";

export default function CodingCourses() {
  const featuredCourses = [
    {
      title: "Full-Stack Web Development",
      description: "Master modern web development with React, Node.js, and databases",
      instructor: "Sarah Martinez",
      rating: 4.9,
      students: "12,500+",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      price: "$299",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "🌐",
    },
    {
      title: "Python for Data Science",
      description: "Learn data analysis, visualization, and machine learning with Python",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: "8,900+",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$249",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      image: "🐍",
    },
    {
      title: "Mobile App Development",
      description: "Build native iOS and Android apps with React Native",
      instructor: "Alex Rodriguez",
      rating: 4.7,
      students: "6,200+",
      duration: "14 weeks",
      level: "Intermediate",
      price: "$279",
      technologies: ["React Native", "JavaScript", "Firebase", "Redux"],
      image: "📱",
    },
  ];

  const learningPaths = [
    {
      title: "Frontend Developer",
      description: "Become a frontend expert with modern frameworks and tools",
      courses: 8,
      duration: "6 months",
      skills: ["HTML/CSS", "JavaScript", "React", "TypeScript"],
      completion: 65,
    },
    {
      title: "Backend Engineer",
      description: "Master server-side development and database management",
      courses: 10,
      duration: "8 months",
      skills: ["Node.js", "Python", "SQL", "APIs"],
      completion: 40,
    },
    {
      title: "DevOps Specialist",
      description: "Learn deployment, monitoring, and infrastructure management",
      courses: 12,
      duration: "10 months",
      skills: ["Docker", "AWS", "Kubernetes", "CI/CD"],
      completion: 25,
    },
    {
      title: "Data Scientist",
      description: "Extract insights from data using machine learning and statistics",
      courses: 15,
      duration: "12 months",
      skills: ["Python", "R", "SQL", "Machine Learning"],
      completion: 15,
    },
  ];

  const technologies = [
    { name: "JavaScript", level: "Essential", popularity: 95, color: "bg-yellow-500" },
    { name: "Python", level: "High Demand", popularity: 88, color: "bg-blue-500" },
    { name: "React", level: "Popular", popularity: 82, color: "bg-cyan-500" },
    { name: "Node.js", level: "Growing", popularity: 75, color: "bg-green-500" },
    { name: "TypeScript", level: "Emerging", popularity: 68, color: "bg-blue-600" },
    { name: "Go", level: "Trending", popularity: 45, color: "bg-indigo-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Code className="mx-auto h-16 w-16 text-white mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">Coding Courses & Bootcamps</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Learn to code with hands-on projects, expert instructors, and industry-relevant curriculum. 
            From beginner to advanced, build the skills that employers demand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Browse All Courses
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg font-medium">
              Take Skill Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600">Active Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">92%</div>
              <div className="text-gray-600">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">$85K</div>
              <div className="text-gray-600">Average Salary Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive courses designed by industry experts to take you from beginner to job-ready professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-3">{course.image}</div>
                  <CardTitle className="text-lg text-gray-900">{course.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-gray-500">({course.students})</span>
                      </div>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>By {course.instructor}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.technologies.map((tech) => (
                        <span key={tech} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-2xl font-bold text-emerald-600">{course.price}</div>
                      <Button>
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Start Course
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career-Focused Learning Paths</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured learning journeys that prepare you for specific tech careers with hands-on projects and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-gray-900">{path.title}</CardTitle>
                      <p className="text-gray-600 text-sm mt-1">{path.description}</p>
                    </div>
                    <Trophy className="h-6 w-6 text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Courses:</span>
                        <span className="ml-2 font-medium">{path.courses}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Duration:</span>
                        <span className="ml-2 font-medium">{path.duration}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{path.completion}%</span>
                      </div>
                      <Progress value={path.completion} className="h-2" />
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {path.skills.map((skill) => (
                          <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" variant={path.completion > 0 ? "default" : "outline"}>
                      {path.completion > 0 ? "Continue Path" : "Start Path"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Trends */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay ahead of the curve with the most in-demand programming languages and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                    <Badge variant="outline">{tech.level}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Market Demand</span>
                      <span className="font-medium">{tech.popularity}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${tech.color}`}
                        style={{ width: `${tech.popularity}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-gray-600">Real outcomes from our coding bootcamp graduates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jessica Wang",
                role: "Frontend Developer",
                company: "Spotify",
                timeline: "6 months",
                salary: "$95K",
                background: "Marketing → Tech",
              },
              {
                name: "Carlos Rodriguez",
                role: "Full-Stack Engineer", 
                company: "Airbnb",
                timeline: "8 months",
                salary: "$110K",
                background: "Restaurant → Tech",
              },
              {
                name: "Priya Patel",
                role: "Data Scientist",
                company: "Netflix",
                timeline: "10 months",
                salary: "$125K",
                background: "Finance → Tech",
              },
            ].map((story, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-emerald-50 to-blue-50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{story.role}</p>
                  <p className="text-gray-600 mb-4">{story.company}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{story.timeline} to job</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{story.salary} starting salary</span>
                    </div>
                    <div className="text-gray-500">{story.background}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Launch Your Tech Career?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of successful career changers who transformed their lives through coding. 
            Start your journey today with our proven curriculum and expert support.
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            Enroll in a Course Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
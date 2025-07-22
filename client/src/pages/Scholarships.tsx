import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, DollarSign, Calendar, Users, ExternalLink, Filter } from "lucide-react";

export default function Scholarships() {
  const scholarships = [
    {
      title: "Tech Excellence Scholarship",
      amount: "$10,000",
      deadline: "March 15, 2025",
      applicants: "2,500+",
      category: "Technology",
      description: "Supporting outstanding students pursuing computer science, engineering, or related tech fields.",
      requirements: ["GPA 3.5+", "STEM major", "Leadership experience"],
      type: "Merit-based",
    },
    {
      title: "Women in Leadership Award",
      amount: "$7,500",
      deadline: "February 28, 2025",
      applicants: "1,800+",
      category: "Leadership",
      description: "Empowering female students who demonstrate exceptional leadership potential.",
      requirements: ["Female applicant", "Leadership roles", "Community service"],
      type: "Merit-based",
    },
    {
      title: "First-Generation College Grant",
      amount: "$5,000",
      deadline: "April 10, 2025",
      applicants: "3,200+",
      category: "Need-based",
      description: "Financial assistance for first-generation college students pursuing higher education.",
      requirements: ["First-generation status", "Financial need", "Academic progress"],
      type: "Need-based",
    },
    {
      title: "Creative Arts Fellowship",
      amount: "$8,000",
      deadline: "January 30, 2025",
      applicants: "1,200+",
      category: "Arts",
      description: "Supporting talented artists, designers, and creative professionals in their educational journey.",
      requirements: ["Portfolio submission", "Arts major", "Creative project"],
      type: "Merit-based",
    },
    {
      title: "Business Innovation Award",
      amount: "$12,000",
      deadline: "May 5, 2025",
      applicants: "2,800+",
      category: "Business",
      description: "Recognizing entrepreneurial students with innovative business ideas and leadership skills.",
      requirements: ["Business plan", "Entrepreneurship", "Innovation focus"],
      type: "Merit-based",
    },
    {
      title: "Healthcare Heroes Scholarship",
      amount: "$9,000",
      deadline: "March 20, 2025",
      applicants: "2,100+",
      category: "Healthcare",
      description: "Supporting future healthcare professionals committed to improving patient care and outcomes.",
      requirements: ["Healthcare major", "Volunteer experience", "Patient care focus"],
      type: "Merit-based",
    },
  ];

  const tips = [
    {
      title: "Start Early",
      description: "Begin your scholarship search at least 6-12 months before you need funding.",
      icon: Calendar,
    },
    {
      title: "Meet All Requirements",
      description: "Carefully read and fulfill every requirement. Missing one can disqualify your application.",
      icon: Users,
    },
    {
      title: "Write Compelling Essays",
      description: "Tell your unique story and demonstrate how the scholarship aligns with your goals.",
      icon: GraduationCap,
    },
    {
      title: "Apply Broadly",
      description: "Apply to multiple scholarships to increase your chances of receiving funding.",
      icon: DollarSign,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="mx-auto h-16 w-16 text-white mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">Scholarship Opportunities</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Discover funding opportunities to support your educational journey. From merit-based awards 
            to need-based grants, find scholarships that match your profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Browse All Scholarships
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-medium">
              Scholarship Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">$2.8M+</div>
              <div className="text-gray-600">Total Awards Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Active Scholarships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">12K+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Available Scholarships</h2>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                All Categories
              </Button>
              <Button variant="outline" size="sm">Technology</Button>
              <Button variant="outline" size="sm">Business</Button>
              <Button variant="outline" size="sm">Healthcare</Button>
              <Button variant="outline" size="sm">Arts</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-gray-900">{scholarship.title}</CardTitle>
                    <Badge variant={scholarship.type === "Merit-based" ? "default" : "secondary"}>
                      {scholarship.type}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">{scholarship.amount}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{scholarship.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-2 h-4 w-4" />
                      Deadline: {scholarship.deadline}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="mr-2 h-4 w-4" />
                      {scholarship.applicants} applicants
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-1">
                      {scholarship.requirements.map((req, reqIndex) => (
                        <span key={reqIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    Apply Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scholarship Application Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Increase your chances of success with these proven strategies from scholarship winners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Fund Your Education?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Don't let financial barriers hold you back. Start your scholarship journey today and unlock 
            opportunities for a brighter future.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            Get Started with Applications
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
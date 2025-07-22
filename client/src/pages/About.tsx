import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, BookOpen, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: BookOpen, label: "Articles Published", value: "500+" },
    { icon: Users, label: "Active Readers", value: "10K+" },
    { icon: Target, label: "Topics Covered", value: "50+" },
    { icon: Award, label: "Expert Authors", value: "25+" },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Editor",
      bio: "PhD in Computer Science with 15 years of experience in educational content creation.",
    },
    {
      name: "Michael Chen",
      role: "Technology Lead",
      bio: "Full-stack developer and tech writer passionate about making complex topics accessible.",
    },
    {
      name: "Emma Davis",
      role: "Content Director",
      bio: "Former journalist with expertise in lifestyle and business content strategy.",
    },
    {
      name: "Dr. Alex Wilson",
      role: "Educational Consultant",
      bio: "Education specialist focused on creating engaging learning experiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Scholars Scribe</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're dedicated to making quality education accessible to everyone through 
            well-researched articles, tutorials, and insights across various fields.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Scholars Scribe, we believe that knowledge should be accessible, engaging, 
                and practical. Our mission is to bridge the gap between complex topics and 
                everyday understanding.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We curate and create content that not only informs but inspires action, 
                helping our readers grow both personally and professionally.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Scholars Scribe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Content</h3>
                <p className="text-gray-600">
                  Every article is thoroughly researched, fact-checked, and crafted 
                  by subject matter experts to ensure accuracy and value.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Focus</h3>
                <p className="text-gray-600">
                  We foster a learning community where readers can engage, 
                  share insights, and grow together through meaningful discussions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Practical Application</h3>
                <p className="text-gray-600">
                  Our content focuses on actionable insights that readers can 
                  immediately apply in their personal and professional lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of educators, writers, and subject matter experts 
              brings decades of combined experience to create exceptional content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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

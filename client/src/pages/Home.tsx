import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";
import type { ArticleWithDetails, Category } from "@shared/schema";

export default function Home() {
  const { data: featuredArticles, isLoading: loadingFeatured } = useQuery<ArticleWithDetails[]>({
    queryKey: ["/api/articles/featured"],
  });

  const { data: recentArticles, isLoading: loadingRecent } = useQuery<ArticleWithDetails[]>({
    queryKey: ["/api/articles/recent"],
  });

  const { data: categories, isLoading: loadingCategories } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  // Calculate article counts per category
  const getArticleCountForCategory = (categoryId: number): number => {
    if (!featuredArticles && !recentArticles) return 0;
    const allArticles = [...(featuredArticles || []), ...(recentArticles || [])];
    return allArticles.filter(article => article.categoryId === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Amazing
              <span className="text-blue-600"> Knowledge</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our collection of insightful articles, tutorials, and educational content 
              across technology, lifestyle, and business topics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/articles">
                <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  Start Reading
                </Button>
              </Link>
              <Link href="/category/technology">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {loadingFeatured ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
                  <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="h-16 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles?.map((article) => (
                <ArticleCard key={article.id} article={article} variant="featured" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover content tailored to your interests across our diverse range of topics
            </p>
          </div>

          {loadingCategories ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-300 p-8 rounded-xl animate-pulse">
                  <div className="w-12 h-12 bg-gray-400 rounded mb-4 mx-auto"></div>
                  <div className="h-6 bg-gray-400 rounded mb-2"></div>
                  <div className="h-4 bg-gray-400 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories?.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  articleCount={getArticleCountForCategory(category.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
              <p className="text-gray-600">Stay updated with our latest content</p>
            </div>
            <Link href="/articles">
              <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 hidden md:block">
                View All Articles
              </Button>
            </Link>
          </div>

          {loadingRecent ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                  <div className="flex">
                    <div className="w-48 h-32 bg-gray-300 rounded mr-6"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-6 bg-gray-300 rounded mb-4"></div>
                      <div className="h-16 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recentArticles?.slice(0, 4).map((article) => (
                <ArticleCard key={article.id} article={article} variant="recent" />
              ))}
            </div>
          )}

          <div className="text-center mt-8 md:hidden">
            <Link href="/articles">
              <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get the latest articles and insights delivered straight to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <Button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">No spam, unsubscribe anytime</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

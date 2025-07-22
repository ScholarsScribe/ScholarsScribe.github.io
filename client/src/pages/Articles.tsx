import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { ArticleWithDetails } from "@shared/schema";

export default function Articles() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Extract search query from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const searchParam = urlParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
      setIsSearching(true);
    }
  }, [location]);

  const { data: articles, isLoading } = useQuery<ArticleWithDetails[]>({
    queryKey: isSearching ? ["/api/search", searchQuery] : ["/api/articles"],
    queryFn: async () => {
      if (isSearching && searchQuery) {
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) throw new Error('Failed to search articles');
        return response.json();
      } else {
        const response = await fetch('/api/articles');
        if (!response.ok) throw new Error('Failed to fetch articles');
        return response.json();
      }
    },
    enabled: !isSearching || (isSearching && searchQuery.length > 0),
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {isSearching ? "Search Results" : "All Articles"}
          </h1>
          {isSearching && searchQuery && (
            <p className="text-gray-600 mb-6">
              Showing results for "{searchQuery}"
              <Button
                variant="link"
                onClick={clearSearch}
                className="ml-2 text-blue-600 hover:text-blue-700"
              >
                Clear search
              </Button>
            </p>
          )}
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-lg rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:ring-0"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400 h-6 w-6" />
              <Button
                type="submit"
                className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700"
              >
                Search
              </Button>
            </form>
          </div>
        </div>

        {/* Articles Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="h-16 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : articles && articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="featured" />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isSearching ? "No articles found" : "No articles available"}
            </h3>
            <p className="text-gray-600 mb-6">
              {isSearching 
                ? `We couldn't find any articles matching "${searchQuery}". Try different keywords.`
                : "Check back later for new content!"
              }
            </p>
            {isSearching && (
              <Button onClick={clearSearch} variant="outline">
                View All Articles
              </Button>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

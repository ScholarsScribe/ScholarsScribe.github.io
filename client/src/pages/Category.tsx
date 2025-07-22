import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import type { ArticleWithDetails, Category } from "@shared/schema";

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();

  const { data: category } = useQuery<Category>({
    queryKey: ["/api/categories/name", categoryName],
    enabled: !!categoryName,
  });

  const { data: articles, isLoading } = useQuery<ArticleWithDetails[]>({
    queryKey: ["/api/articles/category", category?.id],
    enabled: !!category?.id,
  });

  const getCategoryColor = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "technology":
        return "from-blue-500 to-blue-600";
      case "lifestyle":
        return "from-green-500 to-green-600";
      case "business":
        return "from-yellow-500 to-yellow-600";
      case "creative":
        return "from-purple-500 to-purple-600";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  const getIconEmoji = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "technology":
        return "💻";
      case "lifestyle":
        return "❤️";
      case "business":
        return "📈";
      case "creative":
        return "💡";
      default:
        return "📝";
    }
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">
            The category you're looking for doesn't exist.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Category Hero */}
      <section className={`bg-gradient-to-r ${getCategoryColor(category.name)} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">{getIconEmoji(category.name)}</div>
          <h1 className="text-4xl font-bold text-white mb-4">{category.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
            {category.description}
          </p>
          <div className="text-white/80">
            {articles?.length || 0} articles available
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                No articles yet
              </h3>
              <p className="text-gray-600">
                Check back later for new {category.name.toLowerCase()} content!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Link } from "wouter";
import { Eye, MessageCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ArticleWithDetails } from "@shared/schema";

interface ArticleCardProps {
  article: ArticleWithDetails;
  variant?: "featured" | "recent" | "list";
}

export default function ArticleCard({ article, variant = "featured" }: ArticleCardProps) {
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  const getTimeAgo = (date: Date | null) => {
    if (!date) return "";
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - new Date(date).getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return "1 day ago";
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  const getCategoryColor = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "technology":
        return "bg-blue-100 text-blue-600";
      case "lifestyle":
        return "bg-green-100 text-green-600";
      case "business":
        return "bg-yellow-100 text-yellow-700";
      case "creative":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  if (variant === "recent") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row">
          {article.imageUrl && (
            <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <CardContent className="p-6 flex-1">
            <div className="flex items-center mb-2">
              <Badge className={`text-xs font-medium ${getCategoryColor(article.category.name)}`}>
                {article.category.name}
              </Badge>
              <span className="text-gray-500 text-sm ml-auto">
                {getTimeAgo(article.publishedAt)}
              </span>
            </div>
            <Link href={`/articles/${article.id}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                {article.title}
              </h3>
            </Link>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span className="text-gray-600 text-sm">{article.author.username}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-500 text-sm">
                <span className="flex items-center">
                  <Eye className="mr-1 h-4 w-4" />
                  {article.views || 0}
                </span>
                <span className="flex items-center">
                  <MessageCircle className="mr-1 h-4 w-4" />
                  0
                </span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {article.imageUrl && (
        <div className="overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Badge className={`text-sm font-medium ${getCategoryColor(article.category.name)}`}>
            {article.category.name}
          </Badge>
          <span className="text-gray-500 text-sm ml-auto">
            {formatDate(article.publishedAt)}
          </span>
        </div>
        <Link href={`/articles/${article.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span className="text-gray-700 text-sm font-medium">
              {article.author.username}
            </span>
          </div>
          <Link href={`/articles/${article.id}`}>
            <span className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">
              Read More →
            </span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

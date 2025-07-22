import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { Category } from "@shared/schema";

interface CategoryCardProps {
  category: Category;
  articleCount: number;
}

export default function CategoryCard({ category, articleCount }: CategoryCardProps) {
  const getGradientClass = (color: string) => {
    switch (color.toLowerCase()) {
      case "blue":
        return "gradient-card-blue";
      case "green":
        return "gradient-card-green";
      case "yellow":
        return "gradient-card-yellow";
      case "purple":
        return "gradient-card-purple";
      default:
        return "gradient-card-blue";
    }
  };

  const getIconClass = (iconString: string) => {
    // Convert Font Awesome class to appropriate icon
    if (iconString.includes("laptop-code")) return "💻";
    if (iconString.includes("heart")) return "❤️";
    if (iconString.includes("chart-line")) return "📈";
    if (iconString.includes("lightbulb")) return "💡";
    return "📝";
  };

  return (
    <Link href={`/category/${category.name.toLowerCase()}`}>
      <div className="group cursor-pointer">
        <div className={`${getGradientClass(category.color)} p-8 rounded-xl text-white text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}>
          <div className="text-4xl mb-4 text-yellow-400">
            {getIconClass(category.icon)}
          </div>
          <h3 className="text-xl font-bold mb-2">{category.name}</h3>
          <p className="text-opacity-90 text-sm mb-4 opacity-90">
            {category.description}
          </p>
          <span className="inline-flex items-center text-yellow-400 font-medium">
            <span>{articleCount}</span>&nbsp;Articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </Link>
  );
}

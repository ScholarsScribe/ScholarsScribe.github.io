import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X, PenTool, User, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [location] = useLocation();
  const { user, isAuthenticated } = useAuth();

  const mainNavItems = [
    { href: "/", label: "Home" },
    { href: "/articles", label: "Blog Posts" },
    { href: "/career", label: "Career Advancement" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/personal-development", label: "Personal Development" },
    { href: "/coding-courses", label: "Coding Courses" },
    { href: "/job-board", label: "Job Board" },
    { href: "/health-wellness", label: "Health & Wellness" },
  ];

  const moreTopics = [
    { href: "/category/technology", label: "Technology" },
    { href: "/design-courses", label: "Design Courses" },
    { href: "/financial-aid", label: "Financial Aid" },
    { href: "/category/education", label: "Education" },
    { href: "/ebooks", label: "Ebooks" },
    { href: "/category/lifestyle", label: "Lifestyle" },
    { href: "/reviews", label: "Reviews" },
    { href: "/creative-skills", label: "Creative Skills" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Title */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <PenTool className="text-blue-600 text-xl" size={20} />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold">Scholars Scribe</h1>
              <p className="text-blue-200 text-xs hidden sm:block">Educational Content Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainNavItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 font-medium text-sm hover:text-yellow-400 ${
                  isActiveLink(item.href) ? "text-white" : "text-blue-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* More Topics Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-blue-200 hover:text-yellow-400 hover:bg-blue-600 text-sm font-medium"
                >
                  More Topics
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {moreTopics.map((topic) => (
                  <DropdownMenuItem key={topic.href} asChild>
                    <Link href={topic.href} className="w-full">
                      {topic.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-yellow-400 hover:bg-blue-600"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-yellow-400 hover:bg-blue-600 flex items-center space-x-2"
                  >
                    {user.profileImageUrl ? (
                      <img
                        src={user.profileImageUrl}
                        alt="Profile"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                    <span className="hidden sm:block">
                      {user.firstName || user.email?.split('@')[0] || 'User'}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="w-full">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => window.location.href = '/api/logout'}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-medium"
                onClick={() => window.location.href = '/api/login'}
              >
                Sign In
              </Button>
            )}
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-yellow-400 hover:bg-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-blue-700 border-t border-blue-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[...mainNavItems, ...moreTopics].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors duration-300 rounded-md ${
                    isActiveLink(item.href)
                      ? "text-white font-medium bg-blue-800 border-l-4 border-yellow-400"
                      : "text-blue-200 hover:text-white hover:bg-blue-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-blue-600 pt-2 mt-2">
                <Link
                  href="/about"
                  className="block px-3 py-2 text-blue-200 hover:text-white hover:bg-blue-600 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-blue-200 hover:text-white hover:bg-blue-600 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="bg-blue-700 border-t border-blue-500">
            <div className="px-4 py-3">
              <SearchBar onClose={() => setIsSearchOpen(false)} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

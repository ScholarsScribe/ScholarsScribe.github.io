import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Articles from "@/pages/Articles";
import Article from "@/pages/Article";
import Category from "@/pages/Category";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Landing from "@/pages/Landing";
import Career from "@/pages/Career";
import Scholarships from "@/pages/Scholarships";
import PersonalDevelopment from "@/pages/PersonalDevelopment";
import CodingCourses from "@/pages/CodingCourses";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {isLoading || !isAuthenticated ? (
        <Route path="/" component={Landing} />
      ) : (
        <>
          <Route path="/" component={Home} />
          <Route path="/articles" component={Articles} />
          <Route path="/articles/:id" component={Article} />
          <Route path="/career" component={Career} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/personal-development" component={PersonalDevelopment} />
          <Route path="/coding-courses" component={CodingCourses} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

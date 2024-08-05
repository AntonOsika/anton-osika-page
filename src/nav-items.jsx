import { Home, Award } from "lucide-react";
import Index from "./pages/Index.jsx";
import Compliments from "./pages/Compliments.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Compliments",
    to: "/compliments",
    icon: <Award className="h-4 w-4" />,
    page: <Compliments />,
  },
];

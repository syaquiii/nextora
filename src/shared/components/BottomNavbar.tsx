"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Heart, User, Grid3X3 } from "lucide-react";

const BottomNavbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/home",
      icon: Home,
    },
    {
      id: 2,
      name: "Categories",
      path: "/categories",
      icon: Grid3X3,
    },
    {
      id: 3,
      name: "Search",
      path: "/search",
      icon: Search,
    },
    {
      id: 4,
      name: "Wishlist",
      path: "/wishlist",
      icon: Heart,
    },
    {
      id: 5,
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-5 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.id}
              href={item.path}
              className={`flex flex-col items-center justify-center py-2 px-1 transition-colors duration-200 ${
                isActive
                  ? "text-primary-600"
                  : "text-gray-500 hover:text-primary-600"
              }`}
            >
              <Icon
                size={20}
                className={`mb-1 ${isActive ? "fill-current" : ""}`}
              />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;

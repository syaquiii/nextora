"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, Heart } from "lucide-react";

const navlinks = [
  { id: 1, title: "Home", path: "/home", icon: Home },
  { id: 2, title: "Shop", path: "/shop", icon: Grid3X3 },
  { id: 3, title: "Favorite", path: "/favorite", icon: Heart },
];

const BottomNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-3 py-2">
        {navlinks.map((item) => {
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
              <span className="text-xs font-medium">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;

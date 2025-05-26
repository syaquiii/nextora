"use client";
import { navlinks } from "../data/navlink";
import { Navlist } from "./Navlist";
import Link from "next/link";
import { Heart, ShoppingCart, User, Search } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-primary-600 hidden lg:block w-full font-sfpro text-white">
        <div className="mycontainer flex py-6 items-center justify-between">
          <div className="flex gap-20 items-center">
            <h1 className="text-2xl font-bold">Nextora.</h1>
            <ul className="flex gap-10">
              {navlinks.map((props) => (
                <Link href={props.path} key={props.id}>
                  <Navlist props={props} />
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex gap-10">
            <Link href={"/wishlist"}>
              <Heart />
            </Link>
            <Link href={"/cart"}>
              <ShoppingCart />
            </Link>
            <Link href={"/profile"}>
              <User />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar - Simplified */}
      <nav className="bg-primary-600 lg:hidden w-full font-sfpro text-white">
        <div className="mycontainer flex py-4 items-center justify-between">
          {/* Left - Brand */}
          <h1 className="text-xl font-bold">Nextora.</h1>

          {/* Right - Search and Cart */}
          <div className="flex gap-4 items-center">
            <Link href={"/search"}>
              <Search size={20} />
            </Link>
            <Link href={"/cart"} className="relative">
              <ShoppingCart size={20} />
              {/* Cart badge - optional */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Add padding bottom to prevent content from being hidden behind bottom nav */}
      <div className="lg:hidden h-16"></div>
    </>
  );
};

export default Navbar;

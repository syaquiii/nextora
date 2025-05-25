"use client";
import React, { useState } from "react";
import { navlinks } from "../data/navlink";
import { Navlist } from "./Navlist";
import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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

      {/* Mobile Navbar */}
      <nav className="bg-primary-600 lg:hidden w-full font-sfpro text-white relative">
        <div className="mycontainer flex py-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            {/* Left side - Hamburger */}
            <Hamburger toggled={isOpen} toggle={toggleMenu} size={20} />
            {/* Center - Brand */}
            <h1 className="text-xl font-bold">Nextora.</h1>
          </div>

          {/* Right side - Icons */}
          <div className="flex gap-4">
            <Link href={"/wishlist"}>
              <Heart size={20} />
            </Link>
            <Link href={"/cart"}>
              <ShoppingCart size={20} />
            </Link>
            <Link href={"/profile"}>
              <User size={20} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary-600 border-t border-primary-500 shadow-lg z-50">
            <div className="mycontainer py-4">
              <ul className="flex flex-col gap-4">
                {navlinks.map((props) => (
                  <Link key={props.id} href={props.path} onClick={closeMenu}>
                    <Navlist props={props} />
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop/Overlay untuk mobile */}
    </>
  );
};

export default Navbar;

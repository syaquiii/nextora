"use client";
import React from 'react';
import Link from 'next/link';
import { footerlinks } from '../data/footerlink';


const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white font-sfpro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl ml-30 mt-15 sm:text-4xl lg:text-5xl font-bold hover:text-red  duration-200">
                Nextora.
              </h1>
            </Link>
          </div>

          {/* Dynamic Footer Sections */}
          {footerlinks.map((section) => (
            <div key={section.id} className="lg:col-span-1 ">
              <h3 className="text-sm sm:text-sm font-semibold ml-6 mb-4 sm:mb-6 uppercase underline tracking-wider ">
                {section.title}
              </h3>
              <nav>
                <ul className="space-y-3  sm:space-y-4">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link 
                        href={link.path}
                        className=" hover:text-red transition-colors duration-200 text-sm sm:text-base block"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Copyright Section  */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8">
          <p className=" text-xs sm:text-sm">
            © {new Date().getFullYear()} Nextora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
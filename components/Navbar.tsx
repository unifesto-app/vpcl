"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import VPCLLogo from "@/app/assets/images/Beyond-Logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const getScrollY = () =>
      window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop ?? 0;
    const handleScroll = () => setScrolled(getScrollY() > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 border-b  backdrop-blur-xl border-zinc-800 shadow-sm"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <nav className="flex items-center justify-start h-16 md:h-20" aria-label="Primary navigation">
          {/* Logo */}
          <a href="/" aria-label="VPCL home" className="flex items-center group">
            <Image
              src={VPCLLogo}
              alt="VPCL"
              className="h-12 md:h-16 w-auto transition-all duration-300"
              priority
            />
          </a>
        </nav>
      </div>
    </header>
  );
}

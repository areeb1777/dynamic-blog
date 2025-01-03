"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-12">
      <section className="px-6 xs:px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-4 text-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-center sm:text-left">
            <p className="text-white">
              Developed with{" "}
              <span className="font-bold text-accentDarkPrimary">Next.js</span>{" "}
              and{" "}
              <span className="font-bold text-accentDarkPrimary">
                Tailwind CSS
              </span>
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              <Link href="https://x.com/areeb_17777" target="_blank">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="filter invert"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-areeb-a295192b5/" target="_blank">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="filter invert"
                />
              </Link>
            </div>
          </div>
          <p className="text-xs text-white text-center sm:text-right">
            © 2024 <span className="font-bold">AREEB</span>
            <span className="font-bold text-accentDarkPrimary text-red-500 ml-1">BLOG</span> All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

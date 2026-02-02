import { companiesLogo } from "@/data/companies-logo";
import { ArrowRightIcon, StarIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="pb-0">
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          {/* ✅ removed green background effect */}


          <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-17.5">
  Sell more treatments and{" "}
  <span className="bg-linear-to-r from-[#e02067] to-[#FF84C6] bg-clip-text text-transparent text-nowrap">
    keep clients 
  </span>{" "}
  coming back
</h1>

        </div>
      </div>
    </>
  );
}
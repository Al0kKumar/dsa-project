"use client";
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black flex border-b-2 border-zinc-900  justify-between items-center p-2">
      <Link href={"/"} className="text-white flex gap-2">
        <h1 className="font-semibold text-2xl ml-2">DSA</h1>
        <Image
          src={"/coffee-svgrepo-com.svg"}
          alt="logo"
          width={25}
          height={25}
        />
      </Link>
    </nav>
  );
};

export default Navbar;

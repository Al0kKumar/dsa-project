"use client";
import SheetData from "@/components/main/sheetData";
import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function MainPage(): React.ReactNode {
  return (
    <main className="w-[100vw] h-fit pt-7 bg-black  ">
      <div className=" w-full h-full min-h-screen bg-black rounded-lg pb-5">
        <SheetData />
        <div className="mt-40 mx-3"></div>
      </div>
      <div className="flex bg-black w-full h-auto justify-center">
        
        <div className="text-2xl font-semibold text-white flex gap-3 mr-2 mb-2">
          <Link
            href={"https://x.com/Al0k_Mishra_"}
            className="underline hover:text-zinc-400 transition-colors duration-200"
            target="_blank"
          >
            <FaXTwitter />
          </Link>
          
          <Link
            href={"https://github.com/Al0kKumar"}
            className="underline hover:text-zinc-400 transition-colors duration-200"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </main>
  );
}

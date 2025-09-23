"use client";

import Link from "next/link";
import Image from "next/image";
import { Theme } from "@/components/Theme";
import { Profile } from "@/components/Profile";

export default function Navbar() {

    return (
        <div className="fixed max-w-3xl w-[90%] md:w-full h-fit mx-auto top-2 z-50 flex items-center justify-between place-self-center flex-wrap gap-2 px-4 py-2 sm:py-3 rounded-xl bg-teal-50/10 shadow-lg shadow-neutral-600/5 backdrop-blur-md">
            <div className="flex w-full justify-between items-center">
                <Link href={"/dashboard"} className="flex items-center gap-2 cursor-pointer">
                    <span className="inline-flex items-center gap-2 dark:text-white text-black font-bold rounded-lg uppercase tracking-widest text-xs sm:text-sm p-2">
                        <div className="bg-[#FE6603]/90 rounded-sm p-2">
                            <Image src="/icon.svg" alt="KeyStone" width={16} height={16} />
                        </div>
                        <svg className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#FE6603]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" /></svg>
                        KeyStone
                    </span>
                </Link>

                <div className="text-black flex gap-3">
                    <Theme />
                    <Profile />
                </div>
            </div>
        </div>
    );
}
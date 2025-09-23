"use client"

import { useState } from "react";



export function Profile() {
    const [openProfile, setOpenProfile] = useState(false)

    return (
        <>
        <div onClick={() => setOpenProfile(!openProfile)} className="group flex items-center gap-3.5 hover:bg-[#F8E6DB] dark:hover:bg-teal-50/10 border border-[#FF8162]/70 hover:border-[#FF8162] dark:border-[#FF8162]/70 rounded-md px-1.5 sm:px-2 py-1.5 cursor-pointer">
            <div className="w-6 sm:w-8 h-6 sm:h-8 text-[#FF8162] flex items-center justify-center font-medium text-xl">A</div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down dark:text-white text-black group-hover:text-black"><path d="m6 9 6 6 6-6"/></svg>
            </div>
        </div>

        {openProfile && (
            <div className="absolute top-full w-80 p-4 max-h-[80vh] max-w-[90vw] overflow-auto">
                <div className="bg-[#F8E6DB] dark:bg-neutral-700 flex flex-col gap-3 p-4 rounded-t-lg">
                    <div className="flex items-center gap-3">
                        <div className="relative flex shrink-0 overflow-hidden rounded-full size-12 ring-1 ring-black/10">
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[#FF8162] text-2xl font-medium">
                                A
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                                <p className="font-medium truncate text-black dark:text-white tracking-wide text-lg">Ashish</p>
                            </div>
                            <p className="text-xs text-black/80 dark:text-white/80 truncate tracking-wide">ashishxyzjha@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 w-fit px-3 py-[0.95] rounded-xs bg-[#F3F4F6] dark:bg-[#F8E6DB]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check-icon lucide-badge-check opacity-60"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                        <div className="text-black tracking-wider opacity-60">verified</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-2 space-y-1 w-full rounded-b-lg">
                    <div className="flex items-center text-black dark:text-white dark:hover:text-black gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-[#F6F6EF] dark:hover:bg-[#F6F6EF]/90 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                        <span className="tracking-wide">Profile</span>
                    </div>

                    <div className="border-t border-gray-600 dark:border-white/80">
                        <div className="flex items-center gap-2 cursor-pointer px-3 py-2 mt-1 rounded-md hover:bg-red-400/12 dark:hover:bg-red-400/25 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out text-black dark:text-white"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                            <span className="text-[#E75C60] tracking-wide">Log out</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}
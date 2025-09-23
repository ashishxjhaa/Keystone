"use client"

import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";


export function Action() {
    const [openProfile, setOpenProfile] = useState(false)

    return (
        <>
        <div className="pt-25 flex justify-end items-center w-[90%] max-w-2xl mx-auto gap-3 sm:gap-10">
            <div className="w-fit h-fit border border-dashed border-[#FE6603] bg-white dark:bg-neutral-700/50 rounded-sm px-4 py-2">
                <input placeholder="Serch by title" className="w-35 sm:w-64 h-5 sm:h-8 border-none outline-none focus:ring-0 focus:outline-none" />
            </div>
            <div onClick={() => setOpenProfile(!openProfile)} className="border border-[#FE6603] dark:border-[#FE6603]/80 bg-white dark:bg-neutral-700/50 hover:bg-[#FE6603] dark:hover:bg-[#FE6603] text-black dark:text-white hover:text-white pl-2 pr-3 py-1 flex items-center gap-3 cursor-pointer">
                <IoAddOutline size={20} />
                <span>Add Post</span>
            </div>
        </div>

        {openProfile && (
            <div className="text-center pt-10">Open</div>
        )}
        </>
    )
}
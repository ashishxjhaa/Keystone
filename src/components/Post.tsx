"use client"

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";



export function Post() {

    return (
        <div className="px-10 py-12 flex gap-4 flex-wrap w-full sm:w-[90%] max-w-8xl mx-auto">
            <div className="flex flex-col gap-4 text-left max-w-sm px-2 sm:px-4 py-8 pb-6 rounded-lg bg-white dark:bg-neutral-700 text-black dark:text-white border border-black/20 dark:border-white/50">
                <div className="px-3 sm:px-4 font-bold text-lg tracking-wide">This is my title of this section.</div>
                <div className="px-3 sm:px-4">Conent come here and it will show under the title but it still remains inside the div.</div>
                <div className="flex gap-4 w-full justify-end px-10">
                    <div className="rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#F8E6DB] dark:hover:bg-neutral-600 text-black dark:text-white p-2 cursor-pointer"><CiEdit /></div>
                    <div className="rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#FE6603] dark:hover:bg-[#FE6603]/85 text-black dark:text-white dark:hover:text-black p-2 cursor-pointer"><MdDelete /></div>
                </div>
            </div>
            <div className="flex flex-col gap-4 text-left max-w-sm px-2 sm:px-4 py-8 pb-6 rounded-lg bg-white dark:bg-neutral-700 text-black dark:text-white border border-black/20 dark:border-white/50">
                <div className="px-3 sm:px-4 font-bold text-lg tracking-wide">This is my title of this section.</div>
                <div className="px-3 sm:px-4">Conent come here and it will show under the title but it still remains inside the div.</div>
                <div className="flex gap-4 w-full justify-end px-10">
                    <div className="rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#F8E6DB] dark:hover:bg-neutral-600 text-black dark:text-white p-2 cursor-pointer"><CiEdit /></div>
                    <div className="rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#FE6603] dark:hover:bg-[#FE6603]/85 text-black dark:text-white dark:hover:text-black p-2 cursor-pointer"><MdDelete /></div>
                </div>
            </div>
            <div className="flex flex-col gap-4 text-left max-w-sm px-2 sm:px-4 py-8 pb-6 rounded-lg bg-white dark:bg-neutral-700 text-black dark:text-white border border-black/20 dark:border-white/50">
                <div className="px-3 sm:px-4 font-bold text-lg tracking-wide">This is my title of this section.</div>
                <div className="px-3 sm:px-4">Conent come here and it will show under the title but it still remains inside the div.</div>
                <div className="flex gap-4 w-full justify-end px-10">
                    <div className="rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#F8E6DB] dark:hover:bg-neutral-600 text-black dark:text-white p-2 cursor-pointer"><CiEdit /></div>
                    <div className="rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#FE6603] dark:hover:bg-[#FE6603]/85 text-black dark:text-white dark:hover:text-black p-2 cursor-pointer"><MdDelete /></div>
                </div>
            </div>
        </div>
    )
}
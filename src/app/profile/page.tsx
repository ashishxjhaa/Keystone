"use client"

import Back from "@/components/Back"
import Navbar from "@/pages/Navbar"


function ProfilePage() {

    return (
        <div className="min-h-screen dark:bg-black bg-[#F6F6EF] pt-14 sm:pt-18">
            <Navbar />
            <Back />
            <div className="bg-white dark:bg-neutral-700 w-[80%] max-w-md flex mx-auto my-10 border rounded-md border-black/50 dark:border-white/80 px-3 sm:px-5 py-4 sm:py-8">
                <div className="flex flex-col gap-3 w-full">
                    <div className="bg-white dark:bg-neutral-800 rounded-md p-2 px-3">
                        <label className="block text-md font-medium text-black dark:text-white tracking-wide">Full name</label>
                        <input type="text" className="w-full mt-1 p-2 mb-2 rounded-md border border-black/50 dark:border-white/60 focus:outline-none" />
                    </div>
                    <div className="bg-white dark:bg-neutral-800 rounded-md p-2 px-3">
                        <label className="block text-md font-medium text-black dark:text-white tracking-wide">Email</label>
                        <input type="email" className="w-full mt-1 p-2 mb-2 rounded-md border border-black/50 dark:border-white/60 focus:outline-none"/>
                    </div>
                    <div className="flex justify-end w-full">
                        <button type="submit" className="bg-[#FE6603] hover:bg-[#FF762D] font-semibold tracking-wide rounded-sm px-2 sm:px-3 py-1 sm:py-2 cursor-pointer text-white w-fit">Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
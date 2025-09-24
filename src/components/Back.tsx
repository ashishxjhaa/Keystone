"use client"

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";


function Back() {
    const router = useRouter();

    return (
        <div className='w-fit'>
            <div className='flex items-center rounded-3xl bg-[#F8E6DB] dark:bg-zinc-600 dark:hover:bg-zinc-700 ml-6 sm:ml-15 mt-8 px-3 sm:px-4 py-1.5 sm:py-2 cursor-pointer' onClick={() => router.back()}>
                <IoIosArrowBack className="text-black dark:text-white" />
                <div className="text-black dark:text-white pl-2 pr-1">Back</div>
            </div>
        </div>
    )
}

export default Back
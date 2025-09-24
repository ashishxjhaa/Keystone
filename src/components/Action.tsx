"use client"

import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import axios from "axios";
import { toast } from "sonner";


export function Action() {
    const [openProfile, setOpenProfile] = useState(false)
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState({
        title: "",
        content: ""
    });

    const handleSubmit = async () => {
        
        if (!postData.title.trim() || !postData.content.trim()) {
            toast.error("Both is required");
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const res = await axios.post("/api/post", postData, { headers: { userId: token || "" }, withCredentials: true });
            toast.success("Posted successfully 🎉");
            setPostData({ title: "", content: "" });
            setOpenProfile(false);
        } catch (error) {
            toast.error("Post Failed, Try again!");
        } finally {
            setLoading(false);
        }
    };

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
            <div className="fixed inset-0 z-10 flex items-center justify-center">
                <div className="relative bg-[#F6F6EF] dark:bg-neutral-700 rounded-xl p-6 w-[75%] sm:w-[90%] max-w-md max-h-[67vh] overflow-y-auto border border-black/50 dark:border-white/50">
                    <div className="flex items-center justify-between mb-4">
                        <div className="font-semibold text-lg text-black dark:text-white tracking-wide">POST DETAILS</div>
                        <button onClick={() => setOpenProfile(false)} className="p-1 bg-white dark:bg-neutral-800 hover:bg-[#FE6603] dark:hover:bg-[#FE6603]/90 text-black dark:text-white hover:text-white rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="bg-white dark:bg-neutral-800 rounded-md p-2 px-3">
                            <label className="flex justify-between text-md font-medium text-black dark:text-white tracking-wide">
                                <div>Title</div>
                                <div className="text-gray-500">{postData.title.length}/35</div>
                            </label>
                            <input type="text" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} maxLength={35} className="w-full mt-1 p-2 mb-2 rounded-md border border-black/50 dark:border-white/60 focus:outline-none" />
                        </div>
                        <div className="bg-white dark:bg-neutral-800 rounded-md p-2 px-3">
                            <label className="flex justify-between text-md font-medium text-black dark:text-white tracking-wide">
                                <div>Content</div>
                                <div className="text-gray-500">{postData.content.length}/150</div>
                            </label>
                            <textarea value={postData.content} onChange={(e) => setPostData({ ...postData, content: e.target.value })} maxLength={150} className="w-full min-h-22 max-h-22 mt-1 p-2 mb-2 rounded-md border border-black/50 dark:border-white/60 focus:outline-none" />
                        </div>
                    </div>

                    <button onClick={handleSubmit} disabled={loading} className="bg-[#FE6603] hover:bg-[#FF762D] text-white font-semibold tracking-wide rounded-md py-2 mt-4 cursor-pointer w-full">
                        {loading ? "Posting..." : "Post"}
                    </button>
                </div>
            </div>
        )}
        </>
    )
}
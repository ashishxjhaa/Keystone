"use client"

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";


interface PostType {
    _id: string;
    title: string;
    content: string;
}



export function Post() {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [openProfile, setOpenProfile] = useState<string | null>(null);

    const fetchPosts = async () => {
        try {
            const res = await axios.get("/api/post");
            setPosts(res.data as PostType[]);
        } catch (error) {
            toast.error("Failed to fetch posts");
        }
    };

    useEffect(() => {
        fetchPosts();

        const handlePostCreated = () => fetchPosts();
        window.addEventListener('postCreated', handlePostCreated);
    
        return () => window.removeEventListener('postCreated', handlePostCreated);
        
    }, []);

    return (
        <div className="px-10 py-12 flex gap-4 flex-wrap w-full sm:w-[90%] max-w-8xl mx-auto">
            {posts.map((post: any) => (
            <div key={post._id} className="flex flex-col gap-3 text-left max-w-sm px-2 sm:px-4 py-8 pb-4 w-fit h-fit rounded-lg bg-white dark:bg-neutral-700 text-black dark:text-white border border-black/20 dark:border-white/50 hover:-translate-y-2 hover:shadow-lg transition-transform duration-550 shadow-[#FE6603]/50 dark:shadow-white/50">
                <div className="px-3 sm:px-4 font-bold text-lg tracking-wide">{post.title}</div>
                <div className="px-3 sm:px-4">{post.content}</div>
                <div onClick={() => setOpenProfile(openProfile === post._id ? null : post._id)} className="flex w-full justify-end pr-3">
                    <BsThreeDots size={22} className="w-fit h-fit cursor-pointer hover:bg-[#F8E6DB] hover:rounded-full hover:text-[#FE6603] p-1" />
                </div>
                {openProfile === post._id && (
                    <div className="flex gap-4 w-full justify-end pr-3">
                        <div className="flex gap-2 items-center rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#F8E6DB] dark:hover:bg-neutral-600 text-black dark:text-white px-3 py-1.5 cursor-pointer">
                            <div>Edit</div> 
                            <CiEdit />
                        </div>
                        <div className="flex gap-2 items-center rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#FE6603] hover:text-white dark:hover:bg-[#FE6603]/85 text-black dark:text-white dark:hover:text-white px-3 py-1.5 cursor-pointer">
                            <div>Delete</div>
                            <MdDelete />
                        </div>
                    </div>
                )}
            </div>
            ))}
        </div>
    )
}
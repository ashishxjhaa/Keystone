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



export function Post({ searchQuery = "" }) {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);
    const [openProfile, setOpenProfile] = useState<string | null>(null);
    const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

    useEffect(() => {
        const filtered = posts.filter(post => 
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPosts(filtered);
    }, [posts, searchQuery]);

    const fetchPosts = async () => {
        try {
            const res = await axios.get("/api/post");
            setPosts(res.data as PostType[]);
        } catch (error) {
            toast.error("Failed to fetch posts");
        }
    };

    const handleDelete = async (id: string) => {
        await axios.delete("/api/post", { data: { id } } as any);
        toast.success("Post deleted");
        fetchPosts();
    };

    const handleEdit = (post: PostType) => {
        window.dispatchEvent(new CustomEvent('editPost', { detail: post }));
    };

    useEffect(() => {
        fetchPosts();

        const handlePostCreated = () => fetchPosts();
        window.addEventListener('postCreated', handlePostCreated);
    
        return () => window.removeEventListener('postCreated', handlePostCreated);

    }, []);

    useEffect(() => {
        const handleSearchChange = (e: any) => {
            const query = e.detail;
            const filtered = posts.filter(post => 
                post.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredPosts(filtered);
        };
    
        window.addEventListener('searchQueryChanged', handleSearchChange);
        return () => window.removeEventListener('searchQueryChanged', handleSearchChange);
    }, [posts]);
    

    return (
        <div className="px-10 py-12 flex gap-4 flex-wrap w-full sm:w-[90%] max-w-8xl mx-auto">
            {filteredPosts.map((post) => (
            <div key={post._id} className="flex flex-col gap-3 text-left max-w-sm px-2 sm:px-4 py-8 pb-4 w-fit h-fit rounded-lg bg-white dark:bg-neutral-700 text-black dark:text-white border border-black/20 dark:border-white/50 hover:-translate-y-2 hover:shadow-lg transition-transform duration-550 shadow-[#FE6603]/50 dark:shadow-white/50">
                <div className="px-3 sm:px-4 font-bold text-lg tracking-wide">{post.title}</div>
                <div className="px-3 sm:px-4">{post.content}</div>
                <div onClick={() => setOpenProfile(openProfile === post._id ? null : post._id)} className="flex w-full justify-end pr-3">
                    <BsThreeDots size={22} className="w-fit h-fit cursor-pointer hover:bg-[#F8E6DB] hover:rounded-full hover:text-[#FE6603] p-1" />
                </div>
                {openProfile === post._id && (
                    <div className="flex gap-4 w-full justify-end pr-3">
                        <div onClick={() => handleEdit(post)} className="flex gap-2 items-center rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#F8E6DB] dark:hover:bg-neutral-600 text-black dark:text-white px-3 py-1.5 cursor-pointer">
                            <div>Edit</div> 
                            <CiEdit />
                        </div>
                        <div onClick={() => setConfirmDelete(post._id)} className="flex gap-2 items-center rounded-sm border border-[#FE6603] dark:border-[#FE6603]/80 hover:bg-[#FE6603] hover:text-white dark:hover:bg-[#FE6603]/85 text-black dark:text-white dark:hover:text-white px-3 py-1.5 cursor-pointer">
                            <div>Delete</div>
                            <MdDelete />
                        </div>
                    </div>
                )}
            </div>
            ))}
            {confirmDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                     <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg text-center">
                        <p className="mb-4 text-lg">Are you sure you want to delete this post?</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => setConfirmDelete(null)} className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 cursor-pointer">
                                Cancel
                            </button>
                            <button onClick={() => { handleDelete(confirmDelete); setConfirmDelete(null);}} className="px-4 py-2 rounded bg-red-500 text-white cursor-pointer">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
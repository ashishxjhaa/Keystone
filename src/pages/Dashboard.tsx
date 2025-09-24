"use client"

import { Action } from "@/components/Action"
import Navbar from "./Navbar"
import { Post } from "@/components/Post"
import { useRouter } from "next/navigation";
import { useEffect } from "react";



function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, []);

    return (
        <div className="min-h-screen dark:bg-black bg-[#F6F6EF]">
            <Navbar />
            <Action />
            <Post />
        </div>
    )
}


export default DashboardPage
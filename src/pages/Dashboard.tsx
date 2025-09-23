"use client"

import { Action } from "@/components/Action"
import Navbar from "./Navbar"
import { Post } from "@/components/Post"



function DashboardPage() {

    return (
        <div className="min-h-screen dark:bg-black bg-[#F6F6EF]">
            <Navbar />
            <Action />
            <Post />
        </div>
    )
}


export default DashboardPage
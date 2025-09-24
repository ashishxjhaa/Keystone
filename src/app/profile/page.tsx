"use client"

import Back from "@/components/Back"
import Navbar from "@/pages/Navbar"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";


function ProfilePage() {
    const router = useRouter();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [isChanged, setIsChanged] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;
                const res = await axios.get<{ user: { fullName: string; email: string } }>("/api/profile", { headers: { Authorization: `Bearer ${token}` }});
                setFullName(res.data.user.fullName);
                setEmail(res.data.user.email);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, []);

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
        setIsChanged(true);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsChanged(true);
    };

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            await axios.put("/api/profile", { fullName, email }, { headers: { Authorization: `Bearer ${token}` } });
            setIsChanged(false);
            toast.success("Profile updated");
        } catch (err) {
            toast.error("Failed, Try again!");
        }
    };



    return (
        <div className="min-h-screen dark:bg-black bg-[#F6F6EF] pt-14 sm:pt-18">
            <Navbar />
            <Back />
            <div className="bg-white dark:bg-neutral-700 w-[80%] max-w-md flex mx-auto my-10 border rounded-md border-black/50 dark:border-white/80 px-3 sm:px-5 py-4 sm:py-8">
                <div className="flex flex-col gap-3 w-full">
                    <div className="bg-white dark:bg-neutral-800 rounded-md p-2 px-3">
                        <label className="block text-md font-medium text-black dark:text-white tracking-wide">Full name</label>
                        <input type="text" value={fullName} onChange={handleFullNameChange} className="w-full mt-1 p-2 mb-2 rounded-md border border-black/50 dark:border-white/60 focus:outline-none" />
                    </div>
                    <div className="bg-white dark:bg-neutral-800 rounded-md p-2 px-3">
                        <label className="block text-md font-medium text-black dark:text-white tracking-wide">Email</label>
                        <input type="email" value={email} onChange={handleEmailChange} className="w-full mt-1 p-2 mb-2 rounded-md border border-black/50 dark:border-white/60 focus:outline-none"/>
                    </div>
                    <div className="flex justify-end w-full">
                        <button type="submit" disabled={!isChanged} onClick={handleUpdate} className={`font-semibold tracking-wide rounded-sm px-2 sm:px-3 py-1 sm:py-2 w-fit text-white ${ isChanged ? "bg-[#FE6603] hover:bg-[#FF762D] cursor-pointer" : "bg-gray-300 cursor-not-allowed"}`}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
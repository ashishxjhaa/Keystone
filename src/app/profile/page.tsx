"use client"

import Back from "@/components/Back"
import Navbar from "@/pages/Navbar"


function ProfilePage() {

    return (
        <div className="min-h-screen dark:bg-black bg-[#F6F6EF] pt-14 sm:pt-18">
            <Navbar />
            <Back />
            <div>
                <div>Ashish Jha</div>
                <div>ashishxyzjha@gmail.com</div>
            </div>
        </div>
    )
}

export default ProfilePage
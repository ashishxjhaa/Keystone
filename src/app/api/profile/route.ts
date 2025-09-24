import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function GET(req: Request) {
    try {
        await connectDB();
        
        const authHeader = req.headers.get("Authorization");
        if (!authHeader) return NextResponse.json(
            { error: "Unauthorized" }, 
            { status: 401 }
        );
        
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token!, process.env.JWT_SECRET!) as { userId: string };
        
        const user = await User.findById(decoded.userId).select("fullName email");
        
        if (!user) return NextResponse.json(
            { error: "User not found" },
            { status: 404 }
        );
        
        return NextResponse.json(
            { user }, 
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}

export async function PUT(req: Request) {
    try {
        await connectDB();
        const authHeader = req.headers.get("Authorization");
        if (!authHeader) return NextResponse.json(
            { error: "Unauthorized" }, 
            { status: 401 }
        );

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token!, process.env.JWT_SECRET!) as { userId: string };

        const body = await req.json();
        const { fullName, email } = body;

        const updatedUser = await User.findByIdAndUpdate(
            decoded.userId,
            { fullName, email },
            { new: true }
        );

        return NextResponse.json(
            { user: updatedUser }, 
            { status: 200 }
        );
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}

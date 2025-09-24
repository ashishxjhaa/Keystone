import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Post from "@/models/Post";
import jwt from "jsonwebtoken";


export async function POST(req: Request) {
    try {
        await connectDB();

        const token = req.headers.get("userId");
        
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
        const userId = decoded.userId;

        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" }, 
                { status: 401 }
            );
        }
        
        const { title, content } = await req.json();

        if (!title || !content) {
            return NextResponse.json(
                { error: "Both are required" }, 
                { status: 400 }
            );
        }

        if (title.length > 35 || content.length > 150) {
            return NextResponse.json(
                { error: "Title & content are too long" }, 
                { status: 400 }
            );
        }

        const savedPost = await Post.create({
            user: userId,
            title,
            content,
        });

        return NextResponse.json(
            { success: true, post: savedPost },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const posts = await Post.find().sort({ createdAt: -1 });
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch posts" }, 
            { status: 500 }
        );
    }
}

export async function PUT(req: Request) {
    try {
        await connectDB();
        const { id, title, content } = await req.json();
        const updated = await Post.findByIdAndUpdate(id, { title, content }, { new: true });
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to Edit posts" }, 
            { status: 500 }
        );
    }
}

export async function DELETE(req: Request) {
    try {
        await connectDB();
        const { id } = await req.json();
        await Post.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to Delete posts" }, 
            { status: 500 }
        );
    }
}



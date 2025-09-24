import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
});

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        const parsed = loginSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid input", details: parsed.error },
                { status: 400 }
            );
        }

        const { email, password } = parsed.data;

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 400 }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password!);
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 400 }
            );
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET!,
            { expiresIn: "5d", }
        );

        const res = NextResponse.json(
            { message: "Login successful", token }, 
            { status: 200 }
        );

        return res;
    } catch (err) {
        console.error("Login Error:", err);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import User from "@/models/User";
import connectDB from "@/lib/db";
import { z } from "zod";

const registerSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    password: z.string().min(3),
});

export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();
        const parseResult = registerSchema.safeParse(body);

        if (!parseResult.success) {
            return NextResponse.json({ error: "All fields required" }, { status: 400 });
        }

        const { fullName, email, password } = parseResult.data;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
        });

        return NextResponse.json({ message: "Register Done" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
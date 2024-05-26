import { NextRequest, NextResponse } from "next/server";

import client from '@/db';

export async function GET() {

    const user = await client.user.findFirst();
    

    return Response.json({
        firstName: "soham",
        lastName: "Nimbalkar"

    })
}

export async function POST(req: NextRequest) {

    const body = await req.json();
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });

    return NextResponse.json({
        message: "you are signup successfully"
    })
}
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, { params } : {
    params: {
        authRoutes : String[]
    }
}) {
    console.log("params are",params);
    return NextResponse.json({
        message: "in auth routes"
    })
}
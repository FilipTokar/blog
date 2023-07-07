import { NextResponse } from "next/server"

export const GET = async (request) => {
    return new NextResponse("this is my first api", {status: 200})
}
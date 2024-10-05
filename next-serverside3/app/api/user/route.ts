import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
import client from "@/db";


export async function GET() {
  const user = await client.user.findFirst({});
  return Response.json({ name: user?.userName, password: user?.password })
}

 export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await client.user.create({
      data: {
          userName: body.username,
          password: body.password
      }
  });

  // console.log(user.id);

  return NextResponse.json({ message: "Signed up" });
}
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return new NextResponse("Missing required contact fields", { status: 400 });
    }

    const fullMessage = subject ? `Subject: ${subject}\n\n${message}` : message;

    const contactMsg = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message: fullMessage,
      }
    });

    return NextResponse.json(contactMsg);
  } catch (error: any) {
    console.error(error, "CONTACT_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(messages);
  } catch (error: any) {
    console.error(error, "GET_CONTACT_MESSAGES_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, address, serviceType, date, time } = body;

    if (!name || !email || !address || !serviceType || !date || !time) {
      return new NextResponse("Missing required booking fields", { status: 400 });
    }

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        address,
        serviceType,
        date,
        time,
        status: "PENDING",
      }
    });

    return NextResponse.json(booking);
  } catch (error: any) {
    console.error(error, "BOOKING_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(bookings);
  } catch (error: any) {
    console.error(error, "GET_BOOKINGS_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

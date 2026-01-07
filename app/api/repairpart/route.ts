import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";





export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validasi input
    const data = z.object({
      repairOrderId: z.number(),
      partId: z.number(),
      quantity: z.number(),
    }).parse(body);
    // Cek duplicate
    const exists = await prisma.repairPart.findFirst({
      where: {
        OR: [
          { repairOrderId: data.repairOrderId },
          { partId: data.partId },
          { quantity: data.quantity },
        ],
      },
    });

    if (exists) {
      return NextResponse.json(
        { message: "Username atau email sudah digunakan" },
        { status: 409 }
      );
    }

    // Create user
    const user = await prisma.repairPart.create({
      data: {
        repairOrderId: data.repairOrderId,
        partId: data.partId,
        quantity: data.quantity,

      },
      select: {
        id: true,
        partId: true,
        quantity: true,
        repairOrderId: true,
        createdAt: true,
      },
    });

    return NextResponse.json(user, { status: 201 });

  } catch (error: any) {

    // Error validasi Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validasi gagal",
          errors: error,
        },
        { status: 400 }
      );
    }

    console.error("Create user error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const repairParts = await prisma.repairPart.findMany();
    return NextResponse.json(repairParts);
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengambil data repair part" },
      { status: 500 }
    );
  }
}
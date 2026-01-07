import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

/* =========================
   ZOD SCHEMA (INLINE)
========================= */
const createUserSchema = z.object({
  partId: z.number().min(3, "Nama minimal 3 karakter"),
  quantity: z.number().min(3, "minimal 6 karakter"),
  repairOrderId: z.number().min(6, "minimal 6 karakter"),
});

/* =========================
   API POST
========================= */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validasi input
    const data = createUserSchema.parse(body);

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

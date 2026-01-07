import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

/* =========================
   ZOD SCHEMA (INLINE)
========================= */
const createUserSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  description: z.string().min(3, "minimal 6 karakter"),
  status: z.string().min(6, "minimal 6 karakter"),
  location: z.string().optional(),
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
    const exists = await prisma.machine.findFirst({
      where: {
        OR: [
          { name: data.name },
          { description: data.description },
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
    const user = await prisma.machine.create({
      data: {
        name: data.name,
        description: data.description,
        location: data.location,
        status: data.status,
      },
      select: {
        id: true,
        name: true,
        description: true,
        location: true,
        status: true,
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


/* =========================
   API GET
========================= */

export async function GET() {
  try {
    const users = await prisma.machine.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengambil data user" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

/* =========================
   ZOD SCHEMA (INLINE)
========================= */
const createUserSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  description: z.string().min(3, "Deskripsi minimal 3 karakter"),
  stock: z.coerce.number().min(1, "Stock minimal 1"),
});


/* =========================
   API POST
========================= */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("RAW BODY DARI CLIENT:", body);

    // Validasi input
    const data = createUserSchema.parse(body);

    // Cek duplicate
    const exists = await prisma.part.findFirst({
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
    const user = await prisma.part.create({
      data: {
        name: data.name,
        description: data.description,
        stock: data.stock,
      },
      select: {
        id: true,
        name: true,
        description: true,
        stock: true,
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
          errors: error.errors,
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
    const parts = await prisma.part.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(parts);
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengambil data part" },
      { status: 500 }
    );
  }
}

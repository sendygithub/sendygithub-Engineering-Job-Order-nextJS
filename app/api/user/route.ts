import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

/* =========================
   ZOD SCHEMA (INLINE)
========================= */
const createUserSchema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  role: z.enum(["ADMIN", "OPERATOR", "MECHANIC"]),
  fullName: z.string().optional(),
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
    const exists = await prisma.user.findFirst({
      where: {
        OR: [
          { username: data.username },
          { email: data.email },
        ],
      },
    });

    if (exists) {
      return NextResponse.json(
        { message: "Username atau email sudah digunakan" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
        role: data.role,
        fullName: data.fullName,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        fullName: true,
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

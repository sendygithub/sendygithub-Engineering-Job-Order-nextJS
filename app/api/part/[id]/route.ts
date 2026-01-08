import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const partId = Number(id);

  if (isNaN(partId)) {
    return NextResponse.json(
      { message: "ID tidak valid" },
      { status: 400 }
    );
  }

  const part = await prisma.part.findUnique({
    where: { id: partId },
  });

  if (!part) {
    return NextResponse.json(
      { message: "Part tidak ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json(part);
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const partId = Number(id);
  const body = await req.json();

  const part = await prisma.part.update({
    where: { id: partId },
    data: {
      name: body.name,
      description: body.description,
      stock: Number(body.stock),
    },
  });

  return NextResponse.json(part);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const partId = Number(id);

  const part = await prisma.part.delete({
    where: { id: partId },
  });

  return NextResponse.json(part);
}

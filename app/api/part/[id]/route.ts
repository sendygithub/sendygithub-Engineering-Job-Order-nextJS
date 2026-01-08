import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

async function getPartId(
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const partId = Number(id);

  if (Number.isNaN(partId)) {
    throw new Error("INVALID_ID");
  }

  return partId;
}

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const partId = await getPartId(context);

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
  } catch {
    return NextResponse.json(
      { message: "ID tidak valid" },
      { status: 400 }
    );
  }
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const partId = await getPartId(context);
    const { name, description, stock } = await req.json();

    const part = await prisma.part.update({
      where: { id: partId },
      data: {
        name,
        description,
        stock: Number(stock),
      },
    });

    return NextResponse.json(part);
  } catch {
    return NextResponse.json(
      { message: "ID tidak valid" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const partId = await getPartId(context);

    const part = await prisma.part.delete({
      where: { id: partId },
    });

    return NextResponse.json(part);
  } catch {
    return NextResponse.json(
      { message: "ID tidak valid" },
      { status: 400 }
    );
  }
}

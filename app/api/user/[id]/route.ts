import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const part = await prisma.part.update({
    where: { id: params.id },
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
  { params }: { params: { id: string } }
) {
  const part = await prisma.part.delete({
    where: { id: params.id },
  });

  return NextResponse.json(part);
}
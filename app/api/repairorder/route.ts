import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

/**
 * Schema validasi body request
 */
const createRepairOrderSchema = z.object({
  description: z.string().min(10),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  machineId: z.number().int().positive(),
  assignedToId: z.number().int().optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  notes: z.string().optional(),
  createdById: z.number().int(),
});


export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("RAW BODY DARI CLIENT:", body);
    // VALIDASI BODY
    const data = createRepairOrderSchema.parse(body);

    const repairOrder = await prisma.repairOrder.create({
      data: {
        description: data.description,
        priority: data.priority,
        machineId: data.machineId,
        assignedToId: data.assignedToId,
        createdById: data.createdById,
        startDate: data.startDate,
        endDate: data.endDate,
        notes: data.notes,
      },
    });

    return NextResponse.json(repairOrder, { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error", errors: error },
        { status: 400 }
      );
    }

    console.error("Create RepairOrder Error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const repairOrders = await prisma.repairOrder.findMany();
    return NextResponse.json(repairOrders);
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengambil data repair order" },
      { status: 500 }
    );
  }
}
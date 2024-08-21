import { prisma } from "@/libs/prisma";
import { MenuCategories } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let menuCategories = await prisma.menuCategories.findMany();

  return NextResponse.json(JSON.stringify(menuCategories), { status: 200 });
}
export async function POST(request: Request) {
  const menuCategory: MenuCategories = await request.json();
  console.log(menuCategory);
  await prisma.menuCategories.create({
    data: {
      name: menuCategory.name,
    },
  });

  return NextResponse.json(null, { status: 500 });
}

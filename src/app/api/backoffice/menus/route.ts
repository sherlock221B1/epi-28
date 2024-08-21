import { prisma } from "@/libs/prisma";
import { Menus } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  let menus: Menus[] = await prisma.menus.findMany();
  console.log("menus are", menus);
  return NextResponse.json(JSON.stringify(menus), { status: 200 });
}
export async function POST(req: Request) {
  const menu = await req.json();
  const menuCategoryIds: number[] = menu.menuCategoryIds;
  console.log("data is", menu);

  const addedMenu = await prisma.menus.create({
    data: {
      name: menu.name,
      price: menu.price,
      isAvailable: menu.isAvailable,
    },
  });
  /*    [{id:1,menuId:1,menuCategoryIds:1}] */
  const data: any = menuCategoryIds.map((menuCategoryId) => ({
    menuId: addedMenu.id,
    menuCategoryIds: menuCategoryId,
  }));
  await prisma.menusCategoriesAndMenus.createMany({
    data: data,
  });

  return NextResponse.json(null, { status: 200 });
}
/* export async function PUT(req: Request) {

  return NextResponse.json(, { status: 200 });
}
export async function DELETE(req: Request) {

  return NextResponse.json(, { status: 200 });
}
 */

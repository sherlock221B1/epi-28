import { Menu } from "@mui/material";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req: Request) {
  console.log("req is", req);
  return NextResponse.json([], { status: 200 });
}
/*   return;
  const menuId = req
  await prisma.menus.findFirst({where:id:})
}

export default async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const menuId = Number(req.query.id);
  const menuToBeUpdatedOrDeleted = await prisma.menus.findFirst({
    where: { id: menuId },
    include: { menusCategoriesAndMenus: true },
  });

  if (method === "GET") {
    res.json(JSON.stringify(menuToBeUpdatedOrDeleted));
  } else if (method === "DELETE") {
    await prisma.menusCategoriesAndMenus.deleteMany({
      where: { menuId: menuId },
    });
    await prisma.menus.delete({ where: { id: menuId } });
    res.end();
  }
  res.end();
}
 */

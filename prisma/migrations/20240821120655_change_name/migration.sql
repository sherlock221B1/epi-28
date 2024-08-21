/*
  Warnings:

  - You are about to drop the column `menuCategoriesId` on the `MenusCategoriesAndMenus` table. All the data in the column will be lost.
  - Added the required column `menuCategoryIds` to the `MenusCategoriesAndMenus` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MenusCategoriesAndMenus" DROP CONSTRAINT "MenusCategoriesAndMenus_menuCategoriesId_fkey";

-- AlterTable
ALTER TABLE "MenusCategoriesAndMenus" DROP COLUMN "menuCategoriesId",
ADD COLUMN     "menuCategoryIds" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "MenusCategoriesAndMenus" ADD CONSTRAINT "MenusCategoriesAndMenus_menuCategoryIds_fkey" FOREIGN KEY ("menuCategoryIds") REFERENCES "MenuCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

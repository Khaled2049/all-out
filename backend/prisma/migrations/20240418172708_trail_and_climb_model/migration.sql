-- CreateTable
CREATE TABLE "Trail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "fee" TEXT NOT NULL,
    "water" TEXT NOT NULL,
    "bathrooms" TEXT NOT NULL,
    "manager" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Climb" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "protection" TEXT NOT NULL,
    "left_right_seq" TEXT NOT NULL,
    "mp_sector_id" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "route_name" TEXT NOT NULL,
    "first_ascent" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "yds" TEXT NOT NULL,
    "parent_sector" TEXT NOT NULL,
    "mp_route_id" TEXT NOT NULL
);

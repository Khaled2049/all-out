import { PrismaClient } from "@prisma/client";
import hikes from "./data/hikes.json";
import climbs from "./data/mac.json";
// 2
const prisma = new PrismaClient();

function transformHikeData(data: any) {
  return data.map((item: any) => {
    return {
      id: item.properties.feature_id,
      name: item.properties.name,
      latitude: item.geometry.coordinates[1].toString(),
      longitude: item.geometry.coordinates[0].toString(),
      fee: item.properties.fee,
      water: item.properties.water,
      bathrooms: item.properties.bathrooms,
      manager: item.properties.manager,
    };
  });
}

function mapToClimbingRoute(data: any): any[] {
  return data.map((item: any) => ({
    description: item?.description || "",
    protection: item?.protection || "",
    left_right_seq: item?.left_right_seq || "",
    mp_sector_id: item?.mp_sector_id || "",
    latitude: item?.latitude.toString() || "",
    longitude: item?.longitude.toString() || "",
    route_name: item?.route_name || "",
    first_ascent: item?.first_ascent || "",
    location: item?.location || "",
    yds: item?.yds || "",
    parent_sector: item?.parent_sector || "",
    mp_route_id: item?.mp_route_id || "",
  }));
}

// 3
async function main() {
  // const newClimb = await prisma.climb.create({
  //   data: {
  //     description: "A climb",
  //     protection: "None",
  //     left_right_seq: "Left",
  //     mp_sector_id: "123",
  //     latitude: "123",
  //     longitude: "123",
  //     route_name: "A climb",
  //     first_ascent: "Me",
  //     location: "Here",
  //     yds: "5.10",
  //     parent_sector: "None",
  //     mp_route_id: "123",
  //   },
  // });

  const data = mapToClimbingRoute(climbs);
  // console.log(data);

  await prisma.climb.createMany({
    data,
  });

  const allClimbs = await prisma.climb.findMany();
  console.log(allClimbs);
}

// 4
main()
  .catch((e) => {
    throw e;
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });

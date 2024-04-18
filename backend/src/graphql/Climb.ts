import { extendType, nonNull, objectType, stringArg } from "nexus";

export const Climb = objectType({
  name: "Climb",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("description");
    t.nonNull.string("protection");
    t.nonNull.string("left_right_seq");
    t.nonNull.string("mp_sector_id");
    t.nonNull.string("latitude");
    t.nonNull.string("longitude");
    t.nonNull.string("route_name");
    t.nonNull.string("first_ascent");
    t.nonNull.string("location");
    t.nonNull.string("yds");
    t.nonNull.string("parent_sector");
    t.nonNull.string("mp_route_id");
  },
});

export const ClimbQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("climbs", {
      type: Climb,
      resolve(parent, args, context) {
        return context.prisma.climb.findMany();
      },
    });
  },
});

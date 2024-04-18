import { extendType, nonNull, objectType, stringArg } from "nexus";

export const Trail = objectType({
  name: "Trail",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("latitude");
    t.nonNull.string("longitude");
    t.nonNull.string("fee");
    t.nonNull.string("water");
    t.nonNull.string("bathrooms");
    t.nonNull.string("manager");
  },
});

export const HikeQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("trails", {
      type: Trail,
      resolve(parent, args, context) {
        return context.prisma.trail.findMany();
      },
    });
  },
});

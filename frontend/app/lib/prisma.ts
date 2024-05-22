import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  // Allow global `prisma` to be modified in a type-safe manner
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

import { PrismaClient } from "@prisma/client";
import { datatype, internet, name } from "faker";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      user: "admin",
      fullname: name.lastName(),
      createdAt: datatype.datetime(),
      updatedAt: datatype.datetime(),
      password: hashSync("admin", 12),
    },
  });

  await prisma.user.create({
    data: {
      user: "admin2",
      fullname: name.lastName(),
      createdAt: datatype.datetime(),
      updatedAt: datatype.datetime(),
      password: hashSync("admin2", 12),
    },
  });
}

main()
  .catch((e) => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

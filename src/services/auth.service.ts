import { Prisma, Token } from "@prisma/client";
import { LoginDto } from "../dtos/login.dto";
import { prisma } from "../prisma";
import { Unauthorized, NotFound } from "http-errors";
import { compareSync } from "bcryptjs";

export const login = async (data: LoginDto) => {
  console.log("service");
  console.log(data);
  const user = await prisma.user.findFirst({
    where: {
      user: data.user,
    },
  });
  console.log(user);

  if (!user) throw new Unauthorized("User does not exist");

  const validPassword = compareSync(data.password, user.password);

  if (!validPassword) throw new Unauthorized("Password incorrect");

  return user.fullname;
};

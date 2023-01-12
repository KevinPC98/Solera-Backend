import { plainToClass } from "class-transformer";
import { response } from "express";
import { LoginDto } from "../dtos/login.dto";
import { login } from "../services/auth.service";

export const loginCtrl = async (req: Request) => {
  /*
  const data = plainToClass(LoginDto, req.body);
  const token = await AuthService.login(data); */
  const fullname = await login(plainToClass(LoginDto, req.body));
  // res.json({ fullname });
};

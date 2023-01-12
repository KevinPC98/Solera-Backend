import { plainToClass } from "class-transformer";
import { response } from "express";
import { LoginDto } from "../dtos/login.dto";
import { login } from "../services/auth.service";

export const loginCtrl = async (req: Request) => {
  /*   console.log("asokasokoaskaoskaoskaoskaoskaoskoakoaskao");
  const data = plainToClass(LoginDto, req.body);
  const token = await AuthService.login(data); */
  console.log("controller");
  console.log(req.body);
  const fullname = await login(plainToClass(LoginDto, req.body));
  // res.json({ fullname });
};

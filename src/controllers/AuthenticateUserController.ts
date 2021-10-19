import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const service = new AuthenticateUserService();
  }
}

export { AuthenticateUserController };

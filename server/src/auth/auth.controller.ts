import { Controller, Get, Req, Post, UseGuards } from "@nestjs/common"
import { LocalAuthGuard } from "./local-auth.guard"
import { JwtAuthGuard } from "./jwt-auth.guard"
import { AuthService } from "./auth.service"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Req() req: any) {
    return this.authService.login(req.user)
  }
}

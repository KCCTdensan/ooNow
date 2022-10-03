import { Controller, Get, Req, Post, UseGuards } from "@nestjs/common"
import { LocalAuthGuard } from "./guards/local-auth.guard"
import { Public } from "./decorators/auth.decorator"
import { Jwt } from "./decorators/jwt.decorator"
import { AuthService } from "./auth.service"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("hello")
  async sayHello(@Jwt() jwt: any) {
    return { msg: `hello, ${jwt.sub} !` }
  }

  @Public() // ignore JwtGuard
  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Req() req: any) {
    return this.authService.login(req.user)
  }
}

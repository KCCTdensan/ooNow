import { Controller, Get, Req, Post, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "auth/jwt-auth.guard"
import { UsersService } from "./users.service"

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("getall") // develop
  async getUser() {
    return this.usersService.findAll()
  }

  // @Get("search")

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Req() req: any) {
    return req.user
  }
}

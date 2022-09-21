import { Controller, Get, Req, Post, Body, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "auth/jwt-auth.guard"
import { UsersService } from "./users.service"

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("getall") // develop
  async getUser() {
    return this.usersService.findAll()
  }

  @Post("create")
  async createUser(@Body() body: any) {
    return this.usersService.create(body)
  }

  @Post("update")
  async updateUser(@Body() body: any) {
    return this.usersService.update(body)
  }

  @Post("delete")
  async deleteUser(@Body("id") id: string) {
    return this.usersService.delete(id)
  }

  // @Get("search")

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Req() req: any) {
    return req.user
  }
}

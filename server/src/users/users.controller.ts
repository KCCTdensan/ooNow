import * as bcrypt from "bcrypt"
import { Controller, Get, Req, Post, Body, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard"
import { Public } from "auth/decorators/auth.decorator"
import { UsersService } from "./users.service"

const saltRounds = 10

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get("getall") // develop
  async getAllUser() {
    return this.usersService.users({})
  }

  @Public()
  @Post("create")
  async createUser(@Body() data: any) {
    const { passRaw, posts, ...params } = data
    return this.usersService.create({
      ...params,
      pass: await bcrypt.hash(passRaw, saltRounds),
    })
  }

  @Post("update")
  async updateUser(@Body() data: any) {
    const { posts, ...params } = data
    return this.usersService.update({
      where: { id: params.id },
      data: { ...params },
    })
  }

  // change password

  @Post("delete")
  async deleteUser(@Body("id") id: string) {
    return this.usersService.delete({ id })
  }

  // @Get("search")

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Req() req: any) {
    return req.user
  }
}

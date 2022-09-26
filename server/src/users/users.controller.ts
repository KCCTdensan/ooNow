import * as bcrypt from "bcrypt"
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Req,
  Body,
  UseGuards,
} from "@nestjs/common"
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
  @Get("count")
  async getUserCount() {
    return { value: await this.usersService.count() }
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

  @Patch("update")
  async updateUser(@Body() data: any) {
    const { posts, ...params } = data
    return this.usersService.update({
      where: { id: params.id },
      data: { ...params },
    })
  }

  // change password

  @Delete("delete")
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

import * as bcrypt from "bcrypt"
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Req,
  Body,
  Param,
  Query,
  UseGuards,
  ConflictException,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common"
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard"
import { Public } from "auth/decorators/auth.decorator"
import { Jwt } from "auth/decorators/jwt.decorator"
import { UsersService } from "./users.service"

const saltRounds = 10

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get("getall") // develop
  async getAllUsers() {
    return this.usersService.users({})
  }

  @Public()
  @Get("profile/:screen")
  async getUserProfile(@Param("screen") screen: string) {
    const prof = await this.usersService.profile({ screen })
    if (!prof) throw new NotFoundException()
    return prof
  }

  @Public()
  @Get("count")
  async getUserCount() {
    return { value: await this.usersService.count() }
  }

  @Public()
  @Post("create")
  async createUser(@Body() data: any) {
    const { screen, passRaw } = data

    if (await this.usersService.exists({ screen })) {
      throw new ConflictException("user already exists")
    }

    const creation = {
      screen: data.screen,
      nick: data.nick,
      email: data.email,
      iconUrl: data.iconUrl,
      isPublic: data.isPublic,
    }

    const validPass = (s: string) => s.length >= 8

    if (!creation.screen || !validPass(passRaw)) {
      throw new BadRequestException()
    }

    const { pass, ...userBody } = await this.usersService.create({
      ...creation,
      pass: await bcrypt.hash(passRaw, saltRounds),
    })
    return userBody
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

  @Get("profile")
  async getMyProfile(@Jwt("sub") id: string) {
    const prof = await this.usersService.profile({ id })
    if (!prof) throw new NotFoundException()
    return prof
  }
}

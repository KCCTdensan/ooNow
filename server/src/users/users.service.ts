import * as bcrypt from "bcrypt"
import { Injectable } from "@nestjs/common"
import { PrismaService } from "prisma/prisma.service"

export type User = any

const saltRounds = 10

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({})
  }
  async findId(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    })
  }
  async findScreen(screen: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { screen },
    })
  }

  async create(data: any): Promise<User> {
    const { id, pass, posts, ...params } = data
    return this.prisma.user.create({
      data: {
        ...params,
        pass: await bcrypt.hash(pass, saltRounds),
      },
    })
  }

  async update(data: User): Promise<User> {
    const { id, pass, posts, ...params } = data
    return this.prisma.user.update({
      where: { id },
      data: {
        ...params,
        pass: await bcrypt.hash(pass, saltRounds),
      },
    })
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    })
  }
}

import { Injectable } from "@nestjs/common"
import { User, Prisma } from "@prisma/client"
import { PrismaService } from "prisma/prisma.service"

type UserProfile = {
  screen: User["screen"]
  nick: User["nick"]
  iconUrl: User["iconUrl"]
  isPublic: User["isPublic"]
  created: User["created"]
  friends: number
  followers: number
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async count(): Promise<number> {
    return this.prisma.user.count()
  }

  async user(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({ where })
  }

  async exists(where: Prisma.UserWhereUniqueInput): Promise<boolean> {
    return (await this.prisma.user.findFirst({ where })) !== null
  }

  async users(params: {
    skip?: number
    take?: number
    cursor?: Prisma.UserWhereUniqueInput
    where?: Prisma.UserWhereInput
    orderBy?: Prisma.UserOrderByWithRelationInput
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params
    return this.prisma.user.findMany({ skip, take, cursor, where, orderBy })
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data })
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput
    data: Prisma.UserUpdateInput
  }): Promise<User> {
    return this.prisma.user.update({ where: params.where, data: params.data })
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where })
  }

  async profile(
    where: Prisma.UserWhereUniqueInput
  ): Promise<UserProfile | null> {
    const data = await this.prisma.user.findUnique({
      where,
      select: {
        screen: true,
        nick: true,
        iconUrl: true,
        isPublic: true,
        created: true,
        _count: {
          select: {
            friends: true,
            followers: true,
          },
        },
      },
    })
    if (!data) return null
    const { _count, ...fields } = data
    return { ...fields, ..._count }
  }
}

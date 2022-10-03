import { Injectable } from "@nestjs/common"
import { User, Prisma } from "@prisma/client"
import { PrismaService } from "prisma/prisma.service"

@Injectable()
export class FriendsService {
  constructor(private prisma: PrismaService) {}
}

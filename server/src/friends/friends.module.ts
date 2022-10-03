import { Module } from "@nestjs/common"
import { PrismaModule } from "prisma/prisma.module"
import { FriendsService } from "./friends.service"
import { FriendsController } from "./friends.controller"

@Module({
  providers: [FriendsService],
  controllers: [FriendsController],
  imports: [PrismaModule],
  exports: [FriendsService],
})
export class FriendsModule {}

import { Module } from "@nestjs/common"
import { PrismaModule } from "prisma/prisma.module"
import { StatsService } from "./stats.service"
import { StatsController } from "./stats.controller"

@Module({
  providers: [StatsService],
  controllers: [StatsController],
  imports: [PrismaModule],
  exports: [StatsService],
})
export class StatsModule {}

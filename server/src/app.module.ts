import { Module } from "@nestjs/common"
import { HelloController } from "hello/app.controller"
import { HelloService } from "hello/app.service"

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService],
})
export class AppModule {}

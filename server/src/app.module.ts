import { Module } from "@nestjs/common"
import { APP_GUARD } from "@nestjs/core"
import { ConfigModule } from "@nestjs/config"
import { PrismaModule } from "prisma/prisma.module"
import { UsersModule } from "users/users.module"
import { AuthModule } from "auth/auth.module"
import { PostsModule } from "posts/posts.module"
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard"

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    UsersModule,
    AuthModule,
    PostsModule,
  ],
})
export class AppModule {}

import { Module } from "@nestjs/common"
import { APP_GUARD } from "@nestjs/core"
import { ConfigModule } from "@nestjs/config"
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler"

import { JwtAuthGuard } from "auth/guards/jwt-auth.guard"

import { PrismaModule } from "prisma/prisma.module"
import { UsersModule } from "users/users.module"
import { AuthModule } from "auth/auth.module"
import { PostsModule } from "posts/posts.module"
import { FriendsModule } from "friends/friends.module"
import { StatsModule } from "stats/stats.module"

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 100,
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    PostsModule,
    FriendsModule,
    StatsModule,
  ],
})
export class AppModule {}

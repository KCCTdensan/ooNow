import { NestFactory } from "@nestjs/core"
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify"
import secureSession from "@fastify/secure-session"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { AppModule } from "app.module"

if (!process.env.COOKIE_SECRET) {
  throw new Error("COOKIE_SECRET is not set !")
}

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set !")
}

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  await app.register(secureSession, {
    key: Buffer.from(process.env.COOKIE_SECRET!, "hex"),
    cookie: {
      path: "/",
      httpOnly: true,
    },
  })

  const config = new DocumentBuilder()
    .setTitle("ooNow API")
    .setDescription("ooNow API description")
    .setVersion("1.0")
    .addTag("ooNow")
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)

  await app.listen(3000)
}
bootstrap()

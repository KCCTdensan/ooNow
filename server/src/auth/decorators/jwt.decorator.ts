import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common"
import jwt_decode from "jwt-decode"

import { Payload } from "../auth.service"

export const Jwt = createParamDecorator(
  (property: string, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest()
    const auth = req.headers.authorization

    if (!auth.startsWith("Bearer")) {
      throw new UnauthorizedException()
    }

    const data: Payload = jwt_decode(auth.slice(7))
    return property ? data[property as keyof Payload] : data
  }
)

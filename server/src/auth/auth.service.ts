import * as bcrypt from "bcrypt"
import { Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { UsersService } from "users/users.service"

export type Payload = {
  sub: string
  iat: number
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  // local戦略向け
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.user({ screen: username })
    if (user && (await bcrypt.compare(password, user.pass))) {
      const { pass, ...res } = user
      return res
    }
    return null
  }

  // controllerが呼ぶやつ
  // 認証後の処理
  async login(userSub: any /* { id } */) {
    const user = await this.usersService.user({ id: userSub.id })
    const payload: Payload = { sub: user!.id, iat: Date.now() }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}

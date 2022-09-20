import { Injectable } from "@nestjs/common"

export type User = any

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      userName: "Taro",
      pass: "hoge",
    },
  ]

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find(user => user.userName === userName)
  }
}

import { Injectable } from "@nestjs/common"
import { Post, Prisma } from "@prisma/client"
import { PrismaService } from "prisma/prisma.service"

/* post
model Post {
id       String   @id @default(cuid())
content  String
date     DateTime
public   Boolean
author   User
}
*/

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async post(where: Prisma.PostWhereUniqueInput): Promise<Post | null> {
    return this.prisma.post.findUnique({ where })
  }

  async posts(params: {
    skip?: number
    take?: number
    cursor?: Prisma.PostWhereUniqueInput
    where?: Prisma.PostWhereInput
    orderBy?: Prisma.PostOrderByWithRelationInput
  }): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params
    return this.prisma.post.findMany({ skip, take, cursor, where, orderBy })
  }

  async create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data })
  }

  async update(params: {
    where: Prisma.PostWhereUniqueInput
    data: Prisma.PostUpdateInput
  }): Promise<Post> {
    return this.prisma.post.update({ where: params.where, data: params.data })
  }

  async delete(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.delete({ where })
  }
}

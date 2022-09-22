import {
  Controller,
  Get,
  Req,
  Post,
  Body,
  Param,
  NotFoundException,
} from "@nestjs/common"
import { Public } from "auth/decorators/auth.decorator"
import { PostsService } from "./posts.service"

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Public()
  @Get("hoge")
  async hoge(@Req() req: any) {
    // return req
  }

  @Public()
  @Get("get/:id")
  async getPost(@Param("id") id: string) {
    const post = await this.postsService.post({ id })
    if (!post || !post.public) {
      throw new NotFoundException()
    }
    return post
  }

  @Post("create")
  async createPost(@Body() body: any) {
  }
}

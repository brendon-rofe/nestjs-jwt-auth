import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/creat-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createPost(@Req() req: any, @Body() createPostData: CreatePostDto) {
    const userid = req.user.userId;
    return await this.postService.createPost(userid, createPostData);
  }

}

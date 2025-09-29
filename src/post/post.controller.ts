import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/creat-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createPost(@Req() req: any, @Body() createPostData: CreatePostDto) {
    const userid = req.user.userId;
    return await this.postService.createPost(userid, createPostData);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserPosts(@Req() req: any) {
    const userid = req.user.userId;
    return await this.postService.getUserPosts(userid);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getPostById(@Param('id') id: string) {
    const postId = Number(id);
    return await this.postService.getPostById(postId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() updatePostData: UpdatePostDto) {
    const postId = Number(id);
    return await this.postService.updatePost(postId, updatePostData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/delete')
  async deletePost(@Param('id') id: string) {
    const postId = Number(id);
    return await this.postService.deletePost(postId);
  }

}

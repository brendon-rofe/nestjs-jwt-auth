import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/creat-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(userid: number, createPostData: CreatePostDto) {
    return await this.prisma.post.create({
      data: { authorId: userid, ...createPostData},
    });
  }

  async getUserPosts(userid: number) {
    return await this.prisma.post.findMany({
      where: { authorId: userid }
    });
  }

  async getPostById(id: number) {
    return await this.prisma.post.findUnique({
      where: { id }
    });
  }

  async updatePost(id: number, updatePostData: CreatePostDto) {
    return await this.prisma.post.update({
      where: { id },
      data: { ...updatePostData }
    });
  }

  async deletePost(id: number) {
    return await this.prisma.post.delete({
      where: { id }
    });
  }

}

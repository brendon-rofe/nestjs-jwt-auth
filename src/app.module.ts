import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

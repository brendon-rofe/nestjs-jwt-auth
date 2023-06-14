import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [JwtModule.register({
    secret: 'super-secret'
  })],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {};

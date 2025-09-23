import { Body, Controller, Post } from '@nestjs/common';
import { LoginPayloadDto } from './dto/login.dto';
import { RegisterPayloadDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {

  @Post('login')
  login(@Body() authPayload: LoginPayloadDto ) {
    
  }

  @Post('register')
  async register(@Body() resgisterPayload: RegisterPayloadDto) {

  }

}

import { Body, Controller, Post } from '@nestjs/common';
import { LoginPayloadDto } from './dto/login.dto';
import { RegisterPayloadDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() resgisterPayload: RegisterPayloadDto) {
    return await this.authService.registerUser(resgisterPayload);
  }

  @Post('login')
  login(@Body() authPayload: LoginPayloadDto ) {
    
  }

}

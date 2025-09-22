import { Body, Controller, Post } from '@nestjs/common';
import { LoginPayloadDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

  @Post('login')
  login(@Body() authPayload: LoginPayloadDto ) {
    
  }

}

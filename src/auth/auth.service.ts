import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

  async hashPassword(password: string) {
    
  }

  async validateUser(authPayloadDto: AuthPayloadDto) {
    
  }

}

import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

  async hashPassword(password: string) {
    
  }

  validateUser(authPayloadDto: AuthPayloadDto) {
    
  }

}

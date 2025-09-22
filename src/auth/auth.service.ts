import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async validateUser(authPayloadDto: AuthPayloadDto) {
    
  }

}

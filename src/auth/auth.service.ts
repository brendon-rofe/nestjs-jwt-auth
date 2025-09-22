import { Injectable } from '@nestjs/common';
import { LoginPayloadDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async validateUser(loginPayload: LoginPayloadDto) {
    
  }

}

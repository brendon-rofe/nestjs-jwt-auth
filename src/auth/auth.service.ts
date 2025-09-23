import { Injectable } from '@nestjs/common';
import { LoginPayloadDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async validateUser(loginPayload: LoginPayloadDto) {
    
  }

}

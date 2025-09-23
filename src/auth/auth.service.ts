import { Injectable } from '@nestjs/common';
import { LoginPayloadDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { RegisterPayloadDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(loginPayload: LoginPayloadDto) {
    const user = await this.userService.findByEmail(loginPayload.email);
    if (!user) {
      return null;
    }
    const passwordMatch = await bcrypt.compare(loginPayload.password, user.password); 
    if(passwordMatch) {
      return user;
    }
  }

  async registerUser(resgisterPayload: RegisterPayloadDto) {
    const hashedPassword = await bcrypt.hash(resgisterPayload.password, 10);
    return await this.userService.create({
      username: resgisterPayload.username,
      email: resgisterPayload.email,
      password: hashedPassword,
    });
  }

}

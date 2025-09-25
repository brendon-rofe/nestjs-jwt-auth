import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginPayloadDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { RegisterPayloadDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwt: JwtService,
  ) {}

  async validateUser(loginPayload: LoginPayloadDto) {
    const user = await this.userService.findByEmail(loginPayload.email);
    if (!user) return null;

    const ok = await bcrypt.compare(loginPayload.password, user.password);
    if (!ok) return null;

    return { id: user.id, username: user.username, email: user.email}
  }

  async registerUser(resgisterPayload: RegisterPayloadDto) {
    const hashedPassword = await bcrypt.hash(resgisterPayload.password, 10);
    return await this.userService.create({
      username: resgisterPayload.username,
      email: resgisterPayload.email,
      password: hashedPassword,
    });
  }

  async login(loginPayload: LoginPayloadDto) {
    const user = await this.validateUser(loginPayload);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, email: user.email };
    return { access_token: await this.jwt.signAsync(payload) };
  }

}

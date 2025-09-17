import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';

const users = [
  {
    id: 1,
    username: 'john',
    password: 'password'
  },
  {
    id: 2,
    username: 'jane',
    password: 'pass123'
  }
]

@Injectable()
export class AuthService {

  validateUser(authPayloadDto: AuthPayloadDto) {

  }

}

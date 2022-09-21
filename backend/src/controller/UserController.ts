import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from 'src/service/UserService';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from 'src/service/UserService';
import CreateUserRequestBody from './request/CreateUserRequestBody';

@Controller('v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post('user')
  async createUser(@Body() body: CreateUserRequestBody) {
    return this.userService.createUser(body);
  }

  @Get('user/:uuid')
  async getUserCodeList(@Param('uuid') uuid: string): Promise<User[]> {
    return this.userService.getUserCodeList({ uuid });
  }
}

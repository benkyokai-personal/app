import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCompe } from '@prisma/client';
import { UserCompeService } from 'src/service/UserCompeService';

@Controller('v1')
export class UserCompeController {
  constructor(private readonly userCompeService: UserCompeService) {}

  @Get('compe/:id/:userId/:compeId')
  async getCompeCode(
    @Param('d') id: number,
    @Param('userId') userId: number,
    @Param('compeId') compeId: number,
  ): Promise<UserCompe> {
    return await this.userCompeService.getCompeCode({ id, userId, compeId });
  }

  @Post('compe')
  async postSaveUserCompeCode(
    @Body() body: SaveUserCompeCodeRequestbody,
  ): Promise<UserCompe> {
    return this.userCompeService.saveUserCompeCode(body);
  }
}

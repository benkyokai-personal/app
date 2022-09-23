import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Code } from '@prisma/client';
import { CodeService } from 'src/service/CodeService';
import SaveCodeRequestBody from './request/SaveCodeRequestBody';

@Controller('v1')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Get(':userId/code/:manageId')
  async getCode(
    @Param('userId') userId: string,
    @Param('manageId') manageId: string,
  ): Promise<Code> {
    return await this.codeService.getCode({
      userId: Number(userId),
      manageId: Number(manageId),
    });
  }

  @Post('code')
  async saveCode(@Body() body: SaveCodeRequestBody): Promise<Code> {
    return this.codeService.saveCode(body);
  }
}

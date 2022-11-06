import { Controller, Get } from '@nestjs/common';
import { Compe } from '@prisma/client';
import { CompeService } from 'src/service/CompeService';

@Controller('v1')
export class CompeController {
  constructor(private readonly compeService: CompeService) {}

  @Get('compe')
  async getCompe(): Promise<Compe[]> {
    return await this.compeService.getCompe();
  }
}

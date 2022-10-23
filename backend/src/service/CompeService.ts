import { Injectable } from '@nestjs/common';
import { Compe } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CompeService {
  constructor(private prisma: PrismaService) {}

  async getCompe(): Promise<Compe[]> {
    return await this.prisma.compe.findMany();
  }
}

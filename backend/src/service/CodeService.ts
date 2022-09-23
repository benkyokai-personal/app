import { Injectable } from '@nestjs/common';
import { Code, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CodeService {
  constructor(private prisma: PrismaService) {}

  async getCode(
    where: Prisma.CodeUserIdManageIdCompoundUniqueInput,
  ): Promise<Code> {
    return this.prisma.code.findFirst({ where });
  }

  async saveCode(data: Prisma.CodeUncheckedCreateInput): Promise<Code> {
    return this.prisma.code.create({ data: data });
  }
}

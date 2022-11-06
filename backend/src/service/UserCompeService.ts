import { Injectable } from '@nestjs/common';
import { Prisma, UserCompe } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserCompeService {
  constructor(private prisma: PrismaService) {}

  async getCompeCode(
    where: Prisma.UserCompeIdUserIdCompeIdCompoundUniqueInput,
  ): Promise<UserCompe> {
    return await this.prisma.userCompe.findFirst({ where });
  }

  async saveUserCompeCode(): Promise<UserCompe> {
    return 1 as any;
  }
}

import { Module } from '@nestjs/common';
import { UserController } from '../controller/UserController';
import { UserService } from 'src/service/UserService';
import { PrismaService } from '../prisma.service';
import { CodeController } from '../controller/CodeController';
import { CodeService } from 'src/service/CodeService';

@Module({
  imports: [],
  controllers: [UserController, CodeController],
  providers: [UserService, PrismaService, CodeService],
})
export class AppModule {}

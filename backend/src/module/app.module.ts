import { Module } from '@nestjs/common';
import { UserController } from '../controller/UserController';
import { UserService } from 'src/service/UserService';
import { PrismaService } from '../prisma.service';
import { CodeController } from '../controller/CodeController';
import { CodeService } from 'src/service/CodeService';
import { CompeController } from 'src/controller/CompeController';
import { CompeService } from 'src/service/CompeService';

@Module({
  imports: [],
  controllers: [UserController, CodeController, CompeController],
  providers: [UserService, PrismaService, CodeService, CompeService],
})
export class AppModule {}

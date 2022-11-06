import { Module } from '@nestjs/common';
import { UserController } from '../controller/UserController';
import { UserService } from 'src/service/UserService';
import { PrismaService } from '../prisma.service';
import { CodeController } from '../controller/CodeController';
import { CodeService } from 'src/service/CodeService';
import { CompeController } from 'src/controller/CompeController';
import { CompeService } from 'src/service/CompeService';
import { UserCompeController } from 'src/controller/UserCompeController';
import { UserCompeService } from 'src/service/UserCompeService';

@Module({
  imports: [],
  controllers: [
    UserController,
    CodeController,
    CompeController,
    UserCompeController,
  ],
  providers: [
    UserService,
    PrismaService,
    CodeService,
    CompeService,
    UserCompeService,
  ],
})
export class AppModule {}

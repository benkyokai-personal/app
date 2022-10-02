// import { Prisma } from '@prisma/client';

/* eslint-disable @typescript-eslint/ban-ts-comment */
export default class SaveCodeRequestBody {
  //@ts-ignore
  id?: number;

  //@ts-ignore
  userId: number;

  //@ts-ignore
  manageId: number;

  //@ts-ignore
  code: string;

  //@ts-ignore
  language: string;

  //@ts-ignore
  //   user: Prisma.UserCreateNestedOneWithoutCodeInput;
}

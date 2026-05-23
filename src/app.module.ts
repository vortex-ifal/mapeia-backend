import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './api/modules';
import { PrismaModule } from './infra/database/prisma';
import { validateEnv } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnv }),
    PrismaModule,
    UsersModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CitizensModule } from './api/modules';
import { PrismaModule } from './infra/database/prisma';
import { validateEnv } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnv }),
    PrismaModule,
    CitizensModule,
  ],
})
export class AppModule {}

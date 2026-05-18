import { Module } from '@nestjs/common';
import { UsersModule } from './api/modules';

@Module({
  imports: [UsersModule],
})
export class AppModule {}

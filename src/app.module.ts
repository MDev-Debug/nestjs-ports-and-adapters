import { Module } from '@nestjs/common';
import { UsersModule } from './presentation/controllers/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

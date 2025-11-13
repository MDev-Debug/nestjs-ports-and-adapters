import { Module } from '@nestjs/common';
import { UsersService } from '../../../application/services/users/users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService,
    {
      provide: 'UsersServiceInterface',
      useExisting: UsersService,
    }
  ],
})
export class UsersModule {}

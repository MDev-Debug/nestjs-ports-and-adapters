import { Module } from '@nestjs/common';
import { UsersService } from '../../../application/services/users/users.service';
import { UsersController } from './users.controller';
import { UserRepositoryDB } from 'src/infrastructure/adapters/repositories/database/data-access/user.repository.db';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from 'src/infrastructure/adapters/repositories/database/schemas/user.model';
import { TOKENS } from 'src/presentation/config/tokens.di';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'sqlServer@2025',
      database: 'master',
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        options: {
          encrypt: false,
          trustServerCertificate: true,
        },
      },
    }),
    SequelizeModule.forFeature([UserModel])
  ],
  controllers: [UsersController],
  providers: [
    UserRepositoryDB,
    {
      provide: TOKENS.USER_REPOSITORY,
      useClass: UserRepositoryDB,
    },
    UsersService,
    {
      provide: TOKENS.USER_SERVICE,
      useClass: UsersService,
    },
  ],
  exports: [TOKENS.USER_SERVICE, TOKENS.USER_REPOSITORY],
})
export class UsersModule { }
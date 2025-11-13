// infrastructure/context/database.context.ts
import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '../adapters/repositories/persistence/schemas/user.model';

export const DatabaseContext = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123',
  database: 'appdb',
  models: [UserModel],
});

import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class UserModel extends Model {
  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING, unique: true })
  email: string;
}

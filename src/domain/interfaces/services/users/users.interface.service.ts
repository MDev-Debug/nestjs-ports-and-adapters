import { CreateUserDto } from "src/application/users/dto/create-user.dto";
import { ResponseUserDto } from "src/application/users/dto/response-user.dto";

export interface UsersServiceInterface {
  create(createUserDto: CreateUserDto): Promise<CreateUserDto>;
  findAll(): Promise<ResponseUserDto[]>;
}

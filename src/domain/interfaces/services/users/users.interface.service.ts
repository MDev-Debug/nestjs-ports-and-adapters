import { CreateUserDto } from "src/application/users/dto/create-user.dto";
import { ResponseUserDto } from "src/application/users/dto/response-user.dto";
import { UpdateUserDto } from "src/application/users/dto/update-user.dto";

export interface UsersServiceInterface {

  create(createUserDto: CreateUserDto): Promise<CreateUserDto>;
  findAll(): Promise<ResponseUserDto[]>;
  findById(id: number): Promise<ResponseUserDto>;
  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateUserDto>;
  remove(id: number): Promise<void>;
}

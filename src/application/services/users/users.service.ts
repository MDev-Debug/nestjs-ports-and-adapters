import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/application/users/dto/create-user.dto';
import { ResponseUserDto } from 'src/application/users/dto/response-user.dto';
import { UpdateUserDto } from 'src/application/users/dto/update-user.dto';
import { UsersServiceInterface } from 'src/domain/interfaces/services/users/users.interface.service';

@Injectable()
export class UsersService implements UsersServiceInterface {

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<ResponseUserDto[]> {
    throw new Error('Method not implemented.');
  }
  async findById(id: number): Promise<ResponseUserDto> {
    const user = new ResponseUserDto();
    user.name = 'John Doe';
    return user;
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    throw new Error('Method not implemented.');
  }
  async remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

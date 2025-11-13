import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/application/users/dto/create-user.dto';
import { ResponseUserDto } from 'src/application/users/dto/response-user.dto';
import { UserEntity } from 'src/domain/entities/users/user.entity';
import { UserInterfaceRepository } from 'src/domain/interfaces/repositories/users/user.interface.repository';
import { UsersServiceInterface } from 'src/domain/interfaces/services/users/users.interface.service';
import { TOKENS } from 'src/presentation/config/tokens.di';

@Injectable()
export class UsersService implements UsersServiceInterface {

  constructor(
    @Inject(TOKENS.USER_REPOSITORY)
    private readonly userRepository: UserInterfaceRepository ) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    await this.userRepository.create(new UserEntity(createUserDto.name, createUserDto.email));
    return createUserDto;
  }

  async findAll(): Promise<ResponseUserDto[]> {
    const response = await this.userRepository.findAll();
    return response;
  }
}

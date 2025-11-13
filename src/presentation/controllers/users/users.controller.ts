import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateUserDto } from 'src/application/users/dto/create-user.dto';
import { UsersServiceInterface } from 'src/domain/interfaces/services/users/users.interface.service';
import { TOKENS } from 'src/presentation/config/tokens.di';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(TOKENS.USER_SERVICE)
    private readonly usersService: UsersServiceInterface
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }
}

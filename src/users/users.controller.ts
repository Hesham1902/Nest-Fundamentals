import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
// import { CustomValidationPipe } from './pipes/validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  find(): UserEntity[] {
    return this.usersService.findUsers();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): UserEntity {
    return this.usersService.findUserById(id);
  }

  @Post()
  create(
    @Body()
    createUserDTO: CreateUserDTO,
  ): UserEntity {
    return this.usersService.createUser(createUserDTO);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe)
    id: string,
    @Body()
    updateUserDTO: UpdateUserDTO,
  ): UserEntity {
    console.log(updateUserDTO);
    return this.usersService.updateUser(id, updateUserDTO);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseUUIDPipe) id: string) {
    this.usersService.deleteUser(id);
  }
}

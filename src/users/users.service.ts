import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { CreateUserDTO } from './dtos/create-user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private users: UserEntity[] = [];

  findUsers(): UserEntity[] {
    return this.users;
  }

  findUserById(id: string): UserEntity {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDTO: CreateUserDTO): UserEntity {
    const newUser: UserEntity = { ...createUserDTO, id: uuid() };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updateUserDTO: UpdateUserDTO): UserEntity {
    const index = this.users.findIndex((user) => user.id === id);

    this.users[index] = { ...this.users[index], ...updateUserDTO };

    return this.users[index];
  }

  deleteUser(id: string): void {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
  }
}

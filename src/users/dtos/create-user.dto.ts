import { Length, IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @Length(3, 20)
  // @Length(6, 20, { groups: ['update'], message: 'Incorrect Length' })
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  country: string;

  @IsNumber()
  age: number;
}

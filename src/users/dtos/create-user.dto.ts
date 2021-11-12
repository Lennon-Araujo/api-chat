import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Informe um email',
  })
  @IsEmail(
    {},
    {
      message: 'Informe um email válido',
    },
  )
  @MaxLength(200,{
    message: 'O email deve ter menos de 200 caracteres',
  })
  email: string;

  @IsNotEmpty({
    message: 'Informe um nome de usuário',
  })
  @MaxLength(200,{
    message: 'O nome deve ter menos de 200 caracteres',
  })
  name: string;

  @IsNotEmpty({
    message: 'Informe uma senha',
  })
  @MinLength(6,{
    message: 'A senha deve conter no mínimo 6 caracteres',
  })
  password: string;

  @IsNotEmpty({
    message: 'Informe a confirmação de senha',
  })
  @MinLength(6,{
    message: 'A confirmação de senha deve conter no mínimo 6 caracteres',
  })
  passwordConfirmation: string;
}
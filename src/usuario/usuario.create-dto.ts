import { IsDateString, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UsuarioCreateDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    @MinLength(3)
    nombre: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    @MinLength(3)
    apellido: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    correo: string;


    telefono?: string;

    // @IsDateString()
    fecha_nac?: string;

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(20)
    nick: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(50)
    contrasena: string;
}

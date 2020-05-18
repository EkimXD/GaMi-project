import {IsNotEmpty, MinLength} from "class-validator";

export class UsuarioLoginDto {

    @IsNotEmpty()
    usuario:string;

    @IsNotEmpty()
    @MinLength(6)
    contrasena:string;
}

import {IsNotEmpty, IsUppercase, MaxLength, MinLength} from "class-validator";

export class RolCreateDto {
    @IsNotEmpty()
    @MaxLength(2)
    @MinLength(2)
    @IsUppercase()
    rol:string;

    @MaxLength(200)
    descripcion:string;
}

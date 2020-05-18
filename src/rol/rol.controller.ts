import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Query, Session } from '@nestjs/common';
import {RolEntity} from "./rol.entity";
import {RolService} from "./rol.service";
import {RolCreateDto} from "./rol.create-dto";
import {DeleteResult} from "typeorm";


@Controller('rol')
export class RolController {

    constructor(
        private readonly _rolService:RolService,
    ) {}


    @Get('sayhey')
    sayName(){
        return 'rol'
    }

}

import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {RolEntity} from "./rol.entity";


@Injectable()
export class RolService {
    constructor(
        @InjectRepository(RolEntity)
        public _repositorioRol: Repository<RolEntity>
    ) {}

    encontrarUno(id: number): Promise<RolEntity | undefined> {
        return this._repositorioRol
            .findOne(id);
    }

    crearUno(usuario: RolEntity) {
        return this._repositorioRol
            .save(usuario);
    }

    borrarUno(id: number): Promise<DeleteResult> {
        return this._repositorioRol
            .delete(id);
    }

    actualizarUno(
        id: number,
        usuario: RolEntity
    ): Promise<RolEntity> {
        usuario.id = id;
        return this._repositorioRol
            .save(usuario); // UPSERT
    }

    buscar(
        where: any = {},
        skip: number = 0,
        take: number = 10,
        order: any = {
            id: 'DESC',
            nombre: 'ASC'
        }
    ): Promise<RolEntity[]> {
        return this._repositorioRol
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
            });
    }
}

import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private _repositorioRol: Repository<UsuarioEntity>
    ) {}

    encontrarUno(id: number): Promise<UsuarioEntity | undefined> {
        return this._repositorioRol
            .findOne(id);
    }

    encontrarRoles(id: number): Promise<UsuarioEntity | undefined> {
        return this._repositorioRol
            .findOne(id);
    }

    crearUno(usuario: UsuarioEntity) {
        return this._repositorioRol
            .save(usuario);
    }

    borrarUno(id: number): Promise<DeleteResult> {
        return this._repositorioRol
            .delete(id);
    }

    actualizarUno(
        id: number,
        usuario: UsuarioEntity
    ): Promise<UsuarioEntity> {
        usuario.id_usuario = id;
        return this._repositorioRol
            .save(usuario); // UPSERT
    }

    buscar(
        where: any = {},
        relations:any=[],
        skip: number = 0,
        take: number = 10,
        order: any = {
            id_usuario: 'DESC',
            nombre: 'ASC'
        }
    ): Promise<UsuarioEntity[]> {
        return this._repositorioRol
            .find({
                where: where,
                skip: skip,
                take: take,
                order: order,
                relations:relations
            });
    }
}

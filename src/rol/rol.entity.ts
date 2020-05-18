import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {type} from "os";
import {UsuarioEntity} from "../usuario/usuario.entity";


@Entity('rol')
export class RolEntity {
    @PrimaryGeneratedColumn({
        type:"int",
        unsigned:true,
        name:"id_rol",
        comment:"Identificador de la tabla"
    })
    id:number;

    @Column({
        nullable:false,
        type:'varchar',
        name: 'nombre_rol',
        comment: 'Nombre de la rol'
    })
    nombre:string;

    @Column({
        nullable:true,
        type:'varchar',
        name: 'descripcion_rol',
        comment: 'Descripcion de la tabla rol'
    })
    descripcion:string;

    @ManyToMany(
        type=>UsuarioEntity,
        usuario=>usuario.rol
    )
    usuario:UsuarioEntity[];

}

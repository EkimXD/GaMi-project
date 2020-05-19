import {Column, Entity, Index, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {RolEntity} from '../rol/rol.entity';

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id_usuario',
        comment: 'Identificador tabla usuario',
    })
    id_usuario: number;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'nombre_usuario',
        comment: 'Nombre en la tabla usuario',
    })
    nombre: string;

    @Column({
        type: 'varchar',
        nullable: false,
        name: 'apellido_usuario',
        comment: 'Apellido en la tabla usuario',
    })
    apellido: string;

    @Column({
        type: 'varchar',
        nullable: true,
        name: 'foto_usuario',
        comment: 'Apellido en la tabla usuario',
    })
    foto?: string;

    @Index({
        unique: true,
    })
    @Column({
        type: 'varchar',
        nullable: false,
        name: 'correo_usuario',
        comment: 'Correo en la tabla usuario',
    })
    correo: string;

    @Index({
        unique: true,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'nick_usuario',
        comment: 'nick en la tabla usuario',
    })
    nick: string;

    @Index({
        unique: false,
    })
    @Column({
        type: 'varchar',
        nullable: true,
        name: 'contrasenia_usuario',
        comment: 'contraseña en la tabla usuario',
    })
    contrasena: string;


    @ManyToMany(
        type => RolEntity,
        rol => rol.usuario,
    )
    @JoinTable()
    rol: RolEntity[];
}

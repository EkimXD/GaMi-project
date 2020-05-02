import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity ("user")
class UserEntity {
    @PrimaryGeneratedColumn(
        {
            type:'int',
            unsigned:true,
            name:'id_producto',
            comment:'identificador del producto'
        }
    )
    id:number;


}
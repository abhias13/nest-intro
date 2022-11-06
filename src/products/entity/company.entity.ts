import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({
    name:"Company"
})
export class Company {
    @PrimaryGeneratedColumn()
    id: number //always unique

    @Column()
    title: string;

    @Column()
    description: string;
    

    constructor(title:string, desc:string, id?:number){
        this.id = id;
        this.title = title;
        this.description = desc;
    }

    @OneToMany(()=> Product,(product)=>product.company)
    products : Product[];
}
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.entity";
import { Product } from "./product.entity";

@Entity({
    name:"Company"
})
export class Company {
    @PrimaryGeneratedColumn()
    id: number; //always unique

    @Column()
    title: string;

    @Column()
    description: string;
    
    @OneToMany(()=> Product,(product)=>product.company,{
        cascade: true
    })
    @JoinTable()
    products : Product[];
    
    @OneToMany(()=> Customer,(customer)=>customer.company,{
        cascade: true
    })
    @JoinTable()
    customers : Customer[];

    constructor(title:string, desc:string, id?:number){
        this.id = id;
        this.title = title;
        this.description = desc;
    }
}
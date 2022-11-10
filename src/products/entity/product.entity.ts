import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity({
    name:"Products"
})
export class Product{
    @PrimaryGeneratedColumn()
    id: number //always unique

    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column()
    price: number;

    constructor(title:string, desc:string, price:number,id?:number){
        this.id = id;
        this.title = title;
        this.description = desc;
        this.price = price;
    }

    @ManyToOne(()=>Company, (company)=> company.products)
    company : Company;
}
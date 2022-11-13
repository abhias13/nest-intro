import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity({
    name:"Products"
})
export class Product{
    @PrimaryGeneratedColumn()
    id: number; //always unique

    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column()
    price: number;

    
    @ManyToOne(()=>Company, (company)=> company.products)
    company : Company;
    
    constructor(title:string, desc:string, price:number,id?:number){
        this.id = id;
        this.title = title;
        this.description = desc;
        this.price = price;
    }
}
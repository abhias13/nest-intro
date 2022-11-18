import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity({
    name:"Customer"
})
export class Customer{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;
    
    @Column()
    address: string;

    
    @ManyToOne(()=>Company, (company)=> company.Customers)
    company : Company;
    
    constructor(name:string, age:number, address:string,id?:number){
        
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
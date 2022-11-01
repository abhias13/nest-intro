import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"Products"
})
export class Product {
    @PrimaryGeneratedColumn()
    id: number //always unique

    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column()
    Price: number;

    constructor(title:string, desc:string, price:number,id?:number){
        this.id = id;
        this.title = title;
        this.description = desc;
        this.Price = price;
    }
}
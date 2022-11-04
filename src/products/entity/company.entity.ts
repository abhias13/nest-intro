import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
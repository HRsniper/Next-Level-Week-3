import { IsNumber, IsString } from "class-validator";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";

import { Orphanage } from "./Orphanage";

@Entity("images")
export class Image {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    @IsString()
    path: string;

    @ManyToOne(() => Orphanage, (orphanage) => orphanage.images)
    @JoinColumn({ name: "orphanage_id" })
    @IsNumber()
    orphanage: Orphanage;
}

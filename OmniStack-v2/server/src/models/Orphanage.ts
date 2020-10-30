import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    Unique,
} from "typeorm";

import {
    ArrayMinSize,
    ArrayNotEmpty,
    IsArray,
    IsBoolean,
    IsLatitude,
    IsLongitude,
    IsString,
    Length,
    MaxLength,
    MinLength,
} from "class-validator";

import { Image } from "./Image";

@Entity("orphanages")
@Unique(["name"])
export class Orphanage {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    @IsString()
    @MinLength(5)
    @Length(5, 150)
    name: string;

    @Column()
    @IsLatitude()
    latitude: string;

    @Column()
    @IsLongitude()
    longitude: string;

    @Column()
    @IsString()
    @Length(5, 300)
    about: string;

    @Column()
    @IsString()
    @Length(5, 300)
    instructions: string;

    // @Column()
    // opening_hours: string;

    @Column()
    @IsString()
    @Length(5, 5)
    from: string;

    @Column()
    @IsString()
    @Length(5, 5)
    to: string;

    @Column()
    // @IsBoolean()
    @IsString()
    @Length(4, 5)
    open_on_weekends: boolean;

    @Column()
    // @IsBoolean()
    @IsString()
    @Length(4, 5)
    pending: boolean;

    @OneToMany(() => Image, (image) => image.orphanage, {
        cascade: ["insert", "update"],
    })
    @JoinColumn({ name: "orphanage_id" })
    @IsArray()
    @ArrayMinSize(1)
    images: Image[];
}

import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

import { IsEmail, IsString, Length, MinLength } from "class-validator";

@Entity("users")
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    @IsString()
    @Length(5, 100)
    name: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    @MinLength(5)
    // @MinLength(5,{message:'mais de 5'})
    password: string;
}

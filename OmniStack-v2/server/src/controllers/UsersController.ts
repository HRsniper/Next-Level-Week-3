import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../models/User";
import { UsersViews } from "../views/UsersViews";
import { Hash } from "../config/bcrypt";
import { validate } from "class-validator";

class UsersController {
    // export const usersController = {
    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const usersRepository = getRepository(User);

        const userValidation = usersRepository.create({
            name,
            email,
            password,
        });

        const errors = await validate(userValidation);

        if (errors.length === 0) {
            const passwordHash = await Hash(password);

            const data = {
                name,
                email,
                password: String(passwordHash),
            };

            // verificar se ja existe esse usuário
            const userExist = await usersRepository.findOne({
                where: { email },
            });

            if (userExist) {
                response.status(409).json({ error: "Email ja existente" });
            }

            const user = usersRepository.create(data);

            await usersRepository.save(user);

            return response.status(201).json(user);
        }
        return response.status(400).json(errors);
    }
    // },

    async index(request: Request, response: Response) {
        const usersRepository = getRepository(User);

        const users = await usersRepository.find();

        return response.status(200).json(UsersViews.renderMany(users));
    }
    // },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOneOrFail(id);

        return response.status(200).json(UsersViews.render(user));
    }
    // },
}

export const usersController = new UsersController();

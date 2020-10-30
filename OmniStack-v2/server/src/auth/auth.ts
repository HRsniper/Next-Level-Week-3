import { Request, Response } from "express";

import "dotenv/config";
import jwt from "jsonwebtoken";

import { compareHash } from "../config/bcrypt";
import { getRepository } from "typeorm";
import { User } from "../models/User";

const secret = String(process.env.JWT_SECRET);

class Auth {
    // export const Auth = {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async authenticate(request: Request, response: Response) {
        const { email, password } = request.body;

        if (!email) {
            return response.status(406).json({ erro: "Email obrigatório" });
        }
        if (!password) {
            return response.status(406).json({ erro: "Senha obrigatória" });
        }

        const authRepository = getRepository(User);
        const user = await authRepository.findOne({ where: { email } });

        if (!user) {
            return response
                .status(401)
                .json({ erro: "Esse usuário não existe" });
        }

        // se a senha inserida é igual ao hash da senha do banco de dados
        const isValidPassword = await compareHash(password, user.password);

        if (isValidPassword) {
            const payload = { sub: user.id };
            const token = jwt.sign(payload, secret, { expiresIn: "12h" });

            // retorna user e o token
            // delete user.password;
            // return response.status(200).json({ user, token });

            // A rota auth só retorna um token assinado se o nome de usuário e a senha estiverem corretos.
            return response.status(200).json({ token });
        } else {
            // Caso contrário, um erro é fornecido.
            response.status(401).json({ erro: "Senha incorreta" });
        }
        /*
    Assina e retorna o token exatamente como antes
    exceto que, desta vez, sub é o
    ID do usuário do banco de dados * real.
    */
    }

    async index(request: Request, response: Response) {
        return response.status(200).json({ user: request.headers.userID });
    }
}

export const auth = new Auth();

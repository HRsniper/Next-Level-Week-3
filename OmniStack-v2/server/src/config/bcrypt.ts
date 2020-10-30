// import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import bcrypt from "bcrypt";

const saltRounds = Number(process.env.SALT_ROUNDS);

async function genSalt(rounds: number) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(rounds, (error, salt) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(salt);
            }
        });
    });
}

export async function Hash(data: string) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const salt = await genSalt(saltRounds);
        bcrypt.hash(data, String(salt), (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
}

export async function compareHash(data: string, encrypted: string) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(data, encrypted, (error, same) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(same);
            }
        });
    });
}

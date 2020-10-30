import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Orphanage } from "../models/Orphanage";
import { OrphanagesViews } from "../views/OrphanagesViews";

class OrphanagesController {
    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            // opening_hours,
            from,
            to,
            open_on_weekends,
            pending,
        } = request.body;
        console.log(request.body);

        const orphanagesRepository = getRepository(Orphanage);

        const imagesRequest = request.files as Express.Multer.File[];

        const images = imagesRequest.map((image) => {
            return { path: image.filename };
        });

        const orphanageValidation = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            from,
            to,
            open_on_weekends,
            images,
            pending,
        });

        const errors = await validate(orphanageValidation);

        if (errors.length === 0) {
            const data = {
                name,
                latitude,
                longitude,
                about,
                instructions,
                // opening_hours,
                from,
                to,
                open_on_weekends: open_on_weekends == "true",
                pending: pending == "true",
                images,
            };

            // verificar se ja existe esse orfanato
            const orphanageExist = await orphanagesRepository.findOne({
                where: { name },
            });

            if (orphanageExist) {
                response.status(409).json({ error: "Orfanato ja existente" });
            }

            const orphanage = orphanagesRepository.create(data);

            await orphanagesRepository.save(orphanage);

            return response.status(201).json(orphanage);
        }

        return response.status(400).json(errors);
    }

    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations: ["images"],
        });

        // return response.status(200).json(orphanages);
        return response
            .status(200)
            .json(OrphanagesViews.renderMany(orphanages));
    }

    async pending(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanagesPending = await orphanagesRepository.find({
            relations: ["images"],
            where: { pending: true },
        });

        return response
            .status(200)
            .json(OrphanagesViews.renderMany(orphanagesPending));
    }

    async cadastre(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanagesCadastre = await orphanagesRepository.find({
            relations: ["images"],
            where: { pending: false },
        });

        return response
            .status(200)
            .json(OrphanagesViews.renderMany(orphanagesCadastre));
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ["images"],
        });

        // return response.status(200).json(orphanage);
        return response.status(200).json(OrphanagesViews.render(orphanage));
    }
}

export const orphanagesController = new OrphanagesController();

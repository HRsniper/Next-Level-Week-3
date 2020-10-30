import { Orphanage } from "../models/Orphanage";
import { ImagesViews } from "./ImagesViews";

export const OrphanagesViews = {
    render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            // opening_hours: orphanage.opening_hours,
            from: orphanage.from,
            to: orphanage.to,
            open_on_weekends: orphanage.open_on_weekends,
            pending: orphanage.pending,
            images: ImagesViews.renderMany(orphanage.images),
        };
    },

    renderMany(orphanages: Orphanage[]) {
        return orphanages.map((orphanage) => this.render(orphanage));
    },
};

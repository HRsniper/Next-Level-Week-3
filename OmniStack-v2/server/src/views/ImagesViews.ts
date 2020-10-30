import { Image } from "../models/Image";

export const ImagesViews = {
    render(image: Image) {
        return {
            id: image.id,
            url: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/uploads/${image.path}`,
            // url: `http://localhost:3333/uploads/${image.path}`,
        };
    },

    renderMany(images: Image[]) {
        return images.map((image) => this.render(image));
    },
};

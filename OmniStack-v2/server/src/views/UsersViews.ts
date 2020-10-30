import { User } from "../models/User";

export const UsersViews = {
    render(user: User) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            // tira password quando tiver implementado
            // password: user.password,
        };
    },

    renderMany(users: User[]) {
        return users.map((user) => this.render(user));
    },
};

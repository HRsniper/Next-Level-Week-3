import { useState, useEffect } from "react";

import { api } from "../../services/api";

export interface LoginProps {
    email: string;
    password: string;
}

export function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    useEffect(() => {
        const userStorage = localStorage.getItem("Auth:user");
        const tokenStorage = sessionStorage.getItem("Auth:token");

        if (tokenStorage) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(
                tokenStorage
            )}`;

            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function authLogin({ email, password }: LoginProps) {
        /* const response = await api.post("/auth", { email, password });
        console.log(response); */

        const {
            data: { token },
        } = await api.post("/auth", {
            email,
            password,
        });
        // console.log(token);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        /* const userR = await api.get("/auth");
        console.log(userR); */

        const {
            data: { user },
        } = await api.get("/auth");
        // console.log(user);

        sessionStorage.setItem("Auth:token", JSON.stringify(token));
        localStorage.setItem("Auth:user", JSON.stringify(String(user)));

        setAuthenticated(true);

        // history.push("/");
    }

    function authLogout() {
        setAuthenticated(false);

        api.defaults.headers.Authorization = undefined;

        sessionStorage.removeItem("Auth:token");
        localStorage.removeItem("Auth:user");
    }

    return { loading, authenticated, authLogin, authLogout };
}

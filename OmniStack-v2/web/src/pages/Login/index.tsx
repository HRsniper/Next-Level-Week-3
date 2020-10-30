import React, { FormEvent, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import logoVertical from "../../assets/images/logo-vertical.svg";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

import {
    CheckBoxContainer,
    CheckLostContainer,
    InputSeparator,
    LocationCity,
    PageLogin,
} from "./styles";

// import { useAuth } from "../../contexts/hooks/useAuth";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {

    const history = useHistory();

    // const { authLogin } = useAuth();
    const { authLogin } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        await authLogin({email,password});

        history.push("/dashboard");
    }

    return (
        <PageLogin>
            <aside>
                <img src={logoVertical} alt="😃 Happy" />

                <LocationCity>
                    <strong>Espigão D'Oeste</strong>
                    <span>Rondônia</span>
                </LocationCity>
            </aside>

            <main>
                <Link to="/">
                    <FiArrowLeft data-icon />
                </Link>
                <form onSubmit={handleSignIn}>
                    <fieldset>
                        <legend>Fazer Login</legend>

                        <InputSeparator>
                            <label htmlFor="email">Email</label>

                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </InputSeparator>

                        <InputSeparator>
                            <label htmlFor="password">Senha</label>

                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </InputSeparator>

                        <CheckLostContainer>
                            <CheckBoxContainer>
                                <label htmlFor="check">
                                    Lembrar-se
                                    <input type="checkbox" id="check" />
                                    <span></span>
                                </label>
                            </CheckBoxContainer>

                            <Link to="/lost-password" className="password">
                                Esqueci minha senha
                            </Link>
                        </CheckLostContainer>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        <FiCheck data-icon />
                        Login
                    </button>
                </form>
            </main>
        </PageLogin>
    );
};

import React from "react";

import { Link } from "react-router-dom";

import { ContentWrapper, LocationCity, PageLanding } from "./styles";

import logoImg from "../../assets/images/logo.svg";
import { FiArrowRight } from "react-icons/fi";

export const Landing = () => {
    return (
        <PageLanding>
            <ContentWrapper>
                <header>
                    <img src={logoImg} alt="😃 Happy" />

                    <LocationCity>
                        <strong>Espigão D'Oeste</strong>
                        <span>Rondônia</span>
                    </LocationCity>

                    <Link to="/login">Acesso Restrito</Link>
                </header>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <Link to="/app">
                    <FiArrowRight data-icon />
                </Link>
            </ContentWrapper>
        </PageLanding>
    );
};

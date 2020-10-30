import React from "react";
import { useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import mapMarkerImg from "../../assets/images/map-marker.svg";

import { AsideContainer } from "./styles";

export const SideBar = () => {
    const { goBack } = useHistory();
    return (
        <AsideContainer>
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft data-icon />
                </button>
            </footer>
        </AsideContainer>
    );
};

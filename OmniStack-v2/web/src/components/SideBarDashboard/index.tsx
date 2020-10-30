import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";

import { FiAlertCircle, FiMapPin, FiPower } from "react-icons/fi";
import mapMarkerImg from "../../assets/images/map-marker.svg";

import { AuthContext } from "../../contexts/AuthContext";

import { AsideContainer, CreatePendingSelection } from "./styles";

export const SideBarDashboard = () => {
    const { authLogout } = useContext(AuthContext);

    const [active, setActive] = useState(false);
    return (
        <AsideContainer>
            <img src={mapMarkerImg} alt="Happy" />

            <CreatePendingSelection>
                <a
                    href='#'
                    className={active ? "" : "active"}
                    onClick={() => {
                        active ? setActive(false) : setActive(true);
                    }}
                >
                    <FiMapPin data-icon />
                </a>

                <a
                    href="#"
                    className={active ? "active" : ""}
                    onClick={() => {
                        active ? setActive(false) : setActive(true);
                    }}
                >
                    <FiAlertCircle data-icon />
                </a>
            </CreatePendingSelection>

            <footer>
                <button type="button" onClick={authLogout}>
                    <FiPower data-icon />
                </button>
            </footer>
        </AsideContainer>
    );
};

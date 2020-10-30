import React from "react";

import { Container } from "./styles";

export const Loading = () => {
    return (
        <Container>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    );
};

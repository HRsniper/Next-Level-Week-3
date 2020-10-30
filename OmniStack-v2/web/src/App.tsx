import React from "react";

import "leaflet/dist/leaflet.css";
import { GlobalStyles } from "./assets/styles/GlobalStyles";

import { Routes } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

export function App() {
    return (
        // <>
            <AuthProvider>
                <GlobalStyles />
                <Routes />
            </AuthProvider>
        // </>
    );
}

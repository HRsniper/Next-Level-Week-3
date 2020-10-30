import React, { createContext, FunctionComponent } from "react";

import { LoginProps, useAuth } from "./hooks/useAuth";

interface AuthContextProps {
    authenticated: boolean;
    loading: boolean;
    authLogin({ email, password }: LoginProps): Promise<void>;
    authLogout(): void;
}

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
);

export const AuthProvider: FunctionComponent = ({ children }) => {
    const { loading, authenticated, authLogin, authLogout } = useAuth();

    // if loading

    return (
        <AuthContext.Provider
            value={{ loading, authenticated, authLogin, authLogout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

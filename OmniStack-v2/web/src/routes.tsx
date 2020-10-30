import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { OrphanagesMap } from "./pages/OrphanagesMap";
import { Orphanage } from "./pages/Orphanage";
import { CreateOrphanage } from "./pages/CreateOrphanage";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

import { Loading } from "./components/Loading";
import { AuthContext } from "./contexts/AuthContext";

export const Routes = () => {
    const { loading, authenticated } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }

    console.log("loading", loading);
    console.log("autenticado", authenticated);

    return authenticated ? (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/:id" component={Orphanage} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    ) : (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
                <Route path="/login" component={Login} />
                <Redirect to='/login' />
            </Switch>
        </BrowserRouter>
    );
};

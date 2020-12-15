import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import StartPage from "./pages/startPage/StartPage";
import Main from "./pages/mainPage/Main";

export const useRoutes = (isAuthenticated, nextLink) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path={['/', '/start']} component={StartPage} exact />
                <Route path={[
                    '/home',
                    '/lost',
                    '/found',
                    '/hotels',
                    '/fostering',
                    '/walking',
                    '/vethelp',
                    '/user/'
                ]} component={Main} />
                <Redirect to={'/home'} />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path={['/', '/start', '/login']} component={StartPage} exact />
            <Redirect to={'/'} />
        </Switch>
    )
}

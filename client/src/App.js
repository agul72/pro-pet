import React, {useCallback, useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {useRoutes} from "./routes";
import {loginUser} from "./redux/actions/UserActions";
import {changeNextLink} from "./redux/actions/LinkActions";
import {useHttp} from "./hooks/http.hook";
import {useAuth} from "./hooks/auth.hook";


function App(props) {

    const {request, loading} = useHttp();
    const auth = useAuth();
    // const location = useLocation();

    const getUserByToken = useCallback(async (token) => {
        const res = await request(
            'json',
            '/api/auth/token',
            'POST',
            {},
            {Authorization: `Bearer ${token}`}
        )
        console.log('getUSerByToken res:', res);
        auth.login(res.token, res.id)
        return res;
    }, []);

    useEffect(() => {
        // const data = JSON.parse(localStorage.getItem(storageName));
        console.log('APP, useEffect, data', auth.token)
        // if (data && data.token) {
        if (auth.token) {
            getUserByToken(auth.token)
                .then(res => props.loginUser(res))
                .catch(e => console.log('getUserByToken error', e.message));
        }
    }, [auth.token]);

    const routes = useRoutes(!!props.user.token,  '/home');

    return (
        <div className="App">
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.user,
        link: state.link
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loginUser: loginUser,
            changeNextLink: changeNextLink
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

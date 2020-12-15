import React from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import Welcome from "./Wellcome";
import Mission from "./Mission";
import Description from "./Description";
import ComingSoonBlock from "./ComingSoonBlock";
import StartPageFooter from "./StartPageFooter";
import Header from "../../components/Header";
import logo from '../../img/Logo_white.svg'
import AuthPage from "../authPage/AuthPage";
import {bindActionCreators} from "redux";
import {logoutUser} from "../../redux/actions/UserActions";
import {useAuth} from "../../hooks/auth.hook";

function StartPage(props) {

    console.log('StartPage, user', !!props.user.token);
    const auth = useAuth();

    function logout() {
        props.logoutUser();
        auth.logout();
    }

    let buttons = [
        {
            type: 'signInBtn',
            text: "Sign in",
            backgroundColor: 'transparent',
            onMouseHover: '#FFE18B',
            linkTo: '/login',
            nextLink: '/home'
        },
        {
            type: 'logout',
            text: "Logout",
            backgroundColor: 'transparent',
            onMouseHover: '#FFE18B',
            linkTo: '/start',
            nextLink: '/start',
            onClick: logout
        }
    ];
    return (
        <div>
            <Header backgroundColor={'#669885'}
                    logoUrl={logo}
                    // buttons={buttons}
                    buttons={!!props.user.token ? [buttons[1]] : [buttons[0]]}
            />
            <Welcome />
            <Mission />
            <Description />
            <ComingSoonBlock />
            <StartPageFooter />
            <Route path={'/login'} component={AuthPage} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            logoutUser: logoutUser,
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);

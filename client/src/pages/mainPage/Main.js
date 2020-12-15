import React from "react";
// import {bindActionCreators} from "redux";
import { Route } from "react-router-dom";
import {connect} from "react-redux";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Posts from "../postPages/Posts";
import HeaderContainer from "../../components/HeaderContainer";

import s from './main.module.css'

function Main(props) {
    // if (props.user.token) {
        return (
            <div>
                <HeaderContainer/>
                <div className={s.mainContainer}>
                    <NavBar/>
                    <Posts/>
                    <Route path={[
                        '/home',
                        '/lost/new',
                        '/found/new',
                        '/profile',
                        '/hotels',
                        '/walking',
                        '/fostering',
                        '/vethelp',
                        '/user/'
                    ]} component={SideBar}/>
                </div>
            </div>
        )
    // } else {
    //     console.log('Main -> redirect');
    //     return <Redirect to='/login/' nextLink={props.location.pathname}/>
    // }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        // auth: state.auth
    }
}

export default connect(mapStateToProps)(Main);

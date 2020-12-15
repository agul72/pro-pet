import React from "react";
import FacebookLogin from 'react-facebook-login';
import classNames from 'classnames'
import s from "./auth_page.module.css";
import Logo from "../../components/Logo";
import logo from "../../img/Logo_green.svg";
import {Link} from "react-router-dom";
import CloseIcon from "../../components/CloseIcon";

function AuthPageHeader() {

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <div>
            <div className={s.header}>
                <Logo width={'165px'} logoUrl={logo}/>
                <Link to={'/'}><CloseIcon/></Link>
            </div>
            <div className={s.signOrFacebook}>
                <div><span>Welcome!</span> Please sign in / sign up to continue or</div>
                <FacebookLogin
                    appId="432266047754213"
                    fields="name,email,picture"
                    callback={responseFacebook}
                    size={'small'}
                    cssClass={classNames(s.button, s.facebookBtn)}
                />
                {/*<FacebookAuth*/}
                {/*    appId="432266047754213"*/}
                {/*    callback={authenticate}*/}
                {/*    component={MyFacebookButton}*/}
                {/*    fields="name,email,picture"*/}
                {/*/>*/}
            </div>
        </div>
    )
}

export default AuthPageHeader;

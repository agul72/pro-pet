import React from "react";
import Logo from "./Logo";
import s from './header.module.css'
import Button from "./Button";
import {Link} from "react-router-dom";

function Header(props) {
    const style = {
        backgroundColor: props.backgroundColor,
    }
    return (
        <div className={s.container} style={style}>
            <Link to={'/home'} className={s.logo}>
                <Logo logoUrl={props.logoUrl} width={145}/>
            </Link>
            <div className={s.buttonsContainer}>
                {props.buttons.map((button, index) =>
                    <Link to={{pathname: button.linkTo, nextLink: button.nextLink}} key={index}>
                        <Button button={button} onClick={button.onClick}/>
                    </Link>)}
            </div>
        </div>
    )
}

export default Header;

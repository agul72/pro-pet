import React from "react";
import NavLinkItem from "../../components/NavLinkItem";
import {NavLink} from "react-router-dom";
import s from './navLinksBlock.module.css';

function NavLinksBlock() {

    const navLinkItems = [
        {text: 'Lost', linkTo: '/lost', color: 'white', isShow: true},
        {text: 'Hotels', linkTo: '/hotels', color: 'white', isShow: true},
        {text: 'Found', linkTo: '/found', color: 'white', isShow: true},
        {text: 'Walking', linkTo: '/walking', color: 'white', isShow: true},
        {text: 'VetHelp', linkTo: '/vethelp', color: 'white', isShow: true},
        {text: 'Fostering', linkTo: '/fostering', color: 'white', isShow: true},
    ];

    return (
        <div className={s.container}>
            {navLinkItems.map((item, index) =>
                <NavLink to={item.linkTo} className={s.navLink}>
                    <NavLinkItem key={index} item={item}/>
                </NavLink>)}
        </div>
    );
}

export default NavLinksBlock;

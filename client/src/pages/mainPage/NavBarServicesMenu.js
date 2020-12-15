import React from "react";

import NavLinkItem from "../../components/NavLinkItem";
import s from './nav_bar.module.css'

function NavBarServicesMenu() {

    const menuItems = [
        {text: 'Hotels', linkTo: '/hotels', color: 'white'},
        {text: 'Walking', linkTo: '/walking', color: 'white'},
        {text: 'Fostering', linkTo: '/fostering', color: 'white'},
        {text: 'VetHelp', linkTo: '/vethelp', color: 'white'},
    ];

    return (
        <div className={s.container}>
            {menuItems.map((item, index) =>
                <div className={s.item}
                     key={index}>
                    <NavLinkItem shot={false} item={item}/>

                </div>
            )}

        </div>
    )
}

export default NavBarServicesMenu;

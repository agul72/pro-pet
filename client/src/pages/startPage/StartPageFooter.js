import React from "react";
import Logo from "../../components/Logo";
import Address from "../../components/Address";
import NavLinksBlock from "./NavLinksBlock";
import s from './start_page_footer.module.css'
import logo from '../../img/Logo_white.svg'

function StartPageFooter() {
    return (
        <div className={s.greenFooter}>
            <div className={s.logo}>
                <Logo width={'200px'} logoUrl={logo}/>
            </div>
            <Address />
            <NavLinksBlock />

        </div>
    )
}

export default StartPageFooter;

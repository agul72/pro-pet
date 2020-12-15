import React from "react";
import s from './nav_link_item.module.css'
import {
    faBullhorn, faDog,
    faHome,
    faHotel,
    faPaw,
    faSearch,
    faSignOutAlt,
    faStar, faStethoscope,
    faWalking
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function NavLinkItem(props) {

    const getIcon = (type) => {
        switch (type) {
            case 'home':
                return faHome;
            case 'lost':
                return faSearch;
            case 'found':
                return faPaw;
            case 'services':
                return faBullhorn;
            case 'favorites':
                return faStar;
            case 'logout':
                return faSignOutAlt;
            case 'hotels':
                return faHotel;
            case 'walking':
                return faWalking;
            case 'vethelp':
                return faStethoscope;
            case 'fostering':
                return faDog;
            default:
                return null;
        }
    }

    if (props.item.isShow || props.isShowSubMenu) {
        return (
            <div className={s.container}>
                <div className={s.icon}>
                    <FontAwesomeIcon icon={getIcon(props.item.text.toLowerCase())} />
                </div>
                {!props.shot ? props.item.text : null}
            </div>
        )
    } else {
        return null;
    }

}

export default NavLinkItem;

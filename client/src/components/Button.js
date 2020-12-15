import React from "react";
import s from './Button.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSave, faPaw, faPlus, faSearch

} from "@fortawesome/free-solid-svg-icons";

function Button(props) {

    const getImage = (type) => {
        switch (type) {
            case 'saveBtn':
                return <FontAwesomeIcon className={s.icon} icon={faSave} />;
            case 'submitBtn':
            case 'addNewFoundPostBtn':
                return <FontAwesomeIcon className={s.icon} icon={faPaw} />;
            case 'addNewPostBtn':
                return <FontAwesomeIcon className={s.icon} icon={faPlus} />;
            case 'addNewLostPostBtn':
                return <FontAwesomeIcon className={s.icon} icon={faSearch} />;

            default:
                return null;
        }
    }

    return (
        <div>
            <button
                className={s[props.button.type]}
                onClick={props.onClick}
            >
                {getImage(props.button.type)}
                <div className={s.btnTitle}>{props.button.text}</div>
            </button>
        </div>
    )
}

export default Button;

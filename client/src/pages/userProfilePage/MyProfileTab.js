import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import UserNameItem from "../../components/UserNameItem";
import Avatar from "../../components/Avatar";
import FormItem from "../authPage/FormItem";
import s from "./myProfileTab.module.css"
import {faPen} from "@fortawesome/free-solid-svg-icons";


function MyProfileTab(props) {

    const inputFile = useRef(null);
    const [isUserNameImmutable, setIsUserNameImmutable] = useState(true);

    const onAvatarClickHandler = () => {
        inputFile.current.click();
    };

    const penClickHandler = () => {
        setIsUserNameImmutable(false);
    }

    console.log('MyProfileTab, user', props.user)

    return (
        <div className={s.formContainer}>
            <div className={s.user}>
                <div
                    className={s.avatar}
                    onClick={onAvatarClickHandler}
                    title={'Change avatar'}
                >
                    <input
                        type='file'
                        id='avatar'
                        name={'avatar'}
                        ref={inputFile}
                        accept={'image/*'}
                        style={{display: 'none'}}
                        onChange={props.onChangeAvatar}
                    />
                    <Avatar userAvatar={props.user.avatar}/>
                </div>

                <div>
                    <input
                        className={s.userNameItem}
                        value={props.user.name}
                        name={'name'}
                        type='text'
                        readOnly={isUserNameImmutable}
                        onChange={props.onChangeTextField}
                        // onKeyPress={pressHandler}
                    />
                </div>
                <div className={s.icon}>
                    <FontAwesomeIcon
                        icon={faPen}
                        size={'lg'}
                        onClick={penClickHandler}
                    />
                </div>
            </div>


            <div className={s.contacts}>
                <FormItem label={'Email:'}
                          type={'email'}
                          name={'email'}
                          value={props.user.email}
                          onChange={props.onChangeTextField}
                />
                <FormItem label={'Phone:'}
                          type={'text'}
                          name={'phone'}
                          value={props.user.phone}
                          onChange={props.onChangeTextField}
                />
                <FormItem label={'Facebook:'}
                          type={'text'}
                          name={'facebook'}
                          value={props.user.facebook}
                          onChange={props.onChangeTextField}
                />
            </div>
        </div>
    );
}

export default MyProfileTab;

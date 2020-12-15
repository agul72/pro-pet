import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {useHistory, useLocation} from 'react-router-dom';

import UserProfileTabs from "./UserProfileTabs";
import UserProfileFooter from "./UserProfileFooter";
import {loginUser} from "../../redux/actions/UserActions";
import {useHttp} from "../../hooks/http.hook";
import {useAuth} from "../../hooks/auth.hook";
// import {usePhotoUploader} from "../../hooks/photoUploader.hook";

import s from './userProfile.module.css';
import Toast from "light-toast";

function UserProfile(props) {

    const [activeTab, setActiveTab] = useState(0);
    const [user, setUser] = useState(props.user);
    const location = useLocation();
    const nextLink = location.nextLink || '/home';
    const [newAvatar, setNewAvatar] = useState(null);

    const history = useHistory();
    const {request, loading} = useHttp();
    const auth = useAuth();

    useEffect(() => {
        if (loading) {
            Toast.loading('Loading...');
        }
        return Toast.hide();
    }, [loading]);


    function changeTextFieldsHanger(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    function changeAvatarHandler(e) {
        const file = e.target.files[0];
        setNewAvatar(Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        const fileUrl =  URL.createObjectURL(file);
        setUser({
            ...user,
            avatar: fileUrl
        })
    }

    function changeUserData(key, value) {
        setUser({
            ...user,
            [key]: value
        })
    }

    function tabsBtnClickHandler(newActiveTab) {
        setActiveTab(newActiveTab);
    }

    async function fetchUser(url) {
        console.log('fetchUserUpdate 1, user:', user);

        console.log('Sending data to server started...');
        await request('json', url, 'PUT', user);
        console.log('Sending data to server finished...');

        props.loginUser(user);
        auth.login(user.token);
        history.push(nextLink);
    }

    const fetchUserUpdate = async () => {
        if (newAvatar) {
            console.log('Changing avatar started...');
            try {
                console.log('Uploading to Cloudinary...');
                const image = await request(
                    'photo',
                    'https://api.cloudinary.com/v1_1/agul72/image/upload',
                    'POST',
                    newAvatar);
                await changeUserData('avatar', image.secure_url);
                console.log('Uploading to Cloudinary finished.');
            } catch (e) {
                console.log('handleClick, editUser', e.message)
            }

        }
        await fetchUser(`/api/user/update/`);
    }

    const saveBtnClickHandler = () => {
        switch (activeTab) {
            case 0:
                return fetchUserUpdate();
            case 1:
                return;
            default:
                return;
        }
    }

    return (
        <div className={s.container}>
            <div className={s.postTitle}>Your profile. Change, edit and manage your data.</div>
            <div className={s.postContainer}>
                <UserProfileTabs
                    onChangeTextField={changeTextFieldsHanger}
                    onChangeAvatar={changeAvatarHandler}
                    onTabBtnClick={tabsBtnClickHandler}
                    activeTab={activeTab}
                    user={user}
                />
            </div>
            <UserProfileFooter
                saveBtnClickHandler = {saveBtnClickHandler}
                nextLink={nextLink}
            />
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
            loginUser,
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


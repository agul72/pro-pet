import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { useHistory } from 'react-router-dom'


import AuthPageTabs from "./AuthPageTabs";
import AuthPageFooter from "./AuthPageFooter";
import AuthPageHeader from "./AuthPageHeader";

import {loginUser} from "../../redux/actions/UserActions";
import {useHttp} from "../../hooks/http.hook";
import {useAuth} from "../../hooks/auth.hook";

import s from './auth_page.module.css'

function AuthPage(props) {

    const [activeTab, setActiveTab] = useState(0);
    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: { },
            isValid: false
        });
    const {request, loading} = useHttp();
    const auth = useAuth();
    const history = useHistory();

    const nextLink = props.location.nextLink? props.location.nextLink: '/home';

    useEffect(() => {
        console.log('AuthPage, Use effect')
        if (props.user.token) {
            history.push(nextLink);
            // return <Redirect to={props.nextLink} />
        }
    },[props.user.token])

    const inputChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function setError(key, value) {
        setForm({
            ...form,
            formErrors: {
                ...form.formErrors,
                [key]: value
            },
        })
    }

    const tabsBtnClickHandler = (newActiveTab) => {
        setActiveTab(newActiveTab);
    }

    const submitBtnClickHandler = async () => {
        let url;
        switch (activeTab) {
            case 0:
                url = '/api/auth/register';
                if (form.password !== form.confirmPassword) {
                    setError('confirmPassword', 'Passwords not match')
                }
                break;
            case 1:
                url = '/api/auth/login';
                break;
            default:
                url = '/api/auth/login';
        }

        try {
            const data = await request('json', url, 'POST', form);
            await props.loginUser(data);
            await auth.login(data.token);
        } catch (e) {
            console.log('handleClick:', e.message)
        }
    }

    return (
        <div>
            <div className={s.background} />

            <div className={s.form}>
                <AuthPageHeader/>
                <AuthPageTabs
                    onChange={inputChangeHandler}
                    onTabBtnClick={tabsBtnClickHandler}
                    activeTab={activeTab}
                    form={form}
                />
                <AuthPageFooter
                    onClick={submitBtnClickHandler}
                />
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loginUser: loginUser,
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);

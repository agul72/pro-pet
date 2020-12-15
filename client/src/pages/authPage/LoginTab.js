import React from "react";
import FormItem from "./FormItem";
import {Link} from "react-router-dom";
import s from './signingPageTabs.module.css'

function LoginTab(props) {

    return (
        <div className={s.container}>
            <FormItem label={'Email:'} type={'email'}
                      name={'email'}
                      value={props.form.email}
                      onChange={props.onChange}
                      errorMessage={props.form.formErrors.email}
                      required={true}
            />
            <FormItem label={'Password:'} type={'password'}
                      name={'password'}
                      value={props.form.password}
                      onChange={props.onChange}
                      errorMessage={props.form.formErrors.password}
                      required={true}
            />
            <Link to={'/forgot'}>Forgot password?</Link>
        </div>
    )
}

export default LoginTab;

import React from "react";
import FormItem from "./FormItem";
import s from './signingPageTabs.module.css'

function RegisterTab(props) {

    return (
        <div className={s.container}>
            <FormItem label={'Name:'} type={'text'}
                      name={'name'}
                      value={props.form.name}
                      onChange={props.onChange}
                      errorMessage={props.form.formErrors.name}
                      required={true}
            />
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
            <FormItem label={'Password:'} type={'password'}
                      name={'confirmPassword'}
                      value={props.form.confirmPassword}
                      onChange={props.onChange}
                      errorMessage={props.form.formErrors.confirmPassword}
                      required={true}
            />
        </div>
    );
}

export default RegisterTab;

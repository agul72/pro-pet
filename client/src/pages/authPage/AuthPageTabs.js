import React from "react";
import s from "./signingPageTabs.module.css";
import classNames from "classnames";
import RegisterTab from "./RegisterTab";
import LoginTab from "./LoginTab";

function AuthPageTabs(props) {

    const activeTab = props.activeTab;
    return (
        <div>
            <div className={s.formTabsContainer}>
                <div className={classNames(s.button, s.signBtn, activeTab === 0 && s.activeSignBtn)}
                     onClick={() => props.onTabBtnClick(0)}>
                    Sign up
                </div>
                <div className={classNames(s.button, s.signBtn, activeTab === 1 && s.activeSignBtn)}
                     onClick={() => props.onTabBtnClick(1)}>
                    Sign in
                </div>
            </div>
            <div className={s.formContainer}>
                <div className={s.formData}>
                    {activeTab === 0 && <RegisterTab form={props.form}
                                                     onChange={props.onChange}/>}
                    {activeTab === 1 && <LoginTab form={props.form}
                                                   onChange={props.onChange}/>}
                </div>
            </div>
        </div>
    );
}

export default AuthPageTabs;

import React from "react";
import s from "./userProfileTabs.module.css";
import classNames from "classnames";
import MyProfileTab from "./MyProfileTab";
import ActivitiesTab from "./ActivitiesTab";

function UserProfileTabs(props) {
    const activeTab = props.activeTab;

    return (
        <div>
            <div className={s.formTabsContainer}>
                <div className={classNames(s.button, s.signBtn, activeTab === 0 && s.activeSignBtn)}
                     onClick={() => props.onTabBtnClick(0)}>
                    My profile
                </div>
                <div className={classNames(s.button, s.signBtn, activeTab === 1 && s.activeSignBtn)}
                     onClick={() => props.onTabBtnClick(1)}>
                    Activities
                </div>
            </div>
            <div className={s.formContainer}>
                <div className={s.formData}>
                    {activeTab === 0 &&
                    <MyProfileTab
                        user={props.user}
                        onChangeTextField={props.onChangeTextField}
                        onChangeAvatar={props.onChangeAvatar}
                    />}
                    {activeTab === 1 && <ActivitiesTab user={props.user}/>}
                </div>
            </div>
        </div>
    )

}

export default UserProfileTabs;

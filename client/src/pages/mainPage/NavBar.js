import React, {useState} from "react";
import {useLocation} from 'react-router-dom';

import NavLinkItem from "../../components/NavLinkItem";
import s from './nav_bar.module.css'
import Avatar from "../../components/Avatar";
import UserNameItem from "../../components/UserNameItem";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logoutUser} from "../../redux/actions/UserActions";
import {useAuth} from "../../hooks/auth.hook";

function NavBar(props) {

    const location = useLocation();
    const auth = useAuth();

    const [isShowSubMenu, setIsShowSubMenu] = useState(false);

    const onClickHandler = (isShowSubMenu1) => {
        if (isShowSubMenu !== isShowSubMenu1) {
            setIsShowSubMenu(isShowSubMenu1)
        }
    }

    const getActiveType = (isShow) => {
        return isShow ? 'activeMain' : 'activeSub';
    }

    const menuItems = [
        {text: 'Home', linkTo: '/home', isShow: true, isShowSubMenu: false},
        {text: 'Lost', linkTo: '/lost', isShow: true, isShowSubMenu: false},
        {text: 'Found', linkTo: '/found', isShow: true, isShowSubMenu: false},
        {text: 'Services', linkTo: '/hotels', isShow: true, isShowSubMenu: true},
        {text: 'Hotels', linkTo: '/hotels', isShow: false, isShowSubMenu: true},
        {text: 'Walking', linkTo: '/walking', isShow: false, isShowSubMenu: true},
        {text: 'Fostering', linkTo: '/fostering', isShow: false, isShowSubMenu: true},
        {text: 'VetHelp', linkTo: '/vethelp', isShow: false, isShowSubMenu: true},
        {text: 'Favorites', linkTo: '/favorites', isShow: true, isShowSubMenu: false},
    ];


    return (
        <div className={s.container}>
            {menuItems.map((item, index) =>
                <NavLink to={item.linkTo} className={s.item}
                         style={{textDecoration: 'none'}}
                         activeClassName={s[getActiveType(item.isShow)]}
                         onClick={() => onClickHandler(item.isShowSubMenu)}
                         key={index}>
                    {/*<div></div>*/}
                    <NavLinkItem shot={false} item={item}
                                 isShowSubMenu={isShowSubMenu}
                    />
                </NavLink>
            )}
            <div className={s.userContainer}>
                <div className={s.mb50}>
                    <NavLink
                        to={{
                            pathname: '/user/',
                            nextLink: location.pathname
                        }}
                        className={s.item}
                        style={{textDecoration: 'none'}}
                        activeClassName={s[getActiveType(true)]}
                    >

                        <div className={s.userItem}>
                            <div>
                                <Avatar userAvatar={props.user.avatar
                                    ? props.user.avatar
                                    : null}/>
                            </div>
                            <UserNameItem type={'forNavBar'}
                                          userName={props.user.name}
                            />
                        </div>
                    </NavLink>
                </div>

                <NavLink to={'/start'} className={s.item}
                         style={{textDecoration: 'none'}}
                         onClick={() => {
                             props.logout();
                             auth.logout();
                         }}
                >
                    <NavLinkItem shot={false} item={
                        {text: 'Logout', linkTo: '/', isShow: true}}/>
                </NavLink>
            </div>
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
            logout: logoutUser
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

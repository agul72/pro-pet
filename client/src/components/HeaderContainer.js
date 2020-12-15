import React from "react";
import s from "../pages/mainPage/main.module.css";
import {Route} from "react-router-dom";
import Header from "./Header";
import greenLogo from "../img/Logo_green.svg";

const getHeader = (path) => {
    return (
        <Header backgroundColor={'white'} logoUrl={greenLogo}
                buttons={[
                    {
                        type: 'addNewPostBtn',
                        text: 'Add new',
                        linkTo: path + '/new',
                        nextLink: path + '/new'
                    }
                ]}
        />
    )
}

function HeaderContainer() {
    return (
        <div className={s.header}>
            <Route path={'/home'} exact
                   render={(path) => getHeader('/home')}
            />
            <Route path={'/hotels'} exact
                   render={() => getHeader('hotels')}
            />
            <Route path={'/walking'} exact
                   render={() => getHeader('/walking')}
            />
            <Route path={'/fostering'} exact
                   render={() => getHeader('/fostering')}
            />
            <Route path={'/vethelp'} exact
                   render={(path) => getHeader('/vethelp')}
            />
            <Route path={['/lost', '/found']} exact render={() =>
                <Header backgroundColor={'white'} logoUrl={greenLogo} buttons={[
                    {
                        type: 'addNewLostPostBtn',
                        text: 'I lost my pet',
                        linkTo: '/lost/new',
                        nextLink: '/lost/new'
                    },
                    {
                        type: 'addNewFoundPostBtn',
                        text: 'I found a pet',
                        linkTo: '/found/new',
                        nextLink: '/found/new'
                    },
                ]}/>}/>
            <Route path={[
                '/home/new',
                '/lost/new',
                '/found/new',
                '/hotels/new',
                '/walking/new',
                '/fostering/new',
                '/vethelp/new',
                '/user/'
            ]} render={() =>
                <Header backgroundColor={'white'} logoUrl={greenLogo}
                        buttons={[]}/>}/>
            <Route path={'/404'} render={() =>
                <Header backgroundColor={'white'} logoUrl={greenLogo}
                        buttons={[
                            {
                                type: 'ReturnToHome',
                                text: 'Return to home page',
                                linkTo: '/home',
                                nextLink: '/home'
                            }
                        ]}
                />
            }/>
        </div>
    )
}

export default HeaderContainer;

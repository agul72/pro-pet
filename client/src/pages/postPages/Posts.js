import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Route, useLocation} from "react-router-dom";
import Toast from 'light-toast';

import OrdinaryPostItem from "./OrdinaryPostItem";
import LostFoundPostItem from "./LostFoundPostItem";
import NotFound from "../../components/NotFound";
import NewOrdinaryPost from "./NewOrdinaryPost";
import NewLostFoundPost from "./NewLostFoundPost";
import ListEmptyPage from "../../components/ListEmptyPage";
import Filters from "./Filters";

import UserProfile from "../userProfilePage/UserProfile";

import s from "./posts.module.css";
// import Loader from "../../components/Loader";
import {useHttp} from "../../hooks/http.hook";
import {addNotification, removeNotification, updatePosts} from "../../redux/actions/PostActions";
import GoogleMap from "../../components/GoogleMap";


function Posts(props) {

    const {request, loading} = useHttp();
    const location = useLocation();

    const fetchPosts = useCallback(async (typePost) => {
        try {
            const posts = await request('json', `/api/post/${typePost}`, 'GET');
            props.updatePosts(typePost, posts);
        } catch (e) {
            return 'Fetch error: ' + e.message;
        }

        return 'fetchPosts finished';
    }, [location.pathname, request, props.updatePosts]);

    useEffect(() => {
        console.log('eventListener');
        // if (!listening) {
        const events = new EventSource('/api/post/subscribe');
        // events.onmessage = (event) => {
        //     console.log('onmessage listener')
        //     const parsedData = JSON.parse(event.data);
        //     console.log("parsedData", parsedData)
        // };

        events.addEventListener('newPostAdded', e => {
            console.log('newPostAdded listener')
            try {
                console.log(e.data);
                //ToDo parse data and addNotification(typePost);
                Toast.info('New post added ');
            } catch (e) {
                console.log('error parsing server response', e)
            }

        })
        return events.close();
        // }
        // setListening(true);
    }, []);

    useEffect(() => {
        if (loading) {
            Toast.loading('Loading...');
        }
        return Toast.hide();
    }, [loading]);


    useEffect(() => {
        console.log('Post, Use effect', location.pathname);
        const path = location.pathname.split('/');
        if ((path.length < 3) && (path[1] !== 'user')) {
            const typePost = path[1];
            if (props.posts[typePost].isEmitted) {
                fetchPosts(typePost)
                    .then(res => console.log(res));
            }
        }
    }, [location.pathname, fetchPosts, props.posts]);

    const getOrdinaryPosts = (postsArray) => {
        if (postsArray && postsArray.length) {
            return (postsArray.map((post, index) =>
                <OrdinaryPostItem post={post} key={index}/>))
        } else {
            return <ListEmptyPage/>
        }
    }

    const getLostFoundPosts = (postsArray) => {
        if (postsArray && postsArray.length) {
            return (postsArray.map((post, index) =>
                <LostFoundPostItem post={post} key={index}/>))
        } else {
            return <ListEmptyPage/>
        }
    }

    return (
        <div className={s.container}>
            {/*{loading && <Loader message={'Updating posts'}/>}*/}
            <Route path={['/lost', '/found']} exact component={Filters}/>
            <div className={s.posts}>
                <div >
                    <Route path={'/home'} exact render={() =>
                        getOrdinaryPosts(props.posts.home.posts)
                    } />
                    <Route path={'/hotels'} exact render={() =>
                        getOrdinaryPosts(props.posts.hotels.posts)
                    }/>
                    <Route path={'/walking'} exact render={() =>
                        getOrdinaryPosts(props.posts.walking.posts)
                    }/>
                    <Route path={'/fostering'} exact render={() =>
                        getOrdinaryPosts(props.posts.fostering.posts)
                    }/>
                    <Route path={'/vethelp'} exact render={() =>
                        getOrdinaryPosts(props.posts.vethelp.posts)
                    }/>
                    <Route path={[
                        '/home/new',
                        '/hotels/new',
                        '/walking/new',
                        '/fostering/new',
                        '/vethelp/new'
                    ]} exact render={() =>
                        <NewOrdinaryPost user={props.user}/>
                    }/>
                    <Route path={'/user/'} render={() =>
                        <UserProfile user={props.user}/>
                    }/>
                    <Route path={'/lost'} exact render={() =>
                        getLostFoundPosts(props.posts.lost.posts)
                    }/>
                    <Route path={'/found'} exact render={() =>
                        getLostFoundPosts(props.posts.found.posts)
                    }/>
                    <Route path={['/found/new', '/lost/new']} component={NewLostFoundPost}/>
                    <Route path={'/404'} component={NotFound}/></div>
                <div className={s.mapContainer}>
                    <Route path={['/lost', '/found']} exact component={GoogleMap}/>
                </div>

            </div>


        </div>
    )
}

function mapStateToProps(state) {
    return {
        posts: state.post,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            updatePosts: updatePosts,
            removeNotification: removeNotification,
            addNotification: addNotification
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

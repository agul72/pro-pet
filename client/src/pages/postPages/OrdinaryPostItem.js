import React from "react";
import s from './ordinaryPostItem.module.css'
import Avatar from "../../components/Avatar";
import Time from "../../components/Time";
import UserNameItem from "../../components/UserNameItem";
import Menu from "../../components/Menu";
import FavorIcon from "./FavorIcon";
import PostItem from "./PostItem";

function OrdinaryPostItem(props) {

    return (
        <div className={s.containerItem}>
            <div className={s.avatar}>
                <Avatar userAvatar={props.post.userAvatar}/>
            </div>
            <div className={s.name}>
                <UserNameItem userName={props.post.userName}
                              type='forPost'
                />
                <Time
                    time={props.post.time
                        .toLocaleString()
                        .replace('T', ' ')
                        .slice(0,16)
                    }
                />
            </div>
            <div>
                <Menu/>
            </div>
            <div className={s.post}>
                {(props.post.photos) && props.post.photos.map((photo, index) =>
                    <PostItem key={index} postItem={{type: 'image', content: photo}}/>
                )}
                <PostItem postItem={{type: 'text', content: props.post.postText}}/>
            </div>
            <div className={s.favor}>
                <FavorIcon favor={true}/>
            </div>
        </div>

    )
}

export default OrdinaryPostItem;

import React from "react";
import s from './post_item.module.css'

function PostItem(props) {

    switch (props.postItem.type) {
        case 'text':
            return (
                <div className={s.container}>
                    {props.postItem.content}
                </div>
            );
        case 'image':
            const style = {
                maxWidth: '100%',
                maxHeight: '100px',
                margin: '0 auto'
            }
            return (
                <div className={s.container} >
                    <img src={props.postItem.content}
                         alt={props.postItem.content}
                         style={style}
                    />
                </div>
            )
        default:
            return null;
    }

}

export default PostItem;

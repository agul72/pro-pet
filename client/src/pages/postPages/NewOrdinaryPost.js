import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";

import {useHttp} from '../../hooks/http.hook'
import AddPhotoToPost from "./AddPhotoToPost";
import Avatar from "../../components/Avatar";
import UserNameItem from "../../components/UserNameItem";
import Button from "../../components/Button";

import s from './newOrdinaryPost.module.css'
// import Loader from "../../components/Loader";
import Toast from "light-toast";

function NewOrdinaryPost(props) {

    const [postText, setPostText] = useState('');
    const [photos, setPhotos] = useState([]);
    // const [photoLoading, setPhotoLoading] = useState(false);
    const {request, loading} = useHttp();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (loading) {
            Toast.loading('Loading...');
        }
        return Toast.hide();
    }, [loading]);

    const publishBtnClickHandler = async () => {
        const post = {
            userId: props.user.id,
            userName: props.user.name,
            userAvatar: props.user.avatar,
            postText: postText,
            photos: []
        };

        console.log('Loading photo started...')
        // setPhotoLoading(true);

        await Promise.all(
        photos.map( async photo => {
            const data = new FormData();
            data.append('file', photo);
            data.append('upload_preset', 'propet_posts');
            await fetch(
                'https://api.cloudinary.com/v1_1/agul72/image/upload',
                {
                    method: 'POST',
                    body: data
                }
            )
                .then(res => res.json())
                .then(image => post.photos.push(image.secure_url));
        }))

        console.log('Loading photo finished.')
        // setPhotoLoading(false);

        console.log('Put data to DB... ')
        const category = location.pathname.split('/')[1];
        const res = await request(`/api/post/${category}`, 'PUT', post);
        console.log(res.message);
        history.push(`/${category}`);
    }

    const onChangeCommentsHandler = (e) => {
        setPostText(e.target.value);
    }

    const addPhotoHandler = (newPhotos) => {
        setPhotos(
            [...photos, ...newPhotos.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))]
        );
    };

    const removePhotoHandler = (indx) => {
        setPhotos(photos.filter((photo, index) => index !== indx))
    }

    return (
        <div className={s.container}>
            {/*{(loading || photoLoading) && <Loader message={photoLoading? 'Loading photos': 'Loading data'}/>}*/}
            <div className={s.postTitle}>Your new post! Simply text, add photos and publish.</div>
            <div className={s.postContainer}>
                <div>
                    <div className={s.label}>Text:</div>
                    <div className={s.labelComments}>up to 1500 char</div>
                </div>
                <div className={s.textareaContainer}>
                    <textarea
                        className={s.textarea}
                        rows={20}
                        value={postText}
                        onChange={onChangeCommentsHandler}
                    />
                </div>
                <div>
                    <div className={s.label}>Photos:</div>
                    <div className={s.labelComments}>up to 1500 char</div>
                </div>
                <AddPhotoToPost
                    onAddPhoto={addPhotoHandler}
                    onRemovePhoto={removePhotoHandler}
                    photos={photos}
                />
                <div className={s.postFooter}>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            <Avatar userAvatar={props.user.avatar}/>
                        </div>
                        <div>
                            <UserNameItem userName={props.user.name}
                                          type='forPost'
                            />
                        </div>
                    </div>

                    <div
                        onClick={publishBtnClickHandler}
                    >
                        <Button style={{textDecoration: 'none'}}
                                button={
                                    {
                                        type: 'submitBtn',
                                        text: 'Publish',
                                    }
                                }
                        />
                    </div>
                </div>
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
        {},
        dispatch
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrdinaryPost);


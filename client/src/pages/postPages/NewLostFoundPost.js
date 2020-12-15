import React, {useState} from "react";
import {Route, useHistory, useLocation} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


import Avatar from "../../components/Avatar";
import UserNameItem from "../../components/UserNameItem";
import Button from "../../components/Button";
import AddPhotoToPost from "./AddPhotoToPost";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader";

import s from './new_lost_found_post.module.css'
// import AutoComplete from 'react-google-autocomplete';

function NewLostFoundPost(props) {

    const [post, setPost] = useState({
        animalKind: '',
        animalSex: '',
        animalBreed: '',
        animalColor: '',
        animalHeight: '',
        animalFeatures: '',
        description: '',
        location: '',
        phone: props.user.phone,
        email: props.user.email,
        facebook: props.user.facebook,
        userId: props.user.userId,
        userName: props.user.name,
        userAvatar: props.user.avatar,
        photos: []
    });
    const [photos, setPhotos] = useState([]);
    const {request, loading} = useHttp();
    const location = useLocation();
    const history = useHistory();

    const publishBtnClickHandler = async () => {

        console.log('Loading photo started...')

        await Promise.all(
            photos.map(async photo => {
                const image = await request(
                    'photo',
                    'https://api.cloudinary.com/v1_1/agul72/image/upload',
                    'POST',
                    photo);
                post.photos.push(image.secure_url);
            })
        );

        console.log('Loading photo finished.')

        console.log('Put data to DB from ', location.pathname)
        const category = location.pathname.split('/')[1];
        const res = await request(`/api/post/${category}`, 'PUT', post);
        console.log(res.message);
        history.push(`/${category}`);
    }

    const onChangeHandler = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
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
            {(loading) && <Loader />}
            <div className={s.postTitle}>
                <Route path={'/lost'}>
                    Lost your buddy? Keep calm and complete the form.
                </Route>
                <Route path={'/found'}>
                    Found a pet? Please complete the form to help.
                </Route>
            </div>
            <div className={s.postContainer}>
                <div className={s.postGridContainer}>
                    <div className={s.postLeftSide}>
                        <div className={s.label}>Type:</div>
                        <div>
                            <select
                                className={s.select}
                                name={'animalKind'}
                                value={post.animalKind}
                                onChange={onChangeHandler}
                            >
                                <option>Dog</option>
                                <option>Cat</option>
                                <option>Beard</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className={s.label}>Sex:</div>
                        <div>
                            <select
                                className={s.select}
                                name={'animalSex'}
                                value={post.animalSex}
                                onChange={onChangeHandler}
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Unknown</option>
                            </select>
                        </div>
                        <div className={s.label}>Breed:</div>
                        <div>
                            <input
                                type={'text'}
                                className={s.input}
                                name={'animalBreed'}
                                value={post.animalBreed}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={s.label}>Color:</div>
                        <div>
                            <input
                                type={'text'}
                                className={s.input}
                                name={'animalColor'}
                                value={post.animalColor}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={s.label}>Height:</div>
                        <div>
                            <input
                                type={'number'}
                                className={s.input}
                                name={'animalHeight'}
                                value={post.animalHeight}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <div className={s.label}>Distinctive features:</div>
                            <div className={s.labelComments}>up to 60 char</div>
                        </div>
                        <div>
                            <textarea
                                className={s.textarea}
                                rows={2}
                                name={'animalFeatures'}
                                value={post.animalFeatures}
                                onChange={onChangeHandler}
                            />
                        </div>

                    </div>
                    <div className={s.postRightSide}>
                        <div className={s.dogHeight}>
                            <img src="/img/dog-height.svg" alt=""/>
                        </div>
                    </div>
                </div>

                <div className={s.postLeftSide}>
                    <div>
                        <div className={s.label}>Description:</div>
                        <div className={s.labelComments}>up to 150 char</div>
                    </div>
                    <div>
                        <textarea
                            className={s.textarea}
                            rows={10}
                            name={'description'}
                            value={post.description}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div>
                        <div className={s.label}>Location:</div>
                    </div>
                    <div>
                        <input
                            type={'text'}
                            className={s.input}
                            name={'location'}
                            value={post.location}
                            onChange={onChangeHandler}
                        />
                        <div>
                            {/*<AutoComplete*/}
                            {/*    apiKey={'AIzaSyB08Z2947_Sw3aql0Jrh30P3d4uVYH2GoE'}*/}
                            {/*    style={{width: '90%'}}*/}
                            {/*    onPlaceSelected={(place) => {*/}
                            {/*        console.log(place);*/}
                            {/*    }}*/}
                            {/*    types={['(regions)']}*/}
                            {/*    componentRestrictions={{country: "ru"}}*/}
                            {/*/>*/}
                        </div>
                    </div>

                    <div className={s.label}>Contacts:</div>
                    <div className={s.contacts}>
                        <input
                            type={'text'}
                            placeholder={'Phone*'}
                            required
                            className={s.input}
                            name={'phone'}
                            value={post.phone}
                            onChange={onChangeHandler}
                        />
                        <input
                            type={'text'}
                            placeholder={'E-mail'}
                            className={s.input}
                            name={'email'}
                            value={post.email}
                            onChange={onChangeHandler}
                        />
                        <input
                            type={'text'}
                            placeholder={'Facebook profile'}
                            className={s.input}
                            name={'facebook'}
                            value={post.facebook}
                            onChange={onChangeHandler}
                        />
                    </div>

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

                    <Button onClick={publishBtnClickHandler}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewLostFoundPost);







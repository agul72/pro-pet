import React from "react";
import s from './lost_found_post_item.module.css'
import UserNameItem from "../../components/UserNameItem";
import Avatar from "../../components/Avatar";
import Time from "../../components/Time";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare,} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'

function LostFoundPostItem(props) {
    return (
        <div className={s.containerItem}>
            <div>
                <div className={s.imageContainer}>
                    <img
                        className={s.image}
                        src={props.post.photos ? props.post.photos[0] : '/img/No-Image-Available'}
                        alt='No available images'
                    />
                </div>
            </div>

            <div>
                <div className={s.mainCaption}>Kind: {props.post.animalKind}, Breed: {props.post.animalBreed}</div>
                <div className={s.table}>
                    <div>
                        <div><span className={s.label}>Color:</span> {props.post.animalColor}</div>
                        <div><span className={s.label}>Sex:</span> {props.post.animalSex}</div>
                        <div><span className={s.label}>Height:</span> {props.post.animalHeight}</div>
                    </div>
                    <div>
                        <span className={s.label}>Distinctive features:</span> {props.post.animalFeatures}
                    </div>
                </div>
                <div>
                    <span className={s.label}>Description:</span> {props.post.description}
                </div>
                <div className={s.location}>
                    {props.post.location}

                </div>

                <div className={s.postFooter}>
                    <div className={s.userContainer}>
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
                                    .slice(0, 16)}
                            />
                        </div>
                    </div>

                    <div className={s.contactsItems}>
                        <FontAwesomeIcon icon={faFacebookSquare} size={'lg'} color={'gray'}/>
                        <FontAwesomeIcon icon={faEnvelopeSquare} size={'lg'} color={'gray'}/>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} size={'lg'} color={'gray'}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LostFoundPostItem;

import React from 'react';
import Dropzone from 'react-dropzone';
import Button from "../../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faUpload} from '@fortawesome/free-solid-svg-icons';

import s from './AddPhotoToPost.module.css'


function AddPhotoToPost(props) {

    const files = props.photos;
    const onDrop = props.onAddPhoto;

    const thumbs = files.map(file => (
        <div key={file.name} className={s.thumbInner}>
            <img
                src={file.preview}
                className={s.img}
                alt=""
            />
        </div>
    ));

    const filesList = files.map((file, index) => (
        <div key={index} className={s.fileListItem}>
            <div className={s.fileName}>{file.name}</div>
            <FontAwesomeIcon
                icon={faTimes}
                onClick={() => props.onRemovePhoto(index)}
            />
        </div>
    ));

    return (
        <div className={s.addPhotoBlockContainer}>

            <Dropzone
                accept='image/*'
                noClick={true}
                noKeyboard={true}
                onDrop={onDrop}
            >
                {({getRootProps, getInputProps, open}) => (
                    <section className="container">
                        <div {...getRootProps({className: s.dropzone})}>
                            <input {...getInputProps()} />
                            <div className={s.photos}>
                                <div className={s.bigPhoto}>{thumbs[0]}</div>
                                <div>
                                    <div className={s.smallPhoto}>{thumbs[1]}</div>
                                    <div className={s.smallPhoto}>{thumbs[2]}</div>
                                    <div className={s.smallPhoto}>{thumbs[3]}</div>
                                </div>
                            </div>

                            <div className={s.browseArea}>
                                <div><FontAwesomeIcon icon={faUpload} size={'lg'} color={'#84B6A3'}/></div>
                                <div>Drag 'n' drop photo or</div>
                                <div onClick={open}>
                                    <Button button={
                                        {
                                            type: 'cancelBtn',
                                            text: 'Browse',
                                        }
                                    }
                                    />
                                </div>
                            </div>

                            <div className={s.listPhoto}>
                                {filesList}
                            </div>
                        </div>
                    </section>
                )}
            </Dropzone>


        </div>
    );
}

export default AddPhotoToPost;

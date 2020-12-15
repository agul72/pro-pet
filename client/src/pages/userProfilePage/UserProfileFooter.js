import React from "react";
import s from "./userProfileFooter.module.css";
import {Link} from "react-router-dom";
import Button from "../../components/Button";


function UserProfileFooter(props) {

    return (
        <div className={s.submitBtnContainer}>
            <Link to={props.nextLink}
                  style={{textDecoration: 'none'}}
            >
                <Button
                    button={
                        {
                            type: 'cancelBtn',
                            text: 'Cancel',
                        }
                    }
                />
            </Link>

            <Button
                onClick={props.saveBtnClickHandler}
                button={
                    {
                        type: 'saveBtn',
                        text: 'Save changes',
                    }
                }
            />
        </div>
    )
}

export default UserProfileFooter;

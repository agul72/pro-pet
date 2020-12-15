import React from "react";
import s from "./auth_page.module.css";
import Button from "../../components/Button";
import {Link} from "react-router-dom";

function AuthPageFooter(props) {

    return (
        <div className={s.footer}>
            <div className={s.singleText}>
                <div>
                    By clicking “Submit”, you agree to us processing<br/>
                    your information in accordance with&nbsp;
                    <Link to={''}>these terms.</Link>
                </div>
            </div>
            <div className={s.submitBtnContainer}>
                <Link
                    to={'/'}
                    style={{textDecoration: 'none'}}>

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
                    onClick={props.onClick}
                    button={
                        {
                            type: 'submitBtn',
                            text: 'Submit',
                        }
                    }
                />
            </div>
        </div>
    )
}

export default AuthPageFooter;


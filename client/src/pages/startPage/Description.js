import React from "react";
import s from './description.module.css';

function Description() {
    return (
        <div className={s.container}>
            <div className={s.image}></div>
            <div className={s.list}>
                <h3>Here is collected everything that your pet needs:</h3>
                <ul>
                    <li>professional veterinarian tips;</li>
                    <li>useful information about education and care;</li>
                    <li>fostering home search;</li>
                    <li>information about pet-sitting and walking service;</li>
                    <li>and of course, great communication with new friends in your social network!</li>
                </ul>
            </div>

        </div>
    )
}

export default Description;

import React from "react";
import s from './filter.module.css'

class Filters extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={s.container}>

                <input className={s.inputItem} type="text" placeholder={'Type'}/>
                <input className={s.inputItem} type="text" placeholder={'Breed'}/>
                <input className={s.inputItem} type="text" placeholder={'Additional features'}/>
                <input className={s.inputItem} type="text" placeholder={'Location'}/>

            </div>
        );
    }
}

export default Filters;

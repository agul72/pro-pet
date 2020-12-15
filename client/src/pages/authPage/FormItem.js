import React from "react";
import s from './form_items.module.css'

function FormItem(props) {
    return (
        <div className={s.itemContainer}>
                <label className={s.label}>{ props.label }</label>
                <input className={s.input}
                       type={props.type}
                       name={props.name}
                       value={props.value}
                       onChange={props.onChange}
                       required={props.required}
                />
                <div className={s.error}>
                    {props.errorMessage}
                </div>
        </div>
    )
}

export default FormItem;

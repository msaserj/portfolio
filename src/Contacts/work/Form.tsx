import React from 'react';
import css from './Form.module.css'



export const Form = () => {

    return (
        <div className={css.formBlock}>
            <form className={css.form} onSubmit={e=>e}>
                <input className={css.input} type="text" value={'Name'} />
                <input className={css.input} type="email" value={'email'} />
                <textarea className={css.textArea} value={'your message'} onChange={e=>e}>Your message</textarea>
                <button className={css.button}>Submit</button>
            </form>
        </div>
    );
};

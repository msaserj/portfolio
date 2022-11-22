import React from 'react';
import css from './Contacts.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'
import {Form} from "./work/Form";
import {Title} from "../Common/components/title/Title";

export const Contacts = () => {
    return (
        <div id="contacts" className={css.contactsBlock}>
            <div className={`${styleContainer.container} ${css.contactsContainer}`}>
                <Title title={"CONTACTS"}/>
                {/*<h1 className={css.title}>Contacts</h1>*/}
                <div className={css.contacts}>
                    <Form />
                </div>
            </div>
        </div>
    );
};



import React from 'react';
import css from './Contacts.module.scss'
import styleContainer from '../00-Common/styles/Container.module.scss'
import {Form} from "./work/Form";
import {Title} from "../00-Common/components/title/Title";

export const Contacts = () => {
    return (
        <div id="contacts" className={css.contactsBlock}>
            <div className={`${styleContainer.container} ${css.contactsContainer}`}>
                <Title description={"contacts"} title={"Contact With Me"}/>
                {/*<h1 className={css.title}>08-Contacts</h1>*/}
                <div className={css.contacts}>
                    <Form />
                </div>
            </div>
        </div>
    );
};



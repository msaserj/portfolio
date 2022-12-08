import React, {useState} from 'react';
import css from './Forma.module.scss'

import {useFormik} from 'formik';
import axios from "axios";
import {Button} from "../../00-Common/components/Button/Button";


type FormikErrorType = {
    name?: string
    email?: string
    subj?: string
    message?: string
}

export const Forma = () => {
    const [response, setResponse] = useState<string>("")
    const resetResponse = () => {
        setTimeout(() => {
            setResponse("")
        }, 5000)
    }

    const sendHandler = async (name: string, email: string, subj: string, message: string) => {
        await axios.post("http://localhost:3010/sendmessage",
            {
                name, email, subj, message
            }).then(res => {
            setResponse(res.data);
            resetResponse()
        })
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subj: "",
            message: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'required';
            } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'invalid email address';
            }
            if (!values.name) {
                errors.name = 'required'
            } else if (values.name.trim().length < 3) {
                errors.name = "min 3 symbols"
            }

            if (!values.name) {
                errors.subj = 'required'
            } else if (values.subj.trim().length < 3) {
                errors.subj = "min 3 symbols"
            }

            if (!values.name) {
                errors.message = 'required'
            } else if (values.message.trim().length < 10) {
                errors.message = "min 10 symbols"
            }

            return errors;
        },
        onSubmit: values => {
            sendHandler(values.name, values.email, values.subj, values.message).then()
            formik.resetForm();
            formik.setTouched({});
            formik.setErrors({name: undefined, email: undefined, subj: undefined, message: undefined});

        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={css.form}>
            <input
                autoComplete="off"
                id="standard-basic"
                type="text" {...formik.getFieldProps('name')}
                className={css.input}
                placeholder={"name"}/>
            <div className={css.errorBlock}>
                <span className={css.span}>{formik.errors.name && formik.touched.name ? formik.errors.name : ''}</span>
            </div>

            <input
                autoComplete="off"
                id="standard-basic"
                type="email" {...formik.getFieldProps('email')}
                className={css.input}
                placeholder={"email"}/>
            <span>{formik.errors.email && formik.touched.email ? formik.errors.email : ''}</span>
            <input
                autoComplete="off"
                id="standard-basic"
                type="text" {...formik.getFieldProps('subj')}
                className={css.input}
                placeholder={"subject"}/>
            <span>{formik.errors.subj && formik.touched.subj ? formik.errors.subj : ''}</span>
            <textarea
                id="standard-basic"
                {...formik.getFieldProps('message')}
                className={css.textArea}
                placeholder={"message"}/>
            <span>{formik.errors.message && formik.touched.message ? formik.errors.message : ''}</span>
            <Button type={'submit'} className={css.button}
                    disabled={!(formik.isValid && formik.dirty)}>{response ?
                <strong style={{color: "red"}}>{response}</strong> : "Send message"}</Button>

        </form>
    );
};

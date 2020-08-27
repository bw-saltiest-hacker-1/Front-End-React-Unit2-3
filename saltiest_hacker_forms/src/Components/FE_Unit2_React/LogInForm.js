import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import Form from './Form'

const initialForm = {
    username: '',
    password: '',
}

const initialFormErrors = {
    username: '',
    password: '',
}

const initialDisabled = true

const formSchema = yup.object().shape({
    username: yup
        .string()
        .required("Must include username"),
    password: yup
        .string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is required")
})

export default function LogInForm(props) {
    const { userInfo, setUserInfo } = props
    const [form, setForm] = useState(initialForm)
    const [formError, setFormError] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const history = useHistory()

    const handleChange = (e) => {
        e.persist()
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setFormError({
                    ...formError, [e.target.name]: ""
                })
            })

            .catch(err => {
                setFormError({
                    ...formError, [e.target.name]: err.errors[0]
                })
            })

        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // <<<<<< BACKEND_LOGIN_API >>>>>>
        axios.post("https://salty-hacker-1-bw.herokuapp.com/api/auth/login", form)
            .then((res) => {
                console.log(res);
                setUserInfo(res.data, ...userInfo)
                setForm(initialForm);
                localStorage.setItem('token', res.data.token)
                history.push("/")
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        formSchema.isValid(form)
            .then(valid => setDisabled(!valid))
    }, [form])
    console.log(userInfo)

    return (
        <div className="login">
            <Form
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formError={formError}
                disabled={disabled}
            />
        </div>
    )
}
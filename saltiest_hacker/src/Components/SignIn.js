import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import Forms from './Forms'

const FormStyling = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;
`

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
        .required("A username must be entered."),
    password: yup
        .string()
        .min(4, "Passwords must be at least 4 characters long.")
        .required("Password is required")
})

export default function SignIn(props) {
    const { userInfo, setUserInfo } = props
    const [form, setForm] = useState(initialForm)
    const [formError, setFormError] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const history = useHistory()

    const handleChange = (event) => {
        event.persist()
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {
                setFormError({
                    ...formError, [event.target.name]: ""
                })
            })

            .catch(err => {
                setFormError({
                    ...formError, [event.target.name]: err.errors[0]
                })
            })

        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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
        <FormStyling>
            <div className="signin-div">
            <Forms
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formError={formError}
                disabled={disabled}
            />
        </div>
        </FormStyling>
    )
}
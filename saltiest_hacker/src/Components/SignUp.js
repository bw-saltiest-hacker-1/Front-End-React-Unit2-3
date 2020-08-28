import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { customColor1, customColor2, customColor3, customColor5, customColor6 } from "../Styling/ColorPool";
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'

const MainStyling = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;
`

const NavStyling = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;
.LeftH2{
color: ${customColor5};
:hover{
color: ${customColor3};
border-bottom: 3px solid ${customColor1};
}
}
.RightH2{
color: ${customColor5};
:hover{
color: ${customColor3};
border-bottom: 3px solid ${customColor1};
}
}
`

const FormStyling = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
color: ${customColor6};
background-color: ${customColor2};
padding: 1%;
border-top: 3px solid ${customColor3};
button{
color: ${customColor6};
background-color: ${customColor3};
height: 2rem;
width: 5rem;
border-radius: 10px;
}
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
        .required("Password is required"),
})

export default function SignUp(props) {
    const { userInfo, setUserInfo } = props
    const [form, setForm] = useState(initialForm)
    const [formError, setFormError] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const history = useHistory()
    const SignInRedirect = () => history.push("/SignIn");

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
        event.preventDefault()
        // <<<<<< BACKEND_REGISTER_API >>>>>>
        axios.post('https://salty-hacker-1-bw.herokuapp.com/api/auth/register', form)
            .then(res => {
                console.log(res)
                setUserInfo(res.data, ...userInfo)
                setForm(initialForm)
                localStorage.setItem('token', res.data.token)
                history.push("/")
            })
            .catch((err => {
                console.log(err)
            }))
    }

    useEffect(() => {
        formSchema.isValid(form)
            .then(valid => setDisabled(!valid))
    }, [form])


    return (
        <MainStyling>
        <form className="OffForm" onSubmit={handleSubmit}>
            <NavStyling>
                <div className="form-header" onSubmit={handleSubmit}>
                    <h2 className="LeftH2" right onClick={SignInRedirect}>
                        Sign In
            </h2>
                </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                    <h2 className="RightH2">
                        Sign Up
            </h2>
                </div>
            </NavStyling>
            <FormStyling>
            <div className='signup-div'>
                <h2>Create an account with us!</h2>
                <h3>Sign Up to prevent saltiness now!</h3>
                <div className='InputValues'>
                    <label>
                        Username
                        <input
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            value={form.username}
                            onChange={handleChange}
                        />
                    </label>
                    {formError.username && <p>{formError.username}</p>}
                    <br /><label>
                        Password
                        <input
                            type='password'
                            name='password'
                            placeholder='Enter password'
                            value={form.password}
                            onChange={handleChange}
                        />
                    </label>
                        {formError.password && <p>{formError.password}</p>}
                    <br />
                    <br />
                        <center><button disabled={disabled} type='submit'>Sign Up</button></center>
                    <br />
                </div>
            </div>
            </FormStyling>
        </form>
        </MainStyling>
        
    )
}
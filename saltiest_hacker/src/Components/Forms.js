import React from 'react'
import styled from 'styled-components'
import { customColor1, customColor2, customColor3, customColor4, customColor5, customColor6 } from "../Styling/ColorPool";
import { useHistory } from 'react-router-dom'

const NavStyling = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
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
background-color: ${customColor4};
padding: 1%;
border-top: 3px solid ${customColor2};
button{
color: ${customColor6};
background-color: ${customColor2};
height: 2rem;
width: 5rem;
border-radius: 10px;
}
`
export default function Forms(props) {
    const { form, handleChange, handleSubmit, formError, disabled } = props
    const history = useHistory()
    const SignUpRedirect = () => history.push("/SignUp");

    return (
        <form className="MainForm" onSubmit={handleSubmit}>
            <NavStyling>
                <div className="form-header" onSubmit={handleSubmit}>
                    <h2 className="LeftH2">
                        Sign In
            </h2>
                </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                    <h2 className="RightH2" right onClick={SignUpRedirect}>
                        Sign Up
            </h2>
                </div>
            </NavStyling>
            <FormStyling>
                <div className='signin-div'>
                    <h2>Welcome back to the Saltiest Hacker!</h2>
                    <h3>Sign In to prevent saltiness now!</h3>
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
                        <center><button disabled={disabled} type='submit'>Sign In</button></center>
                        <br />
                    </div>
                </div>
            </FormStyling>
        </form>
    )
}
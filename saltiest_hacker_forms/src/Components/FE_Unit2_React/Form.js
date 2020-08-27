import React from 'react'
import { useHistory } from 'react-router-dom'
import { LogInStyle, LogInHeader, H3one, H3two, Container, Containerh3, Containerp, InputField, Label, Input, Button, Error } from './LogInStyle'

export default function Form(props) {
    const { form, handleChange, handleSubmit, formError, disabled } = props
    const history = useHistory()

    const routeToSignup = () => {
        history.push('/SignUp')
    }

    return (
        <LogInStyle className="login-form" onSubmit={handleSubmit}>
            <LogInHeader className='log-in-header'>
                <H3one>Sign In</H3one>
                <H3two onClick={routeToSignup}>Sign Up</H3two>
            </LogInHeader>

            <Container className='container'>
                <Containerh3>Welcome back to the Saltiest Hacker!</Containerh3>
                <Containerp>Start preventing saltiness now!</Containerp>
                <InputField className='input-fields'>
                    <Label>
                        Username
                    <Input
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            value={form.username}
                            onChange={handleChange}
                        />
                    </Label>
                    {formError.username && <p>{formError.username}</p>}
                    <Label>
                        Password
                    <Input
                            type='password'
                            name='password'
                            placeholder='Enter password'
                            value={form.password}
                            onChange={handleChange}
                        />
                    </Label>
                    {formError.password && <Error>{formError.password}</Error>}
                    <Button disabled={disabled} type='submit'>Log In</Button>
                </InputField>
            </Container>
        </LogInStyle>
    )
}
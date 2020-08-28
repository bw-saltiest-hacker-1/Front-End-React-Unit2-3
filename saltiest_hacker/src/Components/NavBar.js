import React from "react";
import styled from "styled-components";
import { customColor1, customColor3, customColor6 } from "../Styling/ColorPool";
import logo from "../logo.jpg";
import "../App.css";
import { useHistory } from "react-router-dom";

const NavStyling = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
.SaltiestLogo{
height: 14vh;
width: auto;
padding: 25%;
}
`
const NavButtons = styled.div`
.LeftButton{
color: ${customColor6};
background-color: ${customColor1};
height: 3rem;
width: 6rem;
border-radius: 10px;
margin: 0 -20%;
}
.RightButton{
color: ${customColor6};
background-color: ${customColor3};
height: 3rem;
width: 6rem;
border-radius: 10px;
margin: 0 20%;
}
`

export function NavBar() {
    const history = useHistory();
    const SignInRedirect = () => history.push("/SignIn");
    const SignUpRedirect = () => history.push("/SignUp");
    const HomeRedirect = () => history.push("/");

    return (
        <NavStyling>
            <div>
            <img src={logo} className="SaltiestLogo" alt="logo" right onClick={HomeRedirect}/>
            </div>
            <NavButtons>
            <div>
                <span>
            <button className="LeftButton" right onClick={SignInRedirect}>
                Sign In
            </button>
                </span>
                &nbsp;&nbsp;
                <span>
            <button className="RightButton" right onClick={SignUpRedirect}>
                Sign Up
            </button>
                </span>
            </div>
            </NavButtons>
        </NavStyling>
    );
}
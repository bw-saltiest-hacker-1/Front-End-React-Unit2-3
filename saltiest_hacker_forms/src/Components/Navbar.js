import React from "react";
import styled from "styled-components";
import { customColor1 } from "../Styles/colors";
import { customColor3 } from "../Styles/colors";
import { customColor5 } from "../Styles/colors";
import logo from "../logo.jpg";
import "../App.css";
import { useHistory } from "react-router-dom";

const NavbarStyled = styled.div`
  background-color: white;
  position: relative;
  width: 100vw;
  height: 96px;
  left: 0px;
  top: 5px;
`;

export const SignUpButton = styled.div`
  color: white;
  width: 94px;
  height: 36px;
  border-radius: 4px;
  text-align: center;
  background-color: ${customColor1};
  position: absolute;
  left: 82.78%;
  right: 10.69%;
  top: 33.33%;
  bottom: 29.17%;
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  justify-content: center;
`;

export const SignInButton = styled.div`
  color: ${customColor5};
  width: 94px;
  height: 36px;
  border-radius: 4px;
  text-align: center;
  background-color: ${customColor3};
  position: absolute;
  top: 33.33%;
  bottom: 29.17%;
  left: 74.58%;
  right: 18.89%;
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  justify-content: center;
`;

export function Navbar() {
    const history = useHistory();
    const navigateToSignIn = () => history.push("/SignIn");
    const navigateToSignUp = () => history.push("/SignUp");

    return (
        <NavbarStyled>
            <img src={logo} className="Saltiest-logo" alt="logo" />
            <SignInButton right onClick={navigateToSignIn}>
                Sign In
      </SignInButton>
            <SignUpButton right onClick={navigateToSignUp}>
                Sign Up
      </SignUpButton>
        </NavbarStyled>
    );
}
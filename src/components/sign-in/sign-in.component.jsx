import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase-util';

// import './sign-in.styles.scss';
import {SignInContainer, ButtonsContainer, Title} from './sign-in.styles'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})

        }catch(error){
            console.log(error);
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return (
            <SignInContainer>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput type="email" name="email" value={this.state.email} label="email" handleChange={this.handleChange} required/>

                    <FormInput type="password" name="password" value={this.state.password} label="password" handleChange={this.handleChange} required/>

                    <ButtonsContainer>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}


export default SignIn;
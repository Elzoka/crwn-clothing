import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase-util';

// import './sign-up.styles.scss';
import {SignUpContainer, Title} from './sign-up.styled';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert('passwords do not match')
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.error(error);
        }

    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <Title>I do not have an account</Title>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton type="submit">Sign Up</CustomButton>

                </form>
            </SignUpContainer>
        );
    }
}

export default SignUp;
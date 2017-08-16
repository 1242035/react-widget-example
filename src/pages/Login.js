import React from 'react';
import { Component } from 'react';
import { AppContainer } from '../containers/App';
import SignInForm from '../components/SignInForm';

export class Login extends Component {
  render() {
    return (
    	<AppContainer>
            <SignInForm/>
    	</AppContainer>
    );
  }
}

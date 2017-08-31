import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as sessionActions from '../actions/sessionActions';
//import Input from './Input';
import SignInForm from '../form/signin';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                email: '',
                password: ''
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(values) {
        const { user } = this.state;
        const { login } = this.props.actions;
        login(values);
    }

    onChange(e) {
        const { value, name } = e.target;
        const { user } = this.state;
        user[name] = value;
        this.setState({ user });
    }

    render() {
        const { user: { email, password } } = this.state;
        return (
            <div className="sign-in">
                <h3 className="text-center">LOGIN</h3>
                <SignInForm onSubmit={this.onSubmit} submitting={false}/>
            </div>
        );
    }
}

const { object } = PropTypes;

Login.propTypes = {
    actions: object.isRequired
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
};

export default connect(null, mapDispatch)(Login);

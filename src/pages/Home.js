import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as sessionActions from '../actions/sessionActions';

/*
const Home = ({ actions: { logout }, user, authenticated }) => (
    <div>
        <h3>Welcome {user.email}</h3>
        <h5>{authenticated ? 'You are authenticated :)' : 'Error'}</h5>
        {
            withRouter(({ history }) => (
                <button onClick={() => logout(history)} >
                    LOGOUT
                </button>
            ))()
        }
    </div>
);
*/

class Home extends Component {

    componentDidMount() {
        console.log( this.props );
    }
    
    componentWillReceiveProps(nextProps) {
        console.log( nextProps);
    }

    render() {
        return <div><h3>Welcome {this.props.user.email}</h3><div>{this.props.children}</div></div>
    }
}

const { object, bool, element } = PropTypes;

Home.propTypes = {
    actions: object.isRequired,
    user: object.isRequired,
    authenticated: bool.isRequired,
    children: element.isRequired
};

const mapState = (state) => ({
    user: state.session.user,
    authenticated: state.session.authenticated
});

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
};

export default connect(mapState, mapDispatch)(Home);

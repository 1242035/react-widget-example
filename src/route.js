import React, { Component } from 'react'
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
import { App } from './pages';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}

export default (
        <BrowserRouter>
            <Route path="/" component={App}/>
            <Route path="/signin" component={App} />
            <Route path="/signup" component={App} />
      </BrowserRouter>
);

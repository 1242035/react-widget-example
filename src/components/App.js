import React,
{
	Component
}
from 'react';

export default class App extends Component
{
	componentWillMount()
	{
		this.props.loadUserFromToken();
	}

	render()
	{
		return ( <div>aasdfasd </div>
		);
	}
}

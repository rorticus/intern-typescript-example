import * as React from 'react';
import Login from './Login';

export default class App extends React.Component<{}, {
	loggedIn: boolean
}> {
	constructor(props: any) {
		super(props);
		this.state = { loggedIn: false };
	}
	public render() {
		let main = <Login />;
		if (this.state.loggedIn) {
			main = <div>Hello World</div>;
		}
		return (
			<div className='container'>
				{ main }
			</div>
		);
	}
}

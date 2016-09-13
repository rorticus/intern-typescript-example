import * as React from 'react';
import Login from './Login';
import Main from './Main';

export default class App extends React.Component<{}, {
	loggedIn: boolean
}> {
	constructor(props: any) {
		super(props);
		this.state = { loggedIn: false };
		setTimeout(() => this.setState({ loggedIn: true }), 3000);
	}
	public render() {
		let main = <Login />;
		if (this.state.loggedIn) {
			main = <Main />;
		}
		return (
			<div className='container'>
				{ main }
			</div>
		);
	}
}

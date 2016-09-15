import * as React from 'react';
import Login from './Login';
import Main from './Main';

export default class App extends React.Component<{}, {
	loggedIn: boolean
}> {
	constructor(props: any) {
		super(props);
		this.state = { loggedIn: false };
	}
	private onSuccess() {
		this.setState({ loggedIn: true });
	}
	public render() {
		let main = <Login onSuccess={ this.onSuccess.bind(this) } />;

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

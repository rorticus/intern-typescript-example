import * as React from 'react';

class Spinner extends React.Component<{}, {}> {
	public render() {
		return (
			<div className='spinner'>
				<div className='dot1'></div>
				<div className='dot2'></div>
			</div>
		);
	}
}

export default class Login extends React.Component<{}, {
	loading: boolean
}> {
	constructor(props: any) {
		super(props);
		this.state = { loading: true };
		setTimeout(() => this.setState({ loading: false }), 3000);
	}
	public render() {
		let content = <div>Welcome to My Application</div>;
		if (this.state.loading) {
			content = <Spinner />;
		}
		return (
			<div className='row col-md-6 col-md-offset-3'>
				<div className='panel panel-default'>
					<div className='panel-heading'>
						<h3 className='panel-title'>My Application</h3>
					</div>
					<div className='panel-body main'>
						{ content }
					</div>
				</div>
			</div>
		);
	}
}

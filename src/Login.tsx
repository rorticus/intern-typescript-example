import * as React from 'react';

export default class Login extends React.Component<{}, {
	user?: string
	password?: string
	loginFail?: boolean
}> {
	props: {
		onSuccess?: () => void;
	};

	constructor(props: any) {
		super(props);
		this.state = { user: '', password: '', loginFail: false };
	}

	private onLoginClick(event: any) {
		event.preventDefault();
		if (
			this.state.user === 'admin' &&
			this.state.password === 'password'
		) {
			this.props.onSuccess();
		} else {
			this.setState({ loginFail: true });
		}
	}

	private updateUser(event: any) {
		const value = event.target.value;
		this.setState({ user: value });
	}

	private updatePassword(event: any) {
		const value = event.target.value;
		this.setState({ password: value });
	}

	public render() {
		return (
			<div className='row col-md-4 col-md-offset-4'>
				<div className='panel panel-default'>
					<div className='panel-heading'>
						<h3 className='panel-title'>Please sign in</h3>
					</div>
					<div className='panel-info'>
						{ (() => {
							if (this.state.loginFail) {
								return (
								<p
									className='bg-danger form-failed'
								>
									Invalid credentials, please try again.
								</p>
								);
							}
						})() }
					</div>
					<div className='panel-body'>
						<form className='form-signin'>
							<label htmlFor='inputEmail' className='sr-only'>Email address</label>
							<input
								type='text'
								id='inputEmail'
								className='form-control'
								placeholder='Username'
								value= { this.state.user }
								onChange={ this.updateUser.bind(this) }
								required
							/>
							<label htmlFor='inputPassword' className='sr-only'>Password</label>
							<input
								type='password'
								id='inputPassword'
								className='form-control'
								placeholder='Password'
								value= { this.state.password }
								onChange={ this.updatePassword.bind(this) }
								required
							/>
							<button
								className='btn btn-lg btn-primary btn-block'
								type='submit'
								onClick={ this.onLoginClick.bind(this) }
							>Sign in</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

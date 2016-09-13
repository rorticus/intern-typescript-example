import * as React from 'react';

export default class Login extends React.Component<{}, {}> {
	private onLoginClick() {
	}

	public render() {
		return (
			<div className='row col-md-4 col-md-offset-4'>
				<div className='panel panel-default'>
					<div className='panel-heading'>
						<h3 className='panel-title'>Please sign in</h3>
					</div>
					<div className='panel-body'>
						<form className='form-signin'>
							<label htmlFor='inputEmail' className='sr-only'>Email address</label>
							<input type='email' id='inputEmail' className='form-control' placeholder='Email address' required />
							<label htmlFor='inputPassword' className='sr-only'>Password</label>
							<input type='password' id='inputPassword' className='form-control' placeholder='Password' required />
							<button className='btn btn-lg btn-primary btn-block' type='submit' onClick={this.onLoginClick} >Sign in</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

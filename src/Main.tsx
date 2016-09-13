import * as React from 'react';

export default class Login extends React.Component<{}, {}> {
	public render() {
		return (
			<div className='row col-md-6 col-md-offset-3'>
				<div className='panel panel-default'>
					<div className='panel-heading'>
						<h3 className='panel-title'>Hello World</h3>
					</div>
					<div className='panel-body main'>
						<div className='spinner'>
							<div className='dot1'></div>
							<div className='dot2'></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

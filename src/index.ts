import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Login from './Login';

ReactDOM.render(
	React.createElement(Login, { foo: 'bar' }),
	document.getElementById('app')
);

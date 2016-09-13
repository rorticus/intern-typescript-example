import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	React.createElement(App, { foo: 'bar' }),
	document.getElementById('app')
);

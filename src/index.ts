import { createElement } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './App';

const store = createStore(reducer);

render(
	createElement(
		Provider,
		{ store: store },
		createElement(App, null)
	),
	document.getElementById('app')
);

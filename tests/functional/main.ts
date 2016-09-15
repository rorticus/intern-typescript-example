import * as test from 'intern!bdd';
import * as assert from 'intern/chai!assert';
import Page from './support/Page';

test.describe('intern-typescript-example', function () {

	let page: any;

	test.beforeEach(() => {
		page = new Page(this.remote);
		return page.init();
	});

	test.describe('logging in', function () {

		test.it('should display error message when invalid username and password entered', function () {
			return page.loginWith('matt', 'fail')
				.then(() => page.getSignInError())
				.then((errorText: string) => {
					assert.equal(errorText, 'Invalid credentials, please try again.');
				});
		});

		test.it('should show main page when valid username and password entered', function () {
			return page.loginWith('admin', 'password')
				.then(() => page.getMainPageText())
				.then((mainText: string) => {
					assert.equal(mainText, 'Welcome to My Application');
				});
		});

	});

});

import * as test from 'intern!bdd';
import * as assert from 'intern/chai!assert';
import Page from './support/Page';

test.describe('intern-typescript-example', function () {

	let page: any;

	test.beforeEach(() => {
		page = new Page(this.remote);
		return page.init();
	});

	test.describe('something something', function () {

		test.it('should display hello world', function () {
			return page.getWorld().then((text: string) => {
				assert.equal(text, 'hello world');
			});
		});

	});

});

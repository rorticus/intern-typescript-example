class Selectors {
	public main = '.main';
	public world = '.world';
}

export default class Page {
	private remote: any;
	private selectors: Selectors;

	constructor(remote: any) {
		this.remote  = remote;
		this.selectors = new Selectors();
	}

	init(): Promise<any> {
		return this.remote
			.get(require.toUrl('../../../src/resources/index.html'))
			.setFindTimeout(5000)
			.findByCssSelector(this.selectors.main)
			.setFindTimeout(100);
	}

	getWorld(): Promise<string> {
		return this.remote
			.findByCssSelector(this.selectors.world)
			.getVisibleText();
	}
}

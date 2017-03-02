interface ChaiAssert {
    assert: any;
}

declare module 'intern/chai' {
    const chai: ChaiAssert;

	export = chai;
}

declare module '*.html' {
    const text: string;
    export = text;
}
describe('description', () => {
	beforeEach(() => {

	});

	beforeEach(() => {
	});

	it("12", () => {
		console.log('valami');
		let errorStack;
		const stackSymbol = info[Symbol.for("stack")];

		if (isErrorStack(stackSymbol)) {
			errorStack = stackSymbol;
			info[MESSAGE] += `${EOL}${color.redBright(errorStack)}`;
		}

		expect(1).toBe(1);
		expect(() => {
		}).toThrow();

		const a = 1;

		expect(1).toBe(1);
		expect(() => {
		}).toThrow();
	});
});

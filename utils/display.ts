interface HideLongNumberInterface {
	beforePrice: number;
	afterPrice: number;
	dollarSaved: number;
}

export function hideLongNumber(object: HideLongNumberInterface) {
	return Object.fromEntries(
		Object.entries(object)
			.filter((item) => item[1] > 1000)
			.map((item) => [item[0], Number(item[1].toString().slice(0, 4))])
	);
}

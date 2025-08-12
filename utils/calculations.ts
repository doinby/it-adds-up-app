export function calculateAfterPrice(beforePrice: number, percent: number) {
	const dollarSaved = beforePrice * (percent / 100);
	const afterPrice = beforePrice - dollarSaved;
	return { afterPrice: afterPrice, dollarSave: dollarSaved };
}

export function calculateBeforePrice(afterPrice: number, percent: number) {
	const beforePrice = (afterPrice * 100) / (100 - percent);
	const dollarSaved = beforePrice * (percent / 100);
	return { beforePrice: beforePrice, dollarSaved: dollarSaved };
}

export function calculatePercent(beforePrice: number, afterPrice: number) {
	const percent = 100 - (afterPrice * 100) / beforePrice;
	const dollarSaved = beforePrice - afterPrice;
	return { percent: percent, dollarSaved: dollarSaved };
}

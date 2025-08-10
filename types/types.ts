export type Result = {
	name: string;
	beforePrice: number;
	percent: number;
	afterPrice: number;
	dollarSaved: number;
};

type history = Result[];

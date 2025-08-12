export type Result = {
	name?: string;
	beforePrice: number | undefined;
	percent: number | undefined;
	afterPrice: number | undefined;
	dollarSaved: number | undefined;
};

type history = Result[];

export enum FilterType {
	PEOPLE = "people",
	FILMS = "films",
}

export interface FilterParams {
	search?: string;
	type?: FilterType;
}

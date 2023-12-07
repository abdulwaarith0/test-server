export interface ISector {
	name: string;
	sector: {
		name: string;
		industry: {
			name: string;
			subIndustry?: string;
		};
	};
}

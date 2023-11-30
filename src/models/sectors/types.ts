export interface ISector {
	fullName: string;
	name: string;
	sector: {
		name: string;
		industry?: {
			name: string;
			subIndustry?: string;
		};
	};
}

const validateNewEntry = (payload: any): boolean => {
	const allowedFields: string[] = ["fullName", "name", "sector"];
	const receivedFields: string[] = Object.keys(payload);

	const isValidFields: boolean = allowedFields.every((item) => {
		if (item === "sector") {
			const allowedSectorFields: string[] = ["name", "industry"];
			const fields = Object.keys(payload?.sector ?? {});

			return allowedSectorFields.every((field) => {
				if (field === "industry") {
					if (!payload?.sector?.industry) return true;
					const allowedIndustryFields: string[] = ["name", "subIndustry"];
					const industry = Object.keys(payload?.sector?.industry);

					return allowedIndustryFields.every((field) => {
						// subIndustry is an optional param
						if (!payload?.sector?.industry?.subIndustry) return true;
						return industry.includes(field);
					});
				}
				return fields.includes(field);
			});
		}

		return receivedFields.includes(item);
	});

	return isValidFields;
};

export default validateNewEntry;

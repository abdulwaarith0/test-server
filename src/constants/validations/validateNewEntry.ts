/**
 * The function `validateNewEntry` checks if the fields in the `payload` object are valid based on a
 * predefined set of allowed fields.
 * @param {any} payload - The `payload` parameter is an object that represents the data to be
 * validated.
 * @returns The function `validateNewEntry` returns a boolean value indicating whether the fields in
 * the `payload` object are valid according to the defined rules.
 */
// const validateNewEntry = (payload: any): boolean => {
// 	const allowedFields: string[] = ["name", "sector"];

// 	const receivedFields: string[] = Object.keys(payload);

// 	/* The code block is checking if the fields in the `payload` object are valid according to the
//     defined rules. */
// 	const isValidFields: boolean = receivedFields.every((item) => {
// 		if (item === "sector") {
// 			const allowedSectorFields: string[] = ["name", "industry"];
// 			const fields = Object.keys(payload.sector);

// 			return fields.every((field) => {
// 				/* The code block inside the `if (field === "industry")` condition is checking if the current field
//                 is "industry". If it is, it defines an array `allowedIndustryFields` containing the allowed
//                 fields for the "industry" object. Then, it retrieves the keys of the "industry" object using
//                 `Object.keys(field)` and assigns them to the `industry` variable. */
// 				if (field === "industry") {
// 					const allowedIndustryFields: string[] = ["name", "subIndustry"];
// 					const industry = Object.keys(payload.sector.industry);

// 					return industry.every((field) =>
// 						allowedIndustryFields.includes(field)
// 					);
// 				}
// 				return allowedSectorFields.includes(field);
// 			});
// 		}
// 		return allowedFields.includes(item);
// 	});
// 	return isValidFields;
// };

const validateNewEntry = (payload: any): boolean => {
	const allowedFields: string[] = ["name", "sector"];
	const receivedFields: string[] = Object.keys(payload);

	const isValidFields: boolean = allowedFields.every((item) => {
		if (item === "sector") {
			const allowedSectorFields: string[] = ["name", "industry"];
			const fields = Object.keys(payload?.sector ?? {});

			return allowedSectorFields.every((field) => {
				if (field === "industry") {
					const allowedIndustryFields: string[] = ["name", "subIndustry"];
					const industry = Object.keys(payload?.sector?.industry ?? {});

					return allowedIndustryFields.every((field) => {
						// subIndustry is an optional param
						if (field === "subIndustry") return true;
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

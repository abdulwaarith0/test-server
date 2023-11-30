"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateNewEntry = (payload) => {
    const allowedFields = ["fullName", "name", "sector"];
    const receivedFields = Object.keys(payload);
    const isValidFields = allowedFields.every((item) => {
        var _a;
        if (item === "sector") {
            const allowedSectorFields = ["name", "industry"];
            const fields = Object.keys((_a = payload === null || payload === void 0 ? void 0 : payload.sector) !== null && _a !== void 0 ? _a : {});
            return allowedSectorFields.every((field) => {
                var _a, _b;
                if (field === "industry") {
                    if (!((_a = payload === null || payload === void 0 ? void 0 : payload.sector) === null || _a === void 0 ? void 0 : _a.industry))
                        return true;
                    const allowedIndustryFields = ["name", "subIndustry"];
                    const industry = Object.keys((_b = payload === null || payload === void 0 ? void 0 : payload.sector) === null || _b === void 0 ? void 0 : _b.industry);
                    return allowedIndustryFields.every((field) => {
                        var _a, _b;
                        // subIndustry is an optional param
                        if (!((_b = (_a = payload === null || payload === void 0 ? void 0 : payload.sector) === null || _a === void 0 ? void 0 : _a.industry) === null || _b === void 0 ? void 0 : _b.subIndustry))
                            return true;
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
exports.default = validateNewEntry;

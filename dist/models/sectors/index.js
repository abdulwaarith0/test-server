"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEntriesDB = exports.getEntryDB = exports.addNewEntryDB = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    sector: {
        name: {
            type: String,
            required: true,
            lowercase: true,
        },
        industry: {
            name: {
                type: String,
                required: true,
                lowercase: true,
            },
            subIndustry: {
                type: String,
                required: false,
            },
        },
    },
}, {
    timestamps: true,
});
// schema.index({
// 	name: 1,
// });
const Sector = (0, mongoose_1.model)("sectors", schema);
Sector.syncIndexes();
/**
 * The function `addNewEntryDB` saves a new sector entry to the database and returns the saved sector.
 * @param {ISector} payload - The `payload` parameter is an object of type `ISector`. It contains the
 * data that will be used to create a new entry in the database.
 * @returns a Promise that resolves to an object of type ISector.
 */
const addNewEntryDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const sector = new Sector(payload);
    yield sector.save();
    return sector;
});
exports.addNewEntryDB = addNewEntryDB;
/**
 * The function `getEntryDB` retrieves a sector entry from a database based on its ID.
 * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
 * sector in the database.
 * @returns a Promise that resolves to either an ISector object or null.
 */
const getEntryDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sector = yield Sector.findById(id, {
            name: 1,
            sector: 1,
        });
        return sector;
    }
    catch (error) {
        return null;
    }
});
exports.getEntryDB = getEntryDB;
/**
 * The function getAllEntriesDB retrieves all entries from the database.
 * @returns The getAllEntriesDB function is returning an array of ISector objects.
 */
const getAllEntriesDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sectors = yield Sector.find({}, {
        name: 1,
        sector: 1,
    });
    return sectors;
});
exports.getAllEntriesDB = getAllEntriesDB;

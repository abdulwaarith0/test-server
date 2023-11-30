import { ErrResourceNotFound } from "../../constants";
import { addNewEntryDB, getAllEntriesDB, getEntryDB } from "../../models";
import { ISector } from "../../models/sectors/types";

export const getEntry = async (id: string): Promise<ISector> => {
	const result = await getEntryDB(id);
	if (!result) throw ErrResourceNotFound;
	return result;
};

export const addNewEntry = async (payload: ISector): Promise<ISector> => {
	const result = await addNewEntryDB(payload);
	return result;
};

export const getAllEntries = async (): Promise<ISector[]> => {
	const result = await getAllEntriesDB();
	return result;
};

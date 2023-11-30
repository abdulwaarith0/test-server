import { Request, Response } from "express";
import { addNewEntry, getAllEntries, getEntry } from "../../services";
import {
	ErrInvalidFields,
	getErrorResponse,
	validateNewEntry,
} from "../../constants";
import { IResponseData } from "../types";
import { ISector } from "../../models/sectors/types";

export const getEntryHandler = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;
		if (!id || typeof id !== "string") throw ErrInvalidFields;
		const result = await getEntry(id);

		const response: IResponseData<typeof result> = {
			code: 200,
			message: null,
			data: result,
		};

		res.status(response.code).json(response);
	} catch (error: any) {
		const result = getErrorResponse(error);
		res.status(result.code).json(result);
	}
};

export const addNewEntryHandler = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const payload = req.body;
		if (!validateNewEntry(payload)) throw ErrInvalidFields;

		const result = await addNewEntry(payload as ISector);
		const response: IResponseData<typeof result> = {
			code: 200,
			message: null,
			data: result,
		};

		res.status(response.code).json(response);
	} catch (error: any) {
		const result = getErrorResponse(error);
		res.status(result.code).json(result);
	}
};

export const getAllEntriesHandler = async (_: Request, res: Response) => {
	try {
		const result = await getAllEntries();
		const response: IResponseData<typeof result> = {
			code: 200,
			message: null,
			data: result,
		};

		res.status(response.code).json(response);
	} catch (error: any) {
		const result = getErrorResponse(error);
		res.status(result.code).json(result);
	}
};

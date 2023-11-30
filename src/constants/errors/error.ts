import { IResponseData } from "../../controllers/types";
import {
	ErrInternalServerError,
	ErrInvalidFields,
	ErrResourceNotFound,
} from "./messages";

const getErrorResponse = (error: Error): IResponseData<null> => {
	const delimiter = "Error: ";

	let message: string = error.toString().replace(delimiter, ""),
		code: number = 0;

	switch (error) {
		case ErrInvalidFields:
			code = 400;
			break;

		case ErrResourceNotFound:
			code = 404;
			break;

		case ErrInternalServerError:
			code = 500;
			break;

		default:
			code = 500;
			message = ErrInternalServerError.toString().replace(delimiter, "");
	}
	const result: IResponseData<null> = {
		code,
		data: null,
		message,
	};
	return result;
};

export default getErrorResponse;

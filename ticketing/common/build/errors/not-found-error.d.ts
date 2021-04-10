import { CustomError } from "./custom-error";
export declare class NotFoundError extends CustomError {
    statusCode: number;
    message: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}

import { CustomError } from "./custom-error";
export declare class ServerError extends CustomError {
    reason: string;
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}

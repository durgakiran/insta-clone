import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    reason = 'Error connecting to Database';
    statusCode = 500;

    constructor() {
        super('Database connection error..');
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }


    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ]
    }
}

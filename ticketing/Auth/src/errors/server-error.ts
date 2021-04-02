import { CustomError } from "./custom-error";

export class ServerError extends CustomError {
    reason = 'This is not you, this is us : (';
    statusCode = 500;

    constructor() {
        super('Server Error...');
        Object.setPrototypeOf(this, ServerError.prototype);
    }


    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ]
    }
}

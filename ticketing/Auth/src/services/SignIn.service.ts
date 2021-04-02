import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/req-validation-error";
import { ServerError } from "../errors/server-error";
import { hashPassword } from "./password.service";

export default async function SingInService(req: Request, res: Response, next: NextFunction) {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const { email, password } = req.body;
        const hashedPassword = await hashPassword(password);

        try {
        } catch (e) {
            console.log(e);
            throw new ServerError();
        }

    } catch (err) {
        next(err);
    }
}

async function getEmail(email: string) {
    
}


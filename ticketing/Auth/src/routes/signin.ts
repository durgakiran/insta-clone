import express, { Request, Response } from 'express';
import SingInService from '../services/SignIn.service';
import SingInValidation from '../validations/Signin.validations';


const router =  express.Router();


router.post("/api/v1/users/signin", SingInValidation(), SingInService);

export { router as signInRouter };

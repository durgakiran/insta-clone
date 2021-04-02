import express from 'express';
import SingUpService from '../services/Singup.service';
import SingUpValidation from '../validations/Singup.validations';


const router =  express.Router();


router.post("/api/v1/users/signup", SingUpValidation(), SingUpService);

export { router as signUpRouter };

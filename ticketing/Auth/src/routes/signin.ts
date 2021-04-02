import express, { Request, Response } from 'express';


const router =  express.Router();


router.post("/api/v1/users/signin", (req: Request, res: Response) => {
    res.send('signin to app');
});

export { router as signInRouter };

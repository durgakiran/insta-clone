import express, { Request, Response } from 'express';


const router =  express.Router();


router.post("/api/v1/users/signout", (req: Request, res: Response) => {
    res.send('sinout application');
});

export { router as signOutRouter };

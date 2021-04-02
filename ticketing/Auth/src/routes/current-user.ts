import express, { Request, Response } from 'express';


const router =  express.Router();


router.get("/api/v1/users/currentuser", (req: Request, res: Response) => {
    res.send('this is current user');
});

export { router as currentUserRouter };

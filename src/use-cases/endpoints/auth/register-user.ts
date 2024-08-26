import { Request, Response } from 'express';

import { Context } from "../../../interfaces";


export const registerUser = ( _req: Request, res: Response, context: Context ) => {
   res.status(200).json({
     msg: 'auth',
   });
}
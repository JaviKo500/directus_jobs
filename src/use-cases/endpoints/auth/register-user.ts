import { Request, Response } from 'express';

import { InvalidPayloadError } from '@directus/errors';

import { Context } from "../../../interfaces";
import { RegisterUserDto } from '../../../dtos/endpoints/';


export const registerUser = ( _req: Request, res: Response, context: Context ) => {
   const [ errors, userRegistration ] = RegisterUserDto.validatePayload( _req.body );
   if ( errors?.length ) throw new InvalidPayloadError({
      reason: errors.join('\n '),
   });
   res.status(200).json({
     userRegistration
   });
}
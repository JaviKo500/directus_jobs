import { registerUserDirectus } from './../../../services';
import { Response } from 'express';

import { InvalidPayloadError } from '@directus/errors';

import { Context } from "../../../interfaces";
import { RegisterUserDto } from '../../../dtos/endpoints/';


export const registerUser = async ( _req: any, res: Response, context: Context ) => {
   try {
      const [ errors, userRegistration ] = RegisterUserDto.validatePayload( _req.body );
      if ( errors?.length ) throw new InvalidPayloadError({
         reason: errors.join('\n '),
      });
      const { accountability, schema } = _req;
      userRegistration!.verification_url = `${ context?.env?.PUBLIC_URL ?? '' }/verifyAccount`;
      const mainContext = { ...context, accountability, schema };
      await registerUserDirectus(
         userRegistration!, 
         {
            ...mainContext,
            accountability: {
               ...context.accountability,
               admin:true,
            }
         }
      );

      res.status(200).json({
         ok: true,
         message: `Check your account verify your email address (${ userRegistration?.email })`
      });

   } catch (error: any) {
      res.status( error?.status ?? 500 ).json(error);
   }
}
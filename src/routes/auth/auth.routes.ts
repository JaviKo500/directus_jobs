import { Router } from 'express';

import { Context } from '../../interfaces';
import { registerUser } from '../../use-cases/endpoints';
export class AuthRoutes {
   static routes( context: Context ): Router {
      const router = Router();

      router.post('/register', (req, res) => registerUser( req, res, context ));
      return router;
   }
}
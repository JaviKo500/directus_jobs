import { RegisterUserInput } from '@directus/types';

import { Context } from '../interfaces';

export const registerUserDirectus = async ( input: RegisterUserInput,  context: Context) => {
   try {
      const { services, database, accountability, schema } = context;
      const { UsersService } = services;
      const usersService = new UsersService( { knex:database, accountability, schema } );
      return await usersService.registerUser( input );
   } catch (error) {
      throw error;
   }
}
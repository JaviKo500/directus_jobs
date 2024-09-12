import { RegisterUserInput } from '@directus/types';
import { validateEmail, validatePassword } from '../../../helpers';

export class RegisterUserDto {
   static validatePayload( object: { [ key: string]: any } ):  [ string []?, RegisterUserInput? ] {
      const {
         email,
         password,
         first_name,
         last_name,
      } = object;
      const errors: string []  = [];

      if ( !email || !validateEmail( email ) ) {
         errors.push( 'Email is required and valid email' );
      }

      if ( !password || !validatePassword( password ) ) {
         errors.push( 'Password is required and must have a Uppercase, lowercase letter and a number' );
      }

      if ( !first_name ) {
         errors.push( 'first_name is required' );
      }
      if ( !last_name ) {
         errors.push( 'last_name is required' );
      }

      if ( errors.length ) return [ errors, undefined ];
      const userRegistration: RegisterUserInput = { ...object as any }; 
      return [ undefined, userRegistration ];
   }
}
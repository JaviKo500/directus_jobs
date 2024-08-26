import { defineEndpoint } from '@directus/extensions-sdk';
import { AuthRoutes } from '../../../routes/';

export default defineEndpoint((router, context) => {
	router.use( '/auth', AuthRoutes.routes( context ) );
});

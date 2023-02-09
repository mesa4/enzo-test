import {
    createRouter,
    createWebHistory
} from 'vue-router';

import routes from '../routes';
import { auth } from '../services/auth-service';
import { ROUTE_NAMES } from '../constants/route-names-constants';

const router = createRouter({
    routes,
    history: createWebHistory()
});

router.beforeEach((to, from, next) => {
    const authToken = auth.authToken;
    const isAuthorized = Boolean(authToken);
    const isToCabinet = to.matched.some(record => record.name === ROUTE_NAMES.CABINET);

    if (!isAuthorized && isToCabinet) {
        next({ name: ROUTE_NAMES.HOMEPAGE });
    }

    next();
});

export default router;

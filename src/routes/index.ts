import type { RouteRecordRaw } from 'vue-router';

import { ROUTE_NAMES } from '../constants/route-names-constants';

import PHome from '../components/pages/p-home';
import PSignUp from '../components/pages/p-sign-up';
import PCabinet from '../components/pages/p-cabinet';
import PNotFound from '../components/pages/p-not-found';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: ROUTE_NAMES.HOMEPAGE,
        component: PHome
    },
    {
        path: '/cabinet',
        name: ROUTE_NAMES.CABINET,
        component: PCabinet
    },
    {
        path: '/sign-up',
        name: ROUTE_NAMES.SIGN_UP,
        component: PSignUp
    },
    {
        path: '/:pathMatch(.*)*',
        name: ROUTE_NAMES.NOT_FOUND,
        component: PNotFound
    }
];

export default routes;

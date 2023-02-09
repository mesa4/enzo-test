import type {
    NavigationGuard,
    RouteLocationRaw,
    NavigationFailure
} from 'vue-router';

import { computed } from 'vue';
import * as vueRouter from 'vue-router';

function useRouter() {
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const routeName = computed<any>(() => route.name);
    const routeParams = computed<any>(() => route.params);

    function beforeRouterLeave(leaveGuard: NavigationGuard) {
        vueRouter.onBeforeRouteLeave(leaveGuard);
    }

    function routerPush(to: RouteLocationRaw, isOpenInNewTab = false): Promise<NavigationFailure | void | undefined> | void {
        if (isOpenInNewTab) {
            const path = router.resolve(to)?.fullPath || '/';
            window.open(`${window.location.origin}${path}`, '_blank');
            return Promise.resolve();
        }
        return router.push(to);
    }

    function routerReplace(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined> {
        return router.replace(to);
    }

    function navigateToPrevious(): void {
        return router.back();
    }

    return {
        route,
        routeName,
        routeParams,
        routerPush,
        routerReplace,
        beforeRouterLeave,
        navigateToPrevious
    };
}

export default useRouter;

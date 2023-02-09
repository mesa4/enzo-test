<template>
    <header
        :at-u-header="atAttribute"
        class="u-header"
    >
        <div class="header__content">
            <router-link
                to="/"
                class="header__logo"
            >
                <CLogo />
            </router-link>
            <div
                v-if="isShowSignIn"
                class="header__sign-in"
            >
                <router-link
                    :to="{ name: ROUTE_NAMES.SIGN_UP }"
                    class="header__sign-in-link"
                >
                    Sign Up
                </router-link>
            </div>
            <div
                v-if="isShowLogout"
                class="header__logout"
            >
                <CButton
                    text="Logout"
                    @click="logout"
                />
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import {
    computed,
    defineComponent
} from 'vue';

import CLogo from '../../common/c-logo';

import useRouter from '../../../use/use-router';
import { ROUTE_NAMES } from '../../../constants/route-names-constants';
import CButton from '../../common/c-button/c-button.vue';
import { auth } from '../../../services/auth-service';

export default defineComponent({
    name: 'UHeader',
    components: {
        CLogo,
        CButton
    },
    props: {
        /**
         * AQA attribute
         */
        atAttribute: {
            type: String,
            default: ''
        }
    },
    setup() {
        const { routeName } = useRouter();

        const isShowSignIn = computed(() => {
            return routeName.value === ROUTE_NAMES.HOMEPAGE;
        });

        const isShowLogout = computed(() => {
            return routeName.value === ROUTE_NAMES.CABINET;
        });

        function logout() {
            auth.logout();
        }

        return {
            ROUTE_NAMES,
            isShowLogout,
            isShowSignIn,
            logout
        };
    }
});
</script>

<style lang="scss" src="./u-header.scss" />

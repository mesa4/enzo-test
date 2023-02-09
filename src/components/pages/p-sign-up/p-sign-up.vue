<template>
    <div
        :at-p-sign-up="atAttribute"
        class="p-sign-up"
    >
        <UHeader />
        <div class="container">
            <USignUpRoleCard
                v-if="!isShowSignUpForm"
                @roleSelected="setRole"
            />
            <USignUpFormCard
                v-if="isShowSignUpForm"
                :role="role"
            />
        </div>
    </div>
</template>

<script lang="ts">
import {
    ref,
    computed,
    defineComponent
} from 'vue';

import UHeader from '../../unique/u-header';
import USignUpRoleCard from '../../unique/u-sign-up-role-card';
import USignUpFormCard from '../../unique/u-sign-up-form-card';

import {
    E_ROLE,
    TRole
} from '../../../types/role';

export default defineComponent({
    name: 'PSignUp',
    components: {
        UHeader,
        USignUpFormCard,
        USignUpRoleCard
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
        const role = ref<TRole | null>(null);

        const isShowSignUpForm = computed(() => role.value);

        function setRole(value: TRole) {
            role.value = value;
        }

        return {
            E_ROLE,
            role,
            isShowSignUpForm,
            setRole
        };
    }
});
</script>

<style lang="scss" src="./p-sign-up.scss" />

<template>
    <div
        :at-u-sign-up-role-card="atAttribute"
        class="u-sign-up-role-card"
    >
        <CCard
            card-title="Join as a client or freelancer"
            class="sign-up-role-card__card mt-2 mx-auto"
        >
            <template #body>
                <div class="sign-up-role-card__pick-role">
                    <div class="row">
                        <div class="col-12 col-md-5 mt-2 offset-md-1">
                            <div
                                :class="{ 'sign-up-role-card__pick-role-item--active' : isRoleClient }"
                                class="sign-up-role-card__pick-role-item"
                                @click="handleSelectRole(E_ROLE.CLIENT)"
                            >
                                <div class="sign-up-role-card__pick-role-item-content">
                                    <div class="sign-up-role-card__pick-role-image">
                                        <CSvgClient />
                                    </div>
                                    <div class="sign-up-role-card__pick-role-text">
                                        I’m a client, hiring for a project
                                    </div>
                                    <div class="sign-up-role-card__pick-role-checkbox">
                                        <div class="sign-up-role-card__pick-role-checkbox-inner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-5 mt-2">
                            <div
                                :class="{ 'sign-up-role-card__pick-role-item--active' : isRoleFreelancer }"
                                class="sign-up-role-card__pick-role-item"
                                @click="handleSelectRole(E_ROLE.FREELANCER)"
                            >
                                <div class="sign-up-role-card__pick-role-item-content">
                                    <div class="sign-up-role-card__pick-role-image">
                                        <CSvgFreelancer />
                                    </div>
                                    <div class="sign-up-role-card__pick-role-text">
                                        I’m a freelancer, looking for work
                                    </div>
                                    <div class="sign-up-role-card__pick-role-checkbox">
                                        <div class="sign-up-role-card__pick-role-checkbox-inner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CButton
                    :is-disabled="isSignUpButtonDisabled"
                    :text="signUpButtonText"
                    class="sign-up-role-card__card-submit"
                    @click="emitRoleSelected"
                />
            </template>
        </CCard>
    </div>
</template>

<script lang="ts">
import {
    ref,
    computed,
    defineComponent
} from 'vue';

import CCard from '../../common/c-card';
import CButton from '../../common/c-button';
import CSvgClient from '../../common/c-svg-client';
import CSvgFreelancer from '../../common/c-svg-freelancer';

import {
    E_ROLE,
    TRole
} from '../../../types/role';

export default defineComponent({
    name: 'USignUpRoleCard',
    components: {
        CCard,
        CButton,
        CSvgClient,
        CSvgFreelancer
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
    emits: {
        roleSelected: null
    },
    setup(props, { emit }) {
        const role = ref<TRole | null>(null);
        const isRoleClient = computed(() => role.value === E_ROLE.CLIENT);
        const isRoleFreelancer = computed(() => role.value === E_ROLE.FREELANCER);

        const isRoleSelected = computed(() => role.value);

        const isSignUpButtonDisabled = computed(() => !isRoleSelected.value);

        const signUpButtonText = computed(() => {
            if (isRoleClient.value) {
                return 'Join as a Client';
            }

            if (isRoleFreelancer.value) {
                return 'Apply as a Freelancer';
            }

            return 'Create Account';
        });

        function handleSelectRole(value: TRole) {
            role.value = value;
        }

        function emitRoleSelected() {
            emit('roleSelected', role.value);
        }

        return {
            E_ROLE,
            isRoleSelected,
            isRoleClient,
            isRoleFreelancer,
            isSignUpButtonDisabled,
            signUpButtonText,
            handleSelectRole,
            emitRoleSelected
        };
    }
});
</script>

<style lang="scss" src="./u-sign-up-role-card.scss" />

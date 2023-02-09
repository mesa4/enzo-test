<template>
    <div
        :at-p-cabinet="atAttribute"
        class="p-cabinet"
    >
        <UHeader />
        <div class="container">
            <CCard
                card-title="Welcome to dashboard"
                class="mt-2 mx-auto"
            >
                <template #body>
                    <div class="row">
                        <div class="cabinet__user-info">
                            <div
                                v-for="field in userTemplateInfo"
                                :key="field.label"
                                class="cabinet__user-info-item"
                            >
                                <div class="cabinet__user-info-label">
                                    {{ field.label }}:
                                </div>
                                <div class="cabinet__user-info-value">
                                    {{ field.value }}
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </CCard>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CCard from '../../common/c-card';
import UHeader from '../../unique/u-header';

import { auth } from '../../../services/auth-service';

export default defineComponent({
    name: 'PCabinet',
    components: {
        CCard,
        UHeader
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
        const userInfo = auth.user;

        const userTemplateInfo = [
            {
                label: 'Role',
                value: auth.user.role
            },
            {
                label: 'Full name',
                value: `${auth.user.firstName} ${auth.user.lastName}`
            },
            {
                label: 'Email',
                value: auth.user.email
            },
            {
                label: 'Country',
                value: auth.user.country
            }
        ];

        return {
            userInfo,
            userTemplateInfo
        };
    }
});
</script>

<style lang="scss" src="./p-cabinet.scss" />

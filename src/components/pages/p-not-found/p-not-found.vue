<template>
    <div
        :at-p-not-found="atAttribute"
        class="p-not-found"
    >
        <div class="container">
            <CCard
                card-title="Page not found"
                class="mt-4 mx-auto"
            >
                <template #body>
                    <div class="not-found__text">
                        404
                    </div>
                    <router-link
                        :to="{ name: ROUTE_NAMES.HOMEPAGE }"
                        class="not-found__go-back"
                    >
                        Go to homepage
                    </router-link>
                </template>
            </CCard>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CCard from '../../common/c-card/c-card.vue';
import { ROUTE_NAMES } from '../../../constants/route-names-constants';

export default defineComponent({
    name: 'PNotFound',
    components: {
        CCard
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
        return {
            ROUTE_NAMES
        };
    }
});
</script>

<style lang="scss" src="./p-not-found.scss" />

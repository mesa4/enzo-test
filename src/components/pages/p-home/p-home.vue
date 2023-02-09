<template>
    <div
        :at-p-home="atAttribute"
        class="p-home"
    >
        <UHeader />
        <section class="home__hero">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 col-md-12 d-flex align-items-center">
                        <div class="home__hero-description-block">
                            <h1 class="home__hero-title">
                                How work
                                <br>
                                should work
                            </h1>
                            <p class="home__hero-subtitle">
                                Forget the old rules. You can have the best people.
                                <br>
                                Right now. Right here.
                            </p>
                            <router-link
                                :to="{ name: ROUTE_NAMES.SIGN_UP }"
                                class="home__hero-get-started"
                            >
                                Get started
                            </router-link>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
                        <div class="home__hero-image-block">
                            <img
                                alt="Global talent illustration"
                                src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg"
                                class="home__hero-image"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import UHeader from '../../unique/u-header';

import { ROUTE_NAMES } from '../../../constants/route-names-constants';

export default defineComponent({
    name: 'PHome',
    components: {
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
    emits: {},
    setup() {
        return {
            ROUTE_NAMES
        };
    }
});
</script>

<style lang="scss" src="./p-home.scss"/>

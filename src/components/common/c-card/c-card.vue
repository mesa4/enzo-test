<template>
    <div
        :at-c-card="atAttribute"
        class="c-card"
    >
        <div class="card__head">
            <h4 class="card__title">
                {{ cardTitle }}
            </h4>
        </div>
        <div class="card__body">
            <slot name="body" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CCard',
    props: {
        /**
         * Card head title
         */
        cardTitle: {
            type: String,
            default: ''
        },
        /**
         * AQA attribute
         */
        atAttribute: {
            type: String,
            default: ''
        }
    }
});
</script>

<style lang="scss" src="./c-card.scss" />

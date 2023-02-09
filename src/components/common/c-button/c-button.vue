<template>
    <button
        :at-c-button="atAttribute"
        :disabled="isDisabled"
        :type="type"
        class="c-button"
    >
        {{ text }}
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'CButton',
    props: {
        /**
         * button inner text
         */
        text: {
            type: String,
            default: ''
        },
        /**
         * button inner text
         */
        type: {
            type: String as PropType<'submit' | 'reset' | 'button'>,
            default: 'button'
        },
        /**
         * button disabled state
         */
        isDisabled: {
            type: Boolean,
            default: false
        },
        /**
         * AQA attribute
         */
        atAttribute: {
            type: String,
            default: ''
        }
    },
    emits: {

    },
    setup() {

    }
});
</script>

<style lang="scss" src="./c-button.scss" />

<template>
    <div
        :class="inputErrorClassName"
        class="c-input-text"
    >
        <input
            v-model="localValue"
            :type="type"
            :disabled="isDisabled"
            :at-c-input-text="atAttribute"
            :placeholder="placeholder"
            class="input-text__input"
        >
        <div
            v-if="isErrorExist"
            class="input-text__error"
        >
            <div class="input-text__error-icon">
                <CSvgWarning class="input-text__error-icon" />
            </div>
            <div class="input-text__error-message">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent
} from 'vue';
import CSvgWarning from '../c-svg-warning/c-svg-warning.vue';

export default defineComponent({
    name: 'CInputText',
    components: { CSvgWarning },
    props: {
        /**
         * input model value
         */
        modelValue: {
            type: String,
            default: ''
        },
        /**
         * input type
         */
        type: {
            type: String,
            default: 'text'
        },
        /**
         * input disabled state
         */
        isDisabled: {
            type: Boolean,
            default: false
        },
        /**
         * input error message
         */
        errorMessage: {
            type: String,
            default: ''
        },
        /**
         * input placeholder
         */
        placeholder: {
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
    },
    emits: {
        'update:modelValue': null
    },
    setup(props, { emit }) {
        const localValue = computed({
            get() {
                return props.modelValue;
            },
            set(value: string) {
                emit('update:modelValue', value);
            }
        });

        const isErrorExist = computed(() => Boolean(props.errorMessage));

        const inputErrorClassName = computed(() => {
            return isErrorExist.value ? 'input-text--error' : null;
        });

        return {
            localValue,
            isErrorExist,
            inputErrorClassName
        };
    }
});
</script>

<style lang="scss" src="./c-input-text.scss" />

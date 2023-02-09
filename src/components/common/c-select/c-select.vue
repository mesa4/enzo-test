<template>
    <select
        v-model="localValue"
        :at-c-select="atAttribute"
        class="c-select"
    >
        <option
            v-for="option in optionsList"
            :key="option"
        >
            {{ option }}
        </option>
    </select>
</template>

<script lang="ts">
import {
    computed,
    defineComponent
} from 'vue';

export default defineComponent({
    name: 'CSelect',
    props: {
        /**
         * input model value
         */
        modelValue: {
            type: String,
            default: ''
        },
        /**
         * select options list
         */
        optionsList: {
            type: Array,
            default: () => []
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

        return {
            localValue
        };
    }
});
</script>

<style lang="scss" src="./c-select.scss" />

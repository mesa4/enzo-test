<template>
    <div class="main-wrapper">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App'
});
</script>

<style lang="scss" src="./main.scss"/>

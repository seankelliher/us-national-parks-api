<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    }
});

defineEmits(["restoreDefault"]);
</script>


<template>
    <header>
        <figure
            @click="$emit('restoreDefault')"
            class="logo"
        >
            <img src="images/national-park-service-logo.svg" alt="National Park Service logo">
        </figure>
        <div class="headlines">
            <h1>{{ title }}</h1>
            <p class="sub-title">{{ subTitle }}</p>
        </div>
    </header>
</template>

<style scoped>
</style>

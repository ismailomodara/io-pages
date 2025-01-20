<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import BlankLayout from "@/layouts/BlankLayout.vue";
import BuilderLayout from "@/layouts/BuilderLayout.vue";

const route = useRoute();
const layout = computed(() => {
    const routeLayout = route && route.meta && route.meta.layout;

    if (routeLayout === 'builder') {
        return BuilderLayout;
    }
    return BlankLayout;
});

</script>

<template>
    <main>
        <component :is="layout">
            <RouterView v-slot="{ Component }" />
        </component>
    </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 10s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

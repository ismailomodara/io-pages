<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import BlankLayout from "@/layouts/BlankLayout.vue";
import BuilderLayout from "@/layouts/BuilderLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

const route = useRoute();
const layout = computed(() => {
    const routeLayout = route && route.meta && route.meta.layout;
    switch (routeLayout) {
        case "builder":
            return BuilderLayout;
        case "dashboard":
            return DashboardLayout
        default:
            return BlankLayout
    }
});

</script>

<template>
    <main>
        <component :is="layout">
            <RouterView v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </RouterView>
        </component>
    </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

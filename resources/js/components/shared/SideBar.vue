<script setup lang="ts">
import router from '@/router';
import { UiAccountDisplay, UiButton, UiVerticalSeparator } from '../ui';
import { useAuthStore } from '@/stores';
const auth = useAuthStore()
interface buttonType {
    icon: string,
    label: string,
    route: string,
    category?: string
    class?: string
}

const buttonData: buttonType[] = [
    { icon: "heroicons:plus", label: "Nuevo servicio", route: 'new-store', category: 'stores' },
    { icon: "heroicons:home", label: "Mis servicios", route: 'my-stores', category: 'stores' },
    { icon: "heroicons:cog", label: "Configuracion", route: 'account-settings' },
]
</script>

<template>
    <aside class="flex flex-col lg:min-w-1/6 items-center gap-3 p-2 bg-(--surface-secondary) z-99">
        <ui-account-display />

        <ui-vertical-separator label="Tiendas" icon="home" />
        <ui-button v-for="button in buttonData.filter(item => item.category && item.category === 'stores')"
            :key="button.route" variant="sidebar" :icon="button.icon" class="flex flex-row! gap-3 items-start"
            :class="button.class" @click="router.push(button.route)">
            {{ button.label }}
        </ui-button>


        <ui-vertical-separator label="Otros" icon="ellipsis-horizontal" />
        <ui-button v-for="button in buttonData.filter(item => !item.category)" :key="button.route" variant="sidebar"
            :icon="button.icon" class="flex flex-row! gap-3 items-start" :class="button.class"
            @click="router.push(button.route)">
            {{ button.label }}
        </ui-button>
        <ui-button variant="sidebar" icon="heroicons:arrow-right-on-rectangle" class="hover:bg-(--error-bg)!"
            @click="auth.logout()">
            Salir
        </ui-button>
    </aside>
</template>
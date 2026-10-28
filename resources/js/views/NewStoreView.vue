<script setup lang="ts">
import { UiButton, UiInputText, UiWrapper } from '@/components/ui';
import { Icon } from '@iconify/vue';
import { ref, useTemplateRef } from 'vue';

const imageInput = useTemplateRef('imageInput')
const imageSource = ref<string>()
</script>

<template>
    <main class="flex flex-col w-full h-full items-center">
        <section class="flex-1 flex flex-col gap-3 h-full w-1/2! p-4">
            <div class="flex flex-row items-center gap-1 text-2xl">
                <icon icon="heroicons:squares-plus" />
                <h1>Nuevo servicio</h1>
            </div>

            <button class="
            m-auto
            transition cursor-pointer
            flex flex-col
            h-48
            relative w-1/2
            items-center justify-center justify-self-center 
            bg-(--surface-secondary) 
            rounded-md border-2 
            border-dashed border-(--border-secondary)

            lg:hover:bg-(--button-secondary-bg-hover)
            lg:hover:border-(--border-focus)
            overflow-hidden
            " @click="imageInput?.click() ?? false">
                <icon v-if="!imageSource" icon="heroicons:plus" class="text-8xl" />
                <strong v-if="!imageSource">Imagen de la tienda</strong>

                <img :src="imageSource" :alt="imageSource" class="object-cover">

                <input ref="imageInput" type="file" class="hidden" accept="image/*"
                    @change="data => imageSource = data.target?.value">
            </button>

            <ui-wrapper max-width="sm" class="gap-3" centered max-height="fit">
                <ui-input-text type="text" placeholder="Nombre del servicio" />
                <ui-input-text type="text-box" placeholder="Descripcion" />
            </ui-wrapper>

            <div class="flex-1 flex flex-row items-end justify-end">
                <ui-button icon="heroicons:plus" icon-right>
                    Crear
                </ui-button>
            </div>
        </section>
    </main>
</template>
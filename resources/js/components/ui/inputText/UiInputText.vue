<script setup lang="ts">
import { computed, onMounted, ref, useId, watch } from 'vue';
import type { InputProps } from './types';
import { UiWrapper } from '..';
import { Icon } from '@iconify/vue';

const props = withDefaults(defineProps<InputProps>(), {
    placeholder: 'placeholder',
    type: 'text',
    minLength: -1,
    errorCaption: 'Campo no valido',
    throwError: false
})

const model = defineModel<string>({ default: '' })
const target = useId()
const showPassword = ref<boolean>(false)

const invalidField = computed(() =>
    props.type === 'email' ?
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(model.value) && model.value.length !== 0 :
        (model.value.length < props.minLength) && model.value.length > 0
)

const fieldStyling = computed(() =>
    (invalidField.value || props.throwError) ?
        'border-(--border-error)! bg-(--error-bg)/10!' :
        'border-(--border-primary)!'
)

const emits = defineEmits<{ 'error:invalidField': [value: boolean] }>();
watch(invalidField, (isInvalid) => {
    emits('error:invalidField', isInvalid || model.value.length === 0)
})
watch(model, (value) => {
    if (!['text', 'text-box'].includes(props.type)) {
        return
    }
    emits('error:invalidField', value.length === 0)
})

onMounted(() => emits('error:invalidField', model.value.length === 0))
</script>

<template>
    <ui-wrapper padding="none" type="secondary" max-height="fit" max-width="full"
        :class="['relative px-1 py-0.75 overflow-visible items-center', fieldStyling]" flex-row>
        <icon v-if="props.icon" :icon="`heroicons:${props.icon}`" class="inline-block box-content px-1!" />

        <input v-if="props.type !== 'password'" :id="target" v-model="model" class="peer font-extralight w-full"
            :type="props.type" placeholder=" ">

        <input v-if="props.type === 'password'" :id="target" v-model="model" class="peer font-extralight w-full"
            :type="showPassword ? 'text' : 'password'" placeholder=" ">

        <ui-button v-if="props.type === 'password'" size="xs" variant="password" :togled="showPassword"
            @click="showPassword = !showPassword">
            <icon :icon="showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'" />
        </ui-button>

        <label :for="target" :class="`
            transition absolute 
            pointer-events-none
            ${props.icon ? 'left-7' : 'left-3'} top-1/2 
            -translate-y-1/2 
            text-base text-(--text-disabled)

            peer-not-placeholder-shown:-translate-y-6
            ${props.icon ?
                'peer-not-placeholder-shown:-translate-x-5' :
                'peer-not-placeholder-shown:-translate-x-1'
            }
            peer-not-placeholder-shown:text-(--text-primary)
            peer-not-placeholder-shown:text-xs
            `">
            {{ props.placeholder }}
        </label>

        <div
            :class="['pointer-events-none transition absolute flex flex-row gap-0.5 translate-y-4 top-1/2 right-3', (invalidField || throwError) ? 'opacity-100' : 'opacity-0 translate-y-2']">
            <icon icon="heroicons:exclamation-triangle" class="text-(--error-text)" />

            <p class="text-(--error-text) text-xs">
                {{ props.errorCaption }}
            </p>
        </div>

    </ui-wrapper>
</template>
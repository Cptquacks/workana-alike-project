<script setup lang="ts">
import { UiButton, UiInputText, UiTextLabel, UiWrapper } from '@/components/ui';
import { useAuthStore } from '@/stores';
import type { authPayload, storePayload } from '@/types/user';
import { Icon } from '@iconify/vue';
import { ref, watch } from 'vue';

const auth = useAuthStore()
const isOnLogin = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const error = ref<string>()

const formFields = ref<storePayload>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const validFields = ref<Array<{ 'value': boolean }>>([
    { 'value': false },
    { 'value': false },
    { 'value': false },
    { 'value': false },
])


const submitHandler = async () => {
    isLoading.value = true
    if (!isOnLogin.value && !validFields.value.every(entry => entry.value)) {
        error.value = 'Uno de los campos no es valido'
        isLoading.value = false
        return
    }

    if (isOnLogin.value && !validFields.value.slice(1, 3).every(entry => entry.value)) {
        error.value = 'Uno de los campos no es valido'
        isLoading.value = false
        return
    }

    if (isOnLogin.value) {
        error.value = await auth.authenticate(<authPayload>formFields.value) ?? ''
        isLoading.value = false
        return
    }
    error.value = await auth.store(formFields.value) ?? ''
    isLoading.value = false
}

watch(error, (value) => {
    if (value?.length !== 0) {
        setTimeout(() => {
            error.value = ''
        }, 3000);
    }
})

</script>

<template>
    <form class="flex items-center justify-center" @submit.prevent="">
        <ui-wrapper padding="sm" max-width="sm" max-height="fit"
            class="relative gap-6 overflow-visible shadow-md shadow-black">
            <ui-wrapper flex-row form="square" max-height="fit" max-width="full" type="tertiary"
                class="items-center gap-1">
                <icon :icon="isOnLogin ? 'heroicons:arrow-right-on-rectangle' : 'heroicons:user-plus'"
                    class="text-xl" />
                <strong>{{ isOnLogin ? 'Iniciar sesion' : 'Crear cuenta' }}</strong>
            </ui-wrapper>

            <div class="flex-1 flex flex-col gap-6">
                <ui-input-text v-if="!isOnLogin" v-model="formFields.name" type="text" placeholder="Nombre de usuario"
                    icon="user"
                    @error:invalid-field="(data: boolean) => validFields[0] ? validFields[0].value = !data : false" />

                <ui-input-text v-model="formFields.email" type="email" placeholder="Correo electronico" icon="envelope"
                    @error:invalid-field="(data: boolean) => validFields[1] ? validFields[1].value = !data : false" />

                <hr v-if="!isOnLogin" class="border-(--border-primary)">

                <ui-input-text v-model="formFields.password" type="password" placeholder="Contraseña" :min-length="6"
                    error-caption="La contraseña debe contener 6 caracteres"
                    @error:invalid-field="(data: boolean) => validFields[2] ? validFields[2].value = !data : false" />

                <ui-input-text v-if="!isOnLogin" v-model="formFields.password_confirmation" type="password"
                    placeholder="Confirmacion de contraseña" :min-length="6"
                    error-caption="La contraseña debe coincidir"
                    :throw-error="formFields.password !== formFields.password_confirmation && formFields.password_confirmation.length !== 0"
                    @error:invalid-field="(data: boolean) => validFields[3] ? validFields[3].value = !data : false" />
            </div>

            <div class="flex flex-col justify-end">
                <ui-button variant="primary" :loading="isLoading" @click="submitHandler">
                    {{ isOnLogin ?
                        'Iniciar sesion' :
                        'Crear cuenta'
                    }}
                </ui-button>

                <button @click="isOnLogin = !isOnLogin">
                    <u class="transition cursor-pointer text-(--text-secondary) text-xs hover:text-(--text-primary)">
                        {{ isOnLogin ?
                            'Aun no tienes una cuenta?. Creala' :
                            'Ya tienes una cuenta?. Autenticate'
                        }}
                    </u>
                </button>
            </div>

            <ui-text-label
                :class="['transition pointer-events-none absolute bottom-0 left-0 w-full', error && error.length > 0 ? 'translate-y-12 opacity-100' : 'opacity-0']"
                variant="error">
                {{ error }}
            </ui-text-label>
        </ui-wrapper>
    </form>
</template>

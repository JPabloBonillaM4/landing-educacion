<template>
    <div id="form-educativo" class="form-container" :class="{ 'form-container--visible': isVisible }" ref="formRef">
        <div v-if="!showSuccess">
            <h2 class="form-title text-blue-primary">Comienza tu plan educativo</h2>
            <p class="form-subtitle">Déjanos tus datos para recibir una proyección personalizada.</p>

            <!-- Single Form (no steps) -->
            <form class="education-form" @submit.prevent="submitForm">
                <!-- Nombre del padre/madre -->
                <div class="form-group">
                    <label class="form-label" for="parentName">Nombre del padre/madre</label>
                    <input
                        id="parentName"
                        type="text"
                        class="form-input"
                        placeholder="Ej. Carlos Salazar"
                        v-model="formData.parentName"
                        required
                    />
                </div>

                <!-- Tu edad y Edad del hijo (lado a lado) -->
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="parentAge">Tu edad</label>
                        <input
                            id="parentAge"
                            type="number"
                            class="form-input"
                            placeholder="35"
                            v-model="formData.parentAge"
                            min="18"
                            max="100"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="childAge">Edad del hijo</label>
                        <input
                            id="childAge"
                            type="number"
                            class="form-input"
                            placeholder="3"
                            v-model="formData.childAge"
                            min="0"
                            max="25"
                            required
                        />
                    </div>
                </div>

                <!-- Meta educativa -->
                <div class="form-group">
                    <label class="form-label" for="educationGoal">Meta educativa</label>
                    <div class="select-wrapper">
                        <select
                            id="educationGoal"
                            class="form-input form-select"
                            v-model="formData.educationGoal"
                            required
                        >
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="Universidad Extranjera - $3,000,000.00">Universidad Extranjera - $3,000,000.00</option>
                            <option value="Universidad Privada México - $1,500,000.00">Universidad Privada México - $1,500,000.00</option>
                            <option value="Universidad Pública - $500,000.00">Universidad Pública - $500,000.00</option>
                        </select>
                        <p class="form-help-text" v-if="educationGoalDescription">{{ educationGoalDescription }}</p>
                    </div>
                </div>

                <!-- Correo electrónico y Teléfono (lado a lado) -->
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="email">Correo electrónico</label>
                        <input
                            id="email"
                            type="email"
                            class="form-input"
                            placeholder="usuario@email.com"
                            v-model="formData.email"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="phone">Teléfono</label>
                        <input
                            id="phone"
                            type="tel"
                            class="form-input"
                            placeholder="55 1234 5678"
                            v-model="formData.phone"
                            pattern="[0-9\s]+"
                            required
                        />
                    </div>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="submit-btn" :disabled="isLoading">
                    <span v-if="!isLoading">Cotizar ahora →</span>
                    <span v-else>Enviando...</span>
                </button>

                <!-- Privacy Notice -->
                <p class="privacy-notice">Tus datos están protegidos conforme a la ley.</p>
            </form>
        </div>

        <!-- Success Message -->
        <SuccessMsg v-else :formData="formData" />
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import SuccessMsg from './success_msg.vue';

const isVisible = ref(false);
const formRef = ref(null);
const isLoading = ref(false);
const showSuccess = ref(false);
let observer = null;

const formData = reactive({
    parentName: '',
    parentAge: '',
    childAge: '',
    educationGoal: '',
    email: '',
    phone: '',
});

const educationGoalDescription = computed(() => {
    const descriptions = {
        'Universidad Extranjera - $3,000,000.00': 'Cambridge, Oxford, Stanford y similares',
        'Universidad Privada México - $1,500,000.00': 'ITESM, Anáhuac, Panamericana y similares',
        'Universidad Pública - $500,000.00': 'UNAM, IPN, UAM y similares'
    };
    return descriptions[formData.educationGoal] || '';
});

const submitForm = async () => {
    console.log('Form submitted:', formData);
    isLoading.value = true;

    try {
        // Separar nombre completo en First Name y Last Name
        const nameParts = formData.parentName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || nameParts[0] || '';

        // Crear FormData para envío a Zoho
        const zohoData = new FormData();

        // Campos ocultos requeridos por Zoho
        zohoData.append('xnQsjsdp', import.meta.env.VITE_ZOHO_XNQSJSDP);
        zohoData.append('zc_gad', '');
        zohoData.append('xmIwtLD', import.meta.env.VITE_ZOHO_XMIWTLD);
        zohoData.append('actionType', import.meta.env.VITE_ZOHO_ACTION_TYPE);
        zohoData.append('returnURL', import.meta.env.VITE_ZOHO_RETURN_URL);

        // Campos del formulario
        zohoData.append('First Name', firstName);
        zohoData.append('Last Name', lastName);
        zohoData.append('LEADCF51', formData.parentAge); // Edad del padre
        zohoData.append('LEADCF54', formData.childAge); // Edad del hijo
        zohoData.append('LEADCF34', formData.educationGoal); // Meta educativa
        zohoData.append('Email', formData.email);
        zohoData.append('Mobile', formData.phone);

        // Campos ocultos con valores predeterminados
        zohoData.append('Lead Source', 'Web');
        zohoData.append('LEADCF6', 'Educación'); // Ramo
        zohoData.append('aG9uZXlwb3Q', ''); // Honeypot para anti-spam

        // Enviar a Zoho
        const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
            method: 'POST',
            body: zohoData,
            mode: 'no-cors' // Zoho no retorna CORS headers
        });

        isLoading.value = false;
        showSuccess.value = true;
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        isLoading.value = false;
        // Mostrar mensaje de éxito de todas formas ya que no-cors no nos permite verificar
        showSuccess.value = true;
    }
};

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                }
            });
        },
        { threshold: 0.2 }
    );

    if (formRef.value) {
        observer.observe(formRef.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style scoped>
.form-container {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 47.5%;
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.form-container--visible {
    opacity: 1;
    transform: translateX(0);
}

.form-title {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.3;
}

.form-subtitle {
    font-size: 0.95rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
    line-height: 1.5;
}

/* Education Form */
.education-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-label {
    font-size: 0.9rem;
    font-weight: 500;
    color: #374151;
}

.form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #111827;
    transition: all 0.2s ease;
    background-color: #ffffff;
}

.form-input::placeholder {
    color: #9ca3af;
}

.form-input:focus {
    outline: none;
    border-color: var(--blue-secondary);
    box-shadow: 0 0 0 3px rgba(22, 95, 251, 0.1);
}

.form-select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem;
}

.select-wrapper {
    position: relative;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background-color: #ffffff;
    transition: all 0.2s ease;
}

.select-wrapper:focus-within {
    border-color: var(--blue-secondary);
    box-shadow: 0 0 0 3px rgba(22, 95, 251, 0.1);
}

.select-wrapper .form-select {
    border: none !important;
    border-radius: 8px 8px 0 0 !important;
    padding-bottom: 0.5rem !important;
    box-shadow: none !important;
}

.select-wrapper .form-select:focus {
    box-shadow: none !important;
}

.select-wrapper:has(.form-help-text) .form-select {
    border-bottom: 1px solid #e5e7eb !important;
}

.form-help-text {
    font-size: 0.8rem;
    color: #6b7280;
    margin: 0;
    padding: 0.5rem 1rem;
    line-height: 1.4;
}

.submit-btn {
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: var(--orange-primary);
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
    background-color: #c4612d;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(221, 117, 57, 0.4);
}

.submit-btn:active:not(:disabled) {
    transform: translateY(0);
}

.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.privacy-notice {
    font-size: 0.8rem;
    color: #6b7280;
    text-align: center;
    margin-top: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
    .form-container {
        max-width: 100%;
        padding: 1.5rem;
        border-radius: 12px;
    }

    .form-title {
        font-size: 1.5rem;
    }

    .form-subtitle {
        font-size: 0.9rem;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .form-container {
        padding: 1.25rem;
    }

    .form-title {
        font-size: 1.3rem;
    }

    .submit-btn {
        font-size: 1rem;
        padding: 0.875rem 1.25rem;
    }
}
</style>
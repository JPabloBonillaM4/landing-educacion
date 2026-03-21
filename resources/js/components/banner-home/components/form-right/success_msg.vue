<template>
    <div class="success-message">
        <div class="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        </div>

        <h2 class="success-title text-blue-primary">¡Gracias por tu interés!</h2>

        <p class="success-description">
            <strong>{{ parentName }}</strong>, hemos recibido tu solicitud de cotización para el plan educativo de tu hijo.
        </p>

        <div class="content-section">
            <p class="text-blue-primary mb-3">
                En breve, un asesor especializado se pondrá en contacto contigo para:
            </p>
            <ul class="benefits-list text-blue-primary">
                <li>Presentarte las mejores opciones de planes educativos</li>
                <li>Explicarte los beneficios de invertir en el futuro de tu hijo</li>
                <li>Resolver todas tus dudas sobre el programa</li>
                <li>Diseñar un plan personalizado según tu meta educativa</li>
            </ul>
        </div>

        <div class="contact-section">
            <p class="contact-title">¿Deseas hablar con un asesor ahora?</p>
            <div class="contact-buttons">
                <a href="https://wa.me/525558870510" target="_blank" class="contact-btn contact-btn--whatsapp">
                    Contactar por WhatsApp
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    formData: {
        type: Object,
        required: true
    }
});

const parentName = computed(() => {
    return props.formData.parentName || 'Estimado(a)';
});
</script>

<style scoped>
.success-message {
    padding: 1.5rem 0.5rem;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
}

.success-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 1.5rem;
    background-color: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.success-icon svg {
    width: 36px;
    height: 36px;
    color: white;
}

.success-title {
    font-size: 1.75rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
}

.success-description {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
    color: #374151;
}

.content-section {
    border: 3px solid #e2edfc;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1.5rem;
}

.mb-3 {
    margin-bottom: 1rem;
}

.benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.benefits-list li {
    padding: 0.4rem 0 0.4rem 1.75rem;
    font-size: 0.9rem;
    line-height: 1.5;
    position: relative;
}

.benefits-list li::before {
    content: "●";
    position: absolute;
    left: 0;
    color: var(--blue-primary);
    font-weight: bold;
    font-size: 1.1rem;
}

.contact-section {
    text-align: center;
}

.contact-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--blue-primary);
    margin-bottom: 1rem;
}

.contact-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.contact-btn {
    flex: 1;
    max-width: 250px;
    padding: 0.875rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.contact-btn--whatsapp {
    background-color: var(--blue-primary);
    color: #ffffff;
}

.contact-btn--whatsapp:hover {
    background-color: #0847b8;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(10, 74, 206, 0.3);
}

@media (max-width: 480px) {
    .success-message {
        padding: 1rem;
    }

    .success-title {
        font-size: 1.5rem;
    }

    .success-description {
        font-size: 0.95rem;
    }

    .benefits-list li {
        font-size: 0.85rem;
        padding: 0.35rem 0 0.35rem 1.5rem;
    }

    .contact-buttons {
        flex-direction: column;
        align-items: center;
    }

    .contact-btn {
        max-width: 100%;
        width: 100%;
    }
}
</style>
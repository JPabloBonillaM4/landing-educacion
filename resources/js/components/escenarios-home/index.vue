<template>
    <section ref="sectionRef" class="py-16 px-4 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <!-- Tarjeta de perfil -->
            <div class="mb-12 animate-from-top" :class="{ 'animate-in': isVisible }">
                <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <!-- Info del usuario -->
                    <div class="flex items-center gap-4">
                        <div class="relative">
                            <img src="/img/carlos-avatar.jpg" alt="Carlos Salazar" 
                                 class="w-20 h-20 rounded-full object-cover"
                                 @error="$event.target.src='https://ui-avatars.com/api/?name=Carlos+Salazar&size=80&background=3a88fd&color=fff&bold=true'">
                            <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div>
                            <span class="inline-block px-3 py-1 text-xs font-bold rounded-full mb-2" 
                                  style="background-color: #dbeafe; color: var(--blue-primary)">
                                CASO DE EJEMPLO
                            </span>
                            <h3 class="text-2xl font-bold text-gray-900">Carlos Salazar</h3>
                            <div class="flex items-center gap-3 text-sm text-gray-600 mt-1">
                                <span class="flex items-center gap-1">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                    </svg>
                                    35 años, Padre de familia
                                </span>
                                <span class="flex items-center gap-1">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                    </svg>
                                    CDMX
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- Objetivo -->
                    <div class="text-center md:text-right">
                        <p class="text-sm text-gray-500 mb-1">Objetivo:</p>
                        <p class="text-xl font-bold" style="color: var(--blue-primary)">
                            Asegurar la educación de su hijo (3 años)
                        </p>
                    </div>
                </div>
            </div>

            <!-- Título y descripción -->
            <div class="text-center mb-12 animate-from-top delay-1" :class="{ 'animate-in': isVisible }">
                <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--blue-primary)">
                    3 Escenarios para el Futuro
                </h2>
                <p class="text-lg text-gray-600">
                    Mira cómo una pequeña inversión mensual garantiza grandes metas educativas.
                </p>
            </div>

            <!-- Grid de escenarios -->
            <div ref="cardsContainer" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Card 1: UVM -->
                <div class="pricing-card card-delay-1" :class="{ 'animate-in': cardsVisible }">
                    <div class="card-header" style="background-color: var(--blue-uvm)">
                        <h3 class="university-name">UVM</h3>
                        <p class="savings-label">Meta de Ahorro</p>
                        <p class="savings-amount">$600,000</p>
                    </div>
                    <div class="card-body">
                        <div class="monthly-payment">
                            <span class="payment-amount">$3,355</span>
                            <span class="payment-period">/ mes</span>
                        </div>
                        <ul class="benefits-list">
                            <li class="benefit-item">
                                <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Valores garantizados que se ajustan con inflación</span>
                            </li>
                            <li class="benefit-item">
                                <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Seguro de vida</span>
                            </li>
                            <li class="benefit-item">
                                <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Seguro de Invalidez Extensión de pago de primas por invalidez y fallecimiento</span>
                            </li>
                        </ul>
                        <button class="cta-button" style="background-color: var(--blue-uvm)" @click="scrollToForm">
                            Elegir este plan
                        </button>
                    </div>
                </div>

                <!-- Card 2: ITAM -->
                <div class="pricing-card card-delay-2" :class="{ 'animate-in': cardsVisible }">
                    <div class="card-header" style="background-color: var(--blue-itam)">
                        <h3 class="university-name">ITAM</h3>
                        <p class="savings-label">Meta de Ahorro</p>
                        <p class="savings-amount">$1,000,000</p>
                    </div>
                    <div class="card-body">
                        <div class="monthly-payment">
                            <span class="payment-amount">$4,423</span>
                            <span class="payment-period">/ mes</span>
                        </div>
                        <ul class="benefits-list">
                            <li class="benefit-item">
                                <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Valores garantizados que se ajustan con inflación</span>
                            </li>
                            <li class="benefit-item">
                                <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Seguro de vida</span>
                            </li>
                            <li class="benefit-item">
                                <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Seguro de Invalidez Extensión de pago de primas por invalidez y fallecimiento</span>
                            </li>
                        </ul>
                        <button class="cta-button" style="background-color: var(--blue-itam)" @click="scrollToForm">
                            Elegir este plan
                        </button>
                    </div>
                </div>

                <!-- Card 3: TEC DE MONTERREY -->
                <div class="pricing-card card-delay-3" :class="{ 'animate-in': cardsVisible }">
                    <div class="card-header" style="background-color: var(--blue-tec)">
                        <h3 class="university-name">TEC DE MONTERREY</h3>
                        <p class="savings-label">Meta de Ahorro</p>
                        <p class="savings-amount">$1,500,000</p>
                    </div>
                    <div class="card-body">
                        <div class="monthly-payment">
                            <span class="payment-amount">$8,008</span>
                            <span class="payment-period">/ mes</span>
                        </div>
                        <ul class="benefits-list">
                            <li class="benefit-item">
                                <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Valores garantizados que se ajustan con inflación</span>
                            </li>
                            <li class="benefit-item">
                                <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Seguro de vida</span>
                            </li>
                            <li class="benefit-item">
                                <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Seguro de Invalidez Extensión de pago de primas por invalidez y fallecimiento</span>
                            </li>
                        </ul>
                        <button class="cta-button" style="background-color: var(--blue-tec)" @click="scrollToForm">
                            Elegir este plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'EscenariosHome',
    setup() {
        const sectionRef = ref(null);
        const isVisible = ref(false);
        const cardsContainer = ref(null);
        const cardsVisible = ref(false);
        let observers = [];

        const scrollToForm = () => {
            const formSection = document.getElementById('plan-educativo');
            if (formSection) {
                const offset = 24;
                const targetY = formSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetY, behavior: 'smooth' });
            }
        };

        onMounted(() => {
            // Observer para el título
            const titleObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            isVisible.value = true;
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -100px 0px'
                }
            );

            if (sectionRef.value) {
                titleObserver.observe(sectionRef.value);
                observers.push(titleObserver);
            }

            // Observer para las tarjetas
            const cardsObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            cardsVisible.value = true;
                        }
                    });
                },
                {
                    threshold: 0.2,
                    rootMargin: '0px 0px -150px 0px'
                }
            );

            if (cardsContainer.value) {
                cardsObserver.observe(cardsContainer.value);
                observers.push(cardsObserver);
            }
        });

        onUnmounted(() => {
            observers.forEach(observer => observer.disconnect());
        });

        return {
            sectionRef,
            isVisible,
            cardsContainer,
            cardsVisible,
            scrollToForm
        };
    }
}
</script>

<style scoped>
/* Animaciones de entrada */
.animate-from-top {
    opacity: 0;
    transform: translateY(-30px);
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-from-top.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.pricing-card {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: white;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.pricing-card.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Delays */
.delay-1 {
    transition-delay: 0.2s;
}

.card-delay-1.animate-in {
    transition-delay: 0.1s;
}

.card-delay-2.animate-in {
    transition-delay: 0.25s;
}

.card-delay-3.animate-in {
    transition-delay: 0.4s;
}

/* Card Header */
.card-header {
    padding: 2rem 1.5rem;
    text-align: center;
    color: white;
}

.university-name {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
}

.savings-label {
    font-size: 0.875rem;
    opacity: 0.9;
    margin-bottom: 0.5rem;
}

.savings-amount {
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: -1px;
}

/* Card Body */
.card-body {
    padding: 2rem 1.5rem;
}

.monthly-payment {
    text-align: center;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #e5e7eb;
}

.payment-amount {
    font-size: 2.5rem;
    font-weight: 800;
    color: #111827;
    letter-spacing: -1px;
}

.payment-period {
    font-size: 1rem;
    color: #6b7280;
    margin-left: 0.25rem;
}

/* Benefits List */
.benefits-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
}

.benefit-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem 0;
    font-size: 0.9rem;
    color: #374151;
    line-height: 1.5;
}

.check-icon {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    color: var(--blue-primary);
    margin-top: 0.125rem;
    background-color: rgba(0, 47, 134, 0.1);
    border-radius: 50%;
    padding: 0.25rem;
}

/* CTA Button */
.cta-button {
    width: 100%;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 0.75rem;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.cta-button:active {
    transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
    .university-name {
        font-size: 1.35rem;
    }
    
    .savings-amount {
        font-size: 2rem;
    }
    
    .payment-amount {
        font-size: 2rem;
    }
    
    .card-body {
        padding: 1.5rem 1.25rem;
    }
    
    .benefit-item {
        font-size: 0.85rem;
    }
}

@media (max-width: 640px) {
    .card-header {
        padding: 1.5rem 1rem;
    }
    
    .savings-amount {
        font-size: 1.75rem;
    }
    
    .payment-amount {
        font-size: 1.75rem;
    }
}
</style>
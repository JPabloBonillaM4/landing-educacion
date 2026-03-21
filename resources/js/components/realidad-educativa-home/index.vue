<template>
    <section ref="sectionRef" class="py-16 px-4 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <!-- Título principal -->
            <div class="text-center mb-12 animate-element animate-from-top" :class="{ 'animate-in': isVisible }">
                <h2 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--blue-primary)">
                    REALIDAD EDUCATIVA EN MÉXICO
                </h2>
                <p class="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    Las cifras demuestran que la educación superior es la inversión más rentable para el futuro
                    de tus hijos, pero el acceso es cada vez más competitivo.
                </p>
            </div>

            <!-- Grid de estadísticas -->
            <div ref="cardsContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Card 1: 28 de 100 -->
                <div class="stat-card animate-element card-delay-1" :class="{ 'animate-in': cardsVisible }">
                    <div class="icon-container">
                        <div class="icon-circle">
                            <svg class="w-8 h-8 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-5xl font-bold mb-2" style="color: var(--blue-primary)">28 de 100</h3>
                    <p class="text-xl font-bold mb-3">Terminan la universidad</p>
                    <p class="text-gray-600 leading-relaxed">
                        Solo el 28% de los niños que ingresan a primaria logran concluir una licenciatura.
                    </p>
                </div>

                <!-- Card 2: 70% -->
                <div class="stat-card animate-element card-delay-2" :class="{ 'animate-in': cardsVisible }">
                    <div class="icon-container">
                        <div class="icon-circle">
                            <svg class="w-8 h-8 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-5xl font-bold mb-2" style="color: var(--blue-primary)">70%</h3>
                    <p class="text-xl font-bold mb-3">Puestos Directivos</p>
                    <p class="text-gray-600 leading-relaxed">
                        De los egresados de universidades privadas ocupan puestos de gerencia o dirección.
                    </p>
                </div>

                <!-- Card 3: Top 4 -->
                <div class="stat-card animate-element card-delay-3" :class="{ 'animate-in': cardsVisible }">
                    <div class="icon-container">
                        <div class="icon-circle">
                            <svg class="w-8 h-8 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-5xl font-bold mb-2" style="color: var(--blue-primary)">Top 4</h3>
                    <p class="text-xl font-bold mb-3">Mejores Universidades</p>
                    <p class="text-gray-600 leading-relaxed">
                        El Tec de Monterrey se posiciona como la 4ta mejor universidad de Latinoamérica.
                    </p>
                </div>

                <!-- Card 4: 81% Más -->
                <div class="stat-card animate-element card-delay-4" :class="{ 'animate-in': cardsVisible }">
                    <div class="icon-container">
                        <div class="icon-circle">
                            <svg class="w-8 h-8 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-5xl font-bold mb-2" style="color: var(--blue-primary)">81% Más</h3>
                    <p class="text-xl font-bold mb-3">Ingreso Promedio</p>
                    <p class="text-gray-600 leading-relaxed">
                        Gana una persona con licenciatura comparado con quien solo tiene bachillerato.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'RealidadEducativaHome',
    setup() {
        const sectionRef = ref(null);
        const isVisible = ref(false);
        const cardsContainer = ref(null);
        const cardsVisible = ref(false);
        let observers = [];

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
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            if (sectionRef.value) {
                titleObserver.observe(sectionRef.value);
                observers.push(titleObserver);
            }

            // Observer para las cards (todas a la vez)
            const cardsObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            cardsVisible.value = true;
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -100px 0px'
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
            cardsVisible
        };
    }
}
</script>

<style scoped>
/* Cards con efectos modernos */
.stat-card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

/* Efecto de brillo en hover */
.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
}

.stat-card:hover::before {
    left: 100%;
}

/* Hover effects */
.stat-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
        0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04),
        0 0 0 3px rgba(221, 117, 57, 0.1);
}

/* Icon container */
.icon-container {
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
}

.stat-card:hover .icon-container {
    transform: scale(1.1);
}

.icon-circle {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff3ed;
    transition: all 0.3s ease;
}

.stat-card:hover .icon-circle {
    background: linear-gradient(135deg, #fff3ed 0%, #ffe4d1 100%);
    box-shadow: 0 8px 16px rgba(221, 117, 57, 0.2);
}

.icon {
    color: var(--orange-primary);
    transition: all 0.3s ease;
}

.stat-card:hover .icon {
    color: var(--orange-secondary);
    filter: drop-shadow(0 2px 4px rgba(221, 117, 57, 0.3));
}

/* Animaciones de entrada */
.animate-element {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-element.animate-from-top {
    transform: translateY(-50px);
}

.animate-element.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* Delays secuenciales para cards (izquierda a derecha) */
.card-delay-1.animate-in {
    transition-delay: 0.1s;
}

.card-delay-2.animate-in {
    transition-delay: 0.25s;
}

.card-delay-3.animate-in {
    transition-delay: 0.4s;
}

.card-delay-4.animate-in {
    transition-delay: 0.55s;
}

/* Efecto de pulso sutil en los números */
.stat-card h3 {
    transition: all 0.3s ease;
}

.stat-card:hover h3 {
    transform: scale(1.05);
    color: var(--blue-secondary) !important;
}

/* Animación de texto */
.stat-card p {
    transition: color 0.3s ease;
}

.stat-card:hover p.text-gray-600 {
    color: #4b5563;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .stat-card:hover {
        transform: translateY(-8px) scale(1.01);
    }
}

/* Animación de carga */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Efecto de brillo en el borde */
.stat-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem;
    padding: 2px;
    background: linear-gradient(135deg, transparent, var(--orange-primary), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.stat-card:hover::after {
    opacity: 0.3;
}
</style>
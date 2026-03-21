<template>
    <section ref="sectionRef" class="py-16 px-4" style="background: linear-gradient(135deg, #003399 0%, #002266 100%)">
        <div class="max-w-7xl mx-auto">
            <!-- Título -->
            <div class="text-center mb-12 animate-from-top" :class="{ 'animate-in': isVisible }">
                <h2 class="text-4xl md:text-5xl font-bold text-white">
                    Beneficios Exclusivos GNP
                </h2>
            </div>

            <!-- Grid de beneficios -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Card 1: Flexibilidad Total -->
                <div class="benefit-card card-delay-1" :class="{ 'animate-in': isVisible }">
                    <h3 class="benefit-title" style="color: var(--orange-primary)">
                        Flexibilidad Total
                    </h3>
                    <p class="benefit-description">
                        Ajusta tus aportaciones y plazos según tus necesidades.
                    </p>
                </div>

                <!-- Card 2: Garantía de Fondos -->
                <div class="benefit-card card-delay-2" :class="{ 'animate-in': isVisible }">
                    <h3 class="benefit-title" style="color: var(--orange-primary)">
                        Garantía de Fondos
                    </h3>
                    <p class="benefit-description">
                        Tu ahorro está protegido contra la inflación desde el día uno.
                    </p>
                </div>

                <!-- Card 3: Cobertura Adicional -->
                <div class="benefit-card card-delay-3" :class="{ 'animate-in': isVisible }">
                    <h3 class="benefit-title" style="color: var(--orange-primary)">
                        Cobertura Adicional
                    </h3>
                    <p class="benefit-description">
                        Incluye seguro de vida y protección por invalidez para los padres.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'BeneficiosHome',
    setup() {
        const sectionRef = ref(null);
        const isVisible = ref(false);
        let observer = null;

        onMounted(() => {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            isVisible.value = true;
                        }
                    });
                },
                {
                    threshold: 0.2,
                    rootMargin: '0px 0px -100px 0px'
                }
            );

            if (sectionRef.value) {
                observer.observe(sectionRef.value);
            }
        });

        onUnmounted(() => {
            if (observer && sectionRef.value) {
                observer.unobserve(sectionRef.value);
            }
        });

        return {
            sectionRef,
            isVisible
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

/* Cards de beneficios */
.benefit-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 1.5rem;
    padding: 2.5rem 2rem;
    text-align: center;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 0;
    transform: translateY(50px);
}

.benefit-card.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.benefit-card:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Delays escalonados */
.card-delay-1.animate-in {
    transition-delay: 0.1s;
}

.card-delay-2.animate-in {
    transition-delay: 0.25s;
}

.card-delay-3.animate-in {
    transition-delay: 0.4s;
}

/* Título del beneficio */
.benefit-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}

.benefit-card:hover .benefit-title {
    transform: scale(1.05);
}

/* Descripción del beneficio */
.benefit-description {
    color: #e0e7ff;
    font-size: 1.05rem;
    line-height: 1.6;
    transition: color 0.3s ease;
}

.benefit-card:hover .benefit-description {
    color: #ffffff;
}

/* Responsive */
@media (max-width: 768px) {
    .benefit-card {
        padding: 2rem 1.5rem;
    }
    
    .benefit-title {
        font-size: 1.5rem;
    }
    
    .benefit-description {
        font-size: 1rem;
    }
}

@media (max-width: 640px) {
    .benefit-card {
        padding: 1.75rem 1.25rem;
    }
    
    .benefit-title {
        font-size: 1.35rem;
    }
    
    .benefit-description {
        font-size: 0.95rem;
    }
}
</style>
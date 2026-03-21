<template>
    <section ref="sectionRef" class="py-16 px-4" style="background: linear-gradient(135deg, var(--orange-secondary) 0%, var(--orange-primary) 100%)">
        <div class="max-w-4xl mx-auto text-center">
            <!-- Título -->
            <div class="animate-from-bottom" :class="{ 'animate-in': isVisible }">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                    ¿Listo para asegurar su futuro?
                </h2>
            </div>

            <!-- Descripción -->
            <div class="animate-from-bottom delay-1" :class="{ 'animate-in': isVisible }">
                <p class="text-lg md:text-xl text-white mb-8 opacity-95">
                    Nuestros asesores expertos están listos para diseñar el plan perfecto para ti y tu familia.
                </p>
            </div>

            <!-- Botón CTA -->
            <div class="animate-from-bottom delay-2" :class="{ 'animate-in': isVisible }">
                <button class="cta-button">
                    Agendar Asesoría Gratuita
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'AsegurarHome',
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
                    threshold: 0.3,
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
/* Animaciones de entrada desde abajo */
.animate-from-bottom {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-from-bottom.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* Delays */
.delay-1 {
    transition-delay: 0.15s;
}

.delay-2 {
    transition-delay: 0.3s;
}

/* Botón CTA */
.cta-button {
    background: white;
    color: var(--orange-primary);
    font-size: 1.125rem;
    font-weight: 700;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.cta-button:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    background: #ffffff;
}

.cta-button:active {
    transform: translateY(-1px) scale(1.02);
}

/* Responsive */
@media (max-width: 768px) {
    .cta-button {
        font-size: 1rem;
        padding: 0.875rem 2rem;
    }
}

@media (max-width: 640px) {
    .cta-button {
        width: 100%;
        max-width: 320px;
        font-size: 0.95rem;
        padding: 0.875rem 1.5rem;
    }
}
</style>
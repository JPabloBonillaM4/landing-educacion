<template>
    <div class="content-left" :class="{ 'content-left--visible': isVisible }" ref="sectionRef">
        <!-- Main Title -->
        <h1 class="main-title">
            Invierte hoy en la <br>
            <span class="text-orange">mejor educación</span><br>
            para su futuro
        </h1>

        <!-- Subtitle -->
        <p class="subtitle">
            Brinda a tus hijos las herramientas necesarias para destacar en un mundo competitivo. Con <strong>GNP</strong>, garantizas su acceso a las mejores universidades privadas de México y el mundo.
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const sectionRef = ref(null);
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
        { threshold: 0.2 }
    );

    if (sectionRef.value) {
        observer.observe(sectionRef.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style scoped>
.content-left {
    color: #ffffff;
    max-width: 47.5%;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-left--visible {
    opacity: 1;
    transform: translateX(0);
}

/* Main Title */
.main-title {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    animation: fadeInUp 0.6s ease-out 0.1s forwards;
    opacity: 0;
}

.text-orange {
    color: var(--orange-primary);
}

/* Subtitle */
.subtitle {
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: 2rem;
    animation: fadeInUp 0.6s ease-out 0.2s forwards;
    opacity: 0;
}

.subtitle strong {
    color: #ffffff;
    font-weight: 600;
}

/* Animations */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .main-title {
        font-size: 3.5rem;
    }

    .subtitle {
        font-size: 1.15rem;
    }
}

@media (max-width: 768px) {
    .content-left {
        max-width: 100%;
        text-align: center;
    }

    .main-title {
        font-size: 3rem;
    }

    .main-title br {
        display: none;
    }

    .subtitle {
        font-size: 1.1rem;
    }
}

@media (max-width: 480px) {
    .main-title {
        font-size: 2.25rem;
        line-height: 1.15;
    }

    .main-title br {
        display: none;
    }

    .subtitle {
        font-size: 1rem;
    }
}
</style>
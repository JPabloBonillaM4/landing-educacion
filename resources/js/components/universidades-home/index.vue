<template>
    <section class="universidades-section" ref="sectionRef">
        <div class="container">
            <!-- Título -->
            <div class="section-header" :class="{ 'header-visible': isVisible }">
                <h2 class="section-title">Mejores universidades a nivel internacional</h2>
                <p class="section-subtitle">Costos anuales</p>
            </div>

            <!-- Grid de universidades y mapa -->
            <div class="map-container">
                <!-- Columna Izquierda - Universidades 1-5 -->
                <div class="info-cards-left" :class="{ 'cards-visible': isVisible }">
                    <div 
                        v-for="(uni, index) in universidadesIzquierda" 
                        :key="index"
                        class="universidad-card"
                        :class="`card-delay-${index + 1}`"
                        :style="{ borderColor: uni.color }"
                        @mouseenter="changeMap(uni.map)"
                        @mouseleave="resetMap"
                    >
                        <!-- Header con número y país -->
                        <div class="card-header" :style="{ backgroundColor: uni.color }">
                            <div class="card-title-text">{{ uni.numero }} {{ uni.pais }}</div>
                            <div class="card-subtitle-text">{{ uni.nombre }}</div>
                        </div>

                        <!-- Contenido -->
                        <div class="card-body">
                            <div class="card-cost">
                                <span class="cost-label">Costo anual:</span>
                                <span class="cost-value">{{ uni.costo }}</span>
                            </div>
                            <div class="card-recognition">
                                <span class="recognition-label">Reconocimientos:</span>
                                <p class="recognition-text">{{ uni.reconocimientos }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mapa Central -->
                <div class="map-image-container" :class="{ 'map-visible': isVisible }">
                    <transition name="fade" mode="out-in">
                        <img 
                            :key="currentMap" 
                            :src="`/assets/Map/${currentMap}`" 
                            alt="Mapa mundial"
                            class="map-image"
                        >
                    </transition>
                </div>

                <!-- Columna Derecha - Universidades 6-10 -->
                <div class="info-cards-right" :class="{ 'cards-visible': isVisible }">
                    <div 
                        v-for="(uni, index) in universidadesDerecha" 
                        :key="index"
                        class="universidad-card"
                        :class="`card-delay-${index + 1}`"
                        :style="{ borderColor: uni.color }"
                        @mouseenter="changeMap(uni.map)"
                        @mouseleave="resetMap"
                    >
                        <!-- Header con número y país -->
                        <div class="card-header" :style="{ backgroundColor: uni.color }">
                            <div class="card-title-text">{{ uni.numero }} {{ uni.pais }}</div>
                            <div class="card-subtitle-text">{{ uni.nombre }}</div>
                        </div>

                        <!-- Contenido -->
                        <div class="card-body">
                            <div class="card-cost">
                                <span class="cost-label">Costo anual:</span>
                                <span class="cost-value">{{ uni.costo }}</span>
                            </div>
                            <div class="card-recognition">
                                <span class="recognition-label">Reconocimientos:</span>
                                <p class="recognition-text">{{ uni.reconocimientos }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const currentMap = ref('map_all.png');
const isVisible = ref(false);
const sectionRef = ref(null);
let observer = null;

const universidades = [
                {
                    numero: '1.-',
                    pais: 'Estados Unidos',
                    nombre: 'Massachusetts Institute of Technology (MIT)',
                    costo: '84,000 USD',
                    reconocimientos: 'Más de 100 premios Nobel, 26 Premios Turing, fundadores de Intel, Dropbox, Qualcomm.',
                    color: '#002d7e',
                    colorClass: 'usa',
                    map: 'map_estadosunidos.png'
                },
                {
                    numero: '2.-',
                    pais: 'Inglaterra',
                    nombre: 'Imperial College London',
                    costo: '66,000 USD',
                    reconocimientos: '14 premios Nobel, pionera en avances como la penicilina y fibras ópticas.',
                    color: '#e56a29',
                    colorClass: 'england',
                    map: 'map_inglaterra.png'
                },
                {
                    numero: '3.-',
                    pais: 'Inglaterra',
                    nombre: 'University of Oxford',
                    costo: '80,000 USD',
                    reconocimientos: '28 primeros ministros británicos, más de 70 premios Nobel, 160 medallistas olímpicos.',
                    color: '#e56a29',
                    colorClass: 'england',
                    map: 'map_inglaterra.png'
                },
                {
                    numero: '4.-',
                    pais: 'Estados Unidos',
                    nombre: 'Harvard University',
                    costo: '83,000 USD',
                    reconocimientos: '8 presidentes de EE.UU., más de 160 premios Nobel, mayor número de egresados multimillonarios.',
                    color: '#002d7e',
                    colorClass: 'usa',
                    map: 'map_estadosunidos.png'
                },
                {
                    numero: '5.-',
                    pais: 'Inglaterra',
                    nombre: 'University of Cambridge',
                    costo: '86,000 USD',
                    reconocimientos: 'Más de 120 premios Nobel, 15 primeros ministros, egresados como Newton, Darwin, Hawking.',
                    color: '#e56a29',
                    colorClass: 'england',
                    map: 'map_inglaterra.png'
                },
                {
                    numero: '6.-',
                    pais: 'Estados Unidos',
                    nombre: 'Princeton University',
                    costo: '87,000 USD',
                    reconocimientos: 'Más de 65 premios Nobel, cuna de Google, HP, Netflix, Linkedin, motor de Silicon Valley.',
                    color: '#002d7e',
                    colorClass: 'usa',
                    map: 'map_estadosunidos.png'
                },
                {
                    numero: '7.-',
                    pais: 'Suiza',
                    nombre: 'ETH Zurich - Swiss Federal Institute of Technology',
                    costo: '3,520 USD',
                    reconocimientos: '22 premios Nobel, incluyendo Albert Einstein, líder europeo en ciencia e ingeniería.',
                    color: '#e38a3c',
                    colorClass: 'switzerland',
                    map: 'map_suiza.png'
                },
                {
                    numero: '8.-',
                    pais: 'Singapur',
                    nombre: 'National University of Singapore (NUS)',
                    costo: '186,360 USD',
                    reconocimientos: 'Universidad líder en Asia, egresados influyentes en gobierno, ciencia y tecnología.',
                    color: '#4896f2',
                    colorClass: 'singapore',
                    map: 'map_singapur.png'
                },
                {
                    numero: '9.-',
                    pais: 'Inglaterra',
                    nombre: 'UCL',
                    costo: '63,000 USD',
                    reconocimientos: '30 premios Nobel, primera universidad británica en admitir mujeres en igualdad de condiciones.',
                    color: '#e56a29',
                    colorClass: 'england',
                    map: 'map_inglaterra.png'
                },
                {
                    numero: '10.-',
                    pais: 'Estados Unidos',
                    nombre: 'California Institute of Technology (Caltech)',
                    costo: '65,000 USD',
                    reconocimientos: '40 premios Nobel, administra el Jet Propulsion Laboratory de la NASA.',
                    color: '#002d7e',
                    colorClass: 'usa',
                    map: 'map_estadosunidos.png'
                }
            ];

const universidadesIzquierda = computed(() => universidades.slice(0, 5));
const universidadesDerecha = computed(() => universidades.slice(5, 10));

const changeMap = (mapName) => {
    currentMap.value = mapName;
};

const resetMap = () => {
    currentMap.value = 'map_all.png';
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
.universidades-section {
    padding: 4rem 0;
    background: linear-gradient(to bottom, #f9fafb, #ffffff);
}

.container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Header */
.section-header {
    text-align: center;
    margin-bottom: 3rem;
    opacity: 0;
    transform: translateY(-30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.section-header.header-visible {
    opacity: 1;
    transform: translateY(0);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #002f86;
    margin-bottom: 0.5rem;
}

.section-subtitle {
    font-size: 1.25rem;
    color: #dd7539;
    font-style: italic;
    font-weight: 500;
}

/* Contenedor principal del mapa */
.map-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2rem;
    align-items: center;
}

/* Columnas de tarjetas */
.info-cards-left,
.info-cards-right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Animaciones de entrada - Cuadros izquierda */
.info-cards-left {
    opacity: 0;
    transform: translateX(-80px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}

.info-cards-left.cards-visible {
    opacity: 1;
    transform: translateX(0);
}

/* Animaciones de entrada - Cuadros derecha */
.info-cards-right {
    opacity: 0;
    transform: translateX(80px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}

.info-cards-right.cards-visible {
    opacity: 1;
    transform: translateX(0);
}

/* Tarjetas de universidad */
.universidad-card {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
    border: 3px solid;
}

/* Delays escalonados para tarjetas */
.cards-visible .card-delay-1 {
    animation: slideInCard 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
}

.cards-visible .card-delay-2 {
    animation: slideInCard 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
}

.cards-visible .card-delay-3 {
    animation: slideInCard 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
}

.cards-visible .card-delay-4 {
    animation: slideInCard 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
}

.cards-visible .card-delay-5 {
    animation: slideInCard 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
}

@keyframes slideInCard {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.universidad-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card-header {
    padding: 0.875rem 1.25rem;
    color: #ffffff;
}

.card-title-text {
    font-size: 0.875rem;
    font-weight: 700;
}

.card-subtitle-text {
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: 0.25rem;
    line-height: 1.3;
}

.card-body {
    padding: 1.25rem;
}

.card-cost {
    margin-bottom: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.cost-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #374151;
}

.cost-value {
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
}

.card-recognition {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.recognition-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #374151;
}

.recognition-text {
    font-size: 0.75rem;
    color: #6b7280;
    line-height: 1.5;
    margin: 0;
}

/* Contenedor del mapa */
.map-image-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    opacity: 0;
    transform: scale(0.85);
    transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
}

.map-image-container.map-visible {
    opacity: 1;
    transform: scale(1);
}

.map-image {
    width: 100%;
    height: auto;
    max-width: 700px;
    object-fit: contain;
}

/* Transición de fade para cambio de mapas */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

/* Responsive - Tablets */
@media (max-width: 1024px) {
    .map-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .info-cards-left,
    .info-cards-right {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .map-image-container {
        order: -1;
        min-height: 400px;
    }

    .section-title {
        font-size: 2rem;
    }

    .map-image {
        max-width: 600px;
    }
}

/* Responsive - Mobile */
@media (max-width: 768px) {
    .universidades-section {
        padding: 3rem 0;
    }

    .container {
        padding: 0 1rem;
    }

    .section-header {
        margin-bottom: 2rem;
    }

    .section-title {
        font-size: 1.75rem;
    }

    .section-subtitle {
        font-size: 1.1rem;
    }

    .info-cards-left,
    .info-cards-right {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }

    .universidad-card {
        padding: 0;
    }

    .card-header {
        padding: 0.75rem 1rem;
    }

    .card-title-text {
        font-size: 0.8rem;
    }

    .card-subtitle-text {
        font-size: 0.7rem;
    }

    .card-body {
        padding: 1rem;
    }

    .cost-label,
    .recognition-label {
        font-size: 0.7rem;
    }

    .cost-value {
        font-size: 0.9rem;
    }

    .recognition-text {
        font-size: 0.7rem;
    }

    .map-image-container {
        min-height: 300px;
    }

    .map-image {
        max-width: 100%;
    }
}

/* Responsive - Mobile pequeño */
@media (max-width: 480px) {
    .section-title {
        font-size: 1.5rem;
    }

    .section-subtitle {
        font-size: 1rem;
    }

    .card-header {
        padding: 0.625rem 0.875rem;
    }

    .card-title-text {
        font-size: 0.75rem;
    }

    .card-subtitle-text {
        font-size: 0.65rem;
    }

    .card-body {
        padding: 0.875rem;
    }

    .cost-label,
    .recognition-label {
        font-size: 0.65rem;
    }

    .cost-value {
        font-size: 0.85rem;
    }

    .recognition-text {
        font-size: 0.65rem;
    }
}
</style>
<template>
    <section class="universities-map-section" ref="sectionRef">
        <div class="container">
            <!-- Título de la sección -->
            <div class="section-header" :class="{ 'header-visible': isVisible }">
                <h2 class="section-title">Mejores universidades privadas a nivel nacional</h2>
                <p class="section-subtitle">Costos anuales</p>
            </div>

            <!-- Contenedor principal -->
            <div class="map-container">
                <!-- Cuadros informativos - Columna Izquierda -->
                <div class="info-cards-left" :class="{ 'cards-visible': isVisible }">
                    <!-- Pacífico -->
                    <div 
                        class="info-card card-pacifico card-delay-1"
                        @mouseenter="currentMap = 'pacifico'"
                        @mouseleave="currentMap = 'all'"
                    >
                        <h3 class="card-title">Pacífico</h3>
                        <ul class="universities-list">
                            <li>
                                <span class="university-name">Tec de Monterrey - ITESM</span>
                                <span class="university-cost">$283,070.00</span>
                            </li>
                            <li>
                                <span class="university-name">UVM- Universidad del Valle de México</span>
                                <span class="university-cost">$117,030.00</span>
                            </li>
                            <li>
                                <span class="university-name">UMA - Universidad Autónoma de Guadalajara</span>
                                <span class="university-cost">$97,000.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad Tecnilento</span>
                                <span class="university-cost">$82,072.00</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Bajío -->
                    <div 
                        class="info-card card-bajio card-delay-2"
                        @mouseenter="currentMap = 'bajio'"
                        @mouseleave="currentMap = 'all'"
                    >
                        <h3 class="card-title">Bajío</h3>
                        <ul class="universities-list">
                            <li>
                                <span class="university-name">Tec de Monterrey - ITESM</span>
                                <span class="university-cost">$275,590.00</span>
                            </li>
                            <li>
                                <span class="university-name">UP - Universidad Panamericana</span>
                                <span class="university-cost">$238,100.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad La Salle</span>
                                <span class="university-cost">$133,960.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad Tecnilento</span>
                                <span class="university-cost">$82,072.00</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Centro -->
                    <div 
                        class="info-card card-centro card-delay-3"
                        @mouseenter="currentMap = 'centro'"
                        @mouseleave="currentMap = 'all'"
                    >
                        <h3 class="card-title">Centro</h3>
                        <ul class="universities-list">
                            <li>
                                <span class="university-name">Tec de Monterrey - ITESM</span>
                                <span class="university-cost">$337,380.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad Anáhuac</span>
                                <span class="university-cost">$312,480.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad La Salle</span>
                                <span class="university-cost">$133,960.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad Tecnilento</span>
                                <span class="university-cost">$82,072.00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Mapa Central -->
                <div class="map-image-container" :class="{ 'map-visible': isVisible }">
                    <transition name="fade" mode="out-in">
                        <img 
                            :key="currentMap"
                            :src="`/assets/Mexico_map/Mexico_Map_${currentMap}.png`" 
                            :alt="`Mapa de México - ${currentMap}`"
                            class="map-image"
                        />
                    </transition>
                </div>

                <!-- Cuadros informativos - Columna Derecha -->
                <div class="info-cards-right" :class="{ 'cards-visible': isVisible }">
                    <!-- Norte -->
                    <div 
                        class="info-card card-norte card-delay-1"
                        @mouseenter="currentMap = 'norte'"
                        @mouseleave="currentMap = 'all'"
                    >
                        <h3 class="card-title">Norte</h3>
                        <ul class="universities-list">
                            <li>
                                <span class="university-name">Tec de Monterrey - ITESM</span>
                                <span class="university-cost">$283,070.00</span>
                            </li>
                            <li>
                                <span class="university-name">UVM - Universidad del Valle de México</span>
                                <span class="university-cost">$120,420.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad La Salle</span>
                                <span class="university-cost">$107,192.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad Tecnilento</span>
                                <span class="university-cost">$82,072.00</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Sureste -->
                    <div 
                        class="info-card card-sureste card-delay-2"
                        @mouseenter="currentMap = 'sureste'"
                        @mouseleave="currentMap = 'all'"
                    >
                        <h3 class="card-title">Sureste</h3>
                        <ul class="universities-list">
                            <li>
                                <span class="university-name">Universidad Anáhuac</span>
                                <span class="university-cost">$290,176.00</span>
                            </li>
                            <li>
                                <span class="university-name">UVM - Universidad del Valle de México</span>
                                <span class="university-cost">$58,800.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad La Salle</span>
                                <span class="university-cost">$180,788.00</span>
                            </li>
                            <li>
                                <span class="university-name">Universidad del Sur</span>
                                <span class="university-cost">$60,000.00</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Valle -->
                    <div 
                        class="info-card card-valle card-delay-3"
                        @mouseenter="currentMap = 'valle'"
                        @mouseleave="currentMap = 'all'"
                    >
                        <h3 class="card-title">Valle</h3>
                        <ul class="universities-list">
                            <li>
                                <span class="university-name">Tec de Monterrey - ITESM</span>
                                <span class="university-cost">$380,360.00</span>
                            </li>
                            <li>
                                <span class="university-name">UP - Universidad Panamericana</span>
                                <span class="university-cost">$329,100.00</span>
                            </li>
                            <li>
                                <span class="university-name">ITAM - Instituto Tecnológico de México</span>
                                <span class="university-cost">$321,600.00</span>
                            </li>
                            <li>
                                <span class="university-name">UVM - Universidad del Valle de México</span>
                                <span class="university-cost">$171,200.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentMap = ref('all');
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
.universities-map-section {
    padding: 4rem 0;
    overflow-x: hidden;
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
    color: #003d82;
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

/* Tarjetas de información */
.info-card {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
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

@keyframes slideInCard {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Colores de header por región */
.card-pacifico {
    border: 3px solid #f59e0b;
}

.card-pacifico .card-title {
    background-color: #f59e0b;
}

.card-pacifico:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3);
}

.card-bajio {
    border: 3px solid #ea580c;
}

.card-bajio .card-title {
    background-color: #ea580c;
}

.card-bajio:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(234, 88, 12, 0.3);
}

.card-centro {
    border: 3px solid #1e3a8a;
}

.card-centro .card-title {
    background-color: #1e3a8a;
}

.card-centro:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(30, 58, 138, 0.3);
}

.card-norte {
    border: 3px solid #2563eb;
}

.card-norte .card-title {
    background-color: #2563eb;
}

.card-norte:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
}

.card-sureste {
    border: 3px solid #dc2626;
}

.card-sureste .card-title {
    background-color: #dc2626;
}

.card-sureste:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(220, 38, 38, 0.3);
}

.card-valle {
    border: 3px solid #eab308;
}

.card-valle .card-title {
    background-color: #eab308;
}

.card-valle:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(234, 179, 8, 0.3);
}

.card-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    padding: 0.875rem 1.25rem;
    color: #ffffff;
}

.universities-list {
    list-style: none;
    padding: 1.25rem 1.25rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
}

.universities-list li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e5e7eb;
}

.universities-list li:last-child {
    border-bottom: none;
}

.university-name {
    font-size: 0.8rem;
    color: #374151;
    flex: 1;
    line-height: 1.4;
}

.university-cost {
    font-size: 0.85rem;
    font-weight: 700;
    color: #111827;
    white-space: nowrap;
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
    max-width: 600px;
    object-fit: contain;
}

/* Transición de fade */
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
        max-width: 500px;
    }
}

/* Responsive - Mobile */
@media (max-width: 768px) {
    .universities-map-section {
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

    .info-card {
        padding: 0;
    }

    .card-title {
        font-size: 1.125rem;
        margin: 0;
        padding: 0.75rem 1rem;
    }

    .universities-list {
        gap: 0.5rem;
        padding: 1rem;
    }

    .university-name {
        font-size: 0.75rem;
    }

    .university-cost {
        font-size: 0.8rem;
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

    .info-card {
        padding: 0;
    }

    .card-title {
        font-size: 1rem;
        padding: 0.625rem 0.875rem;
    }

    .universities-list {
        padding: 0.875rem;
    }

    .university-name {
        font-size: 0.7rem;
    }

    .university-cost {
        font-size: 0.75rem;
    }

    .universities-list li {
        flex-direction: column;
        gap: 0.25rem;
        align-items: flex-start;
    }

    .university-cost {
        font-size: 0.95rem;
    }
}
</style>
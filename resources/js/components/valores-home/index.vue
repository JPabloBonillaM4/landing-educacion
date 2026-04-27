<template>
    <section ref="sectionRef" class="py-16 px-4 bg-white overflow-x-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Lado Izquierdo: Texto y Estadísticas -->
                <div class="space-y-8">
                    <!-- Título -->
                    <div class="animate-from-right text-center lg:text-left" :class="{ 'animate-in': isVisible }">
                        <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: var(--blue-primary)">
                            El Verdadero Valor de la Educación
                        </h2>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            La educación no es un gasto, es la inversión con mejor retorno. Las estadísticas muestran que el nivel educativo influye directamente en la calidad de vida y los ingresos futuros.
                        </p>
                    </div>

                    <!-- Estadísticas -->
                    <div class="space-y-4">
                        <!-- 81% Mayor Ingreso -->
                        <div class="flex items-center gap-4 animate-from-right delay-1" :class="{ 'animate-in': isVisible }">
                            <div class="stat-number-box stat-box-blue">
                                <span class="stat-percentage" style="color: var(--blue-primary)">
                                    {{ animatedPercentage1 }}%
                                </span>
                            </div>
                            <div class="stat-content">
                                <h3 class="stat-title">Mayor Ingreso</h3>
                                <p class="stat-description">Un licenciado gana 81% más que alguien con solo preparatoria.</p>
                            </div>
                        </div>

                        <!-- 48% Menos Informalidad -->
                        <div class="flex items-center gap-4 animate-from-right delay-2" :class="{ 'animate-in': isVisible }">
                            <div class="stat-number-box stat-box-orange">
                                <span class="stat-percentage" style="color: var(--orange-primary)">
                                    {{ animatedPercentage2 }}%
                                </span>
                            </div>
                            <div class="stat-content">
                                <h3 class="stat-title">Menos Informalidad</h3>
                                <p class="stat-description">Se reduce casi a la mitad el riesgo de empleo informal.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Fuente -->
                    <div class="animate-from-right delay-3" :class="{ 'animate-in': isVisible }">
                        <p class="text-sm text-gray-500">Fuente: OCDE con datos de INEGI 2023</p>
                    </div>
                </div>

                <!-- Lado Derecho: Gráfico de Ingresos -->
                <div class="bg-gray-50 rounded-3xl p-8 md:p-10 animate-from-left" :class="{ 'animate-in': isVisible }">
                    <!-- Título del gráfico -->
                    <h3 class="text-2xl md:text-3xl font-bold text-center mb-8" style="color: #333">
                        Ingreso Promedio Mensual (MXN)
                    </h3>

                    <!-- Barras de progreso -->
                    <div class="space-y-8">
                        <!-- Preparatoria -->
                        <div class="income-item">
                            <div class="flex items-center justify-between mb-3">
                                <div class="flex items-center gap-3">
                                    <span class="income-dot" style="background-color: #94a3b8"></span>
                                    <span class="income-label text-gray-700">Preparatoria</span>
                                </div>
                                <span class="income-amount font-bold text-gray-700">${{ animatedIncome1.toLocaleString() }}</span>
                            </div>
                            <div class="progress-bar-bg">
                                <div class="progress-bar" 
                                     style="background-color: #94a3b8"
                                     :style="{ width: progressBar1 + '%' }"></div>
                            </div>
                        </div>

                        <!-- Licenciatura -->
                        <div class="income-item">
                            <div class="flex items-center justify-between mb-3">
                                <div class="flex items-center gap-3">
                                    <span class="income-dot" style="background-color: var(--blue-primary)"></span>
                                    <span class="income-label font-bold" style="color: var(--blue-primary)">Licenciatura</span>
                                </div>
                                <span class="income-amount font-bold" style="color: var(--blue-primary)">${{ animatedIncome2.toLocaleString() }}</span>
                            </div>
                            <div class="progress-bar-bg">
                                <div class="progress-bar" 
                                     style="background-color: var(--blue-primary)"
                                     :style="{ width: progressBar2 + '%' }"></div>
                            </div>
                        </div>

                        <!-- Posgrado -->
                        <div class="income-item">
                            <div class="flex items-center justify-between mb-3">
                                <div class="flex items-center gap-3">
                                    <span class="income-dot" style="background-color: var(--orange-primary)"></span>
                                    <span class="income-label font-bold" style="color: var(--orange-primary)">Posgrado</span>
                                </div>
                                <span class="income-amount font-bold" style="color: var(--orange-primary)">${{ animatedIncome3.toLocaleString() }}</span>
                            </div>
                            <div class="progress-bar-bg">
                                <div class="progress-bar" 
                                     style="background-color: var(--orange-primary)"
                                     :style="{ width: progressBar3 + '%' }"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Nota final -->
                    <div class="mt-8 p-4 bg-blue-50 rounded-xl text-center">
                        <p class="text-sm md:text-base font-medium" style="color: var(--blue-primary)">
                            El nivel de estudios multiplica tus oportunidades económicas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';

export default {
    name: 'ValoresHome',
    setup() {
        const sectionRef = ref(null);
        const isVisible = ref(false);
        
        // Valores animados para porcentajes
        const animatedPercentage1 = ref(0);
        const animatedPercentage2 = ref(0);
        
        // Valores animados para ingresos
        const animatedIncome1 = ref(0);
        const animatedIncome2 = ref(0);
        const animatedIncome3 = ref(0);
        
        // Valores para barras de progreso
        const progressBar1 = ref(0);
        const progressBar2 = ref(0);
        const progressBar3 = ref(0);

        // Valores objetivo
        const targetPercentage1 = 81;
        const targetPercentage2 = 48;
        const targetIncome1 = 9883;
        const targetIncome2 = 16657;
        const targetIncome3 = 24950;

        let observer = null;

        // Función para animar números
        const animateValue = (start, end, duration, callback) => {
            const startTime = performance.now();
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function (ease-out)
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(start + (end - start) * easeOut);
                
                callback(current);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        };

        // Watch para iniciar animaciones cuando sea visible
        watch(isVisible, (newValue) => {
            if (newValue) {
                // Animar porcentajes
                setTimeout(() => {
                    animateValue(0, targetPercentage1, 1500, (val) => {
                        animatedPercentage1.value = val;
                    });
                }, 200);

                setTimeout(() => {
                    animateValue(0, targetPercentage2, 1500, (val) => {
                        animatedPercentage2.value = val;
                    });
                }, 400);

                // Animar ingresos y barras
                setTimeout(() => {
                    animateValue(0, targetIncome1, 2000, (val) => {
                        animatedIncome1.value = val;
                    });
                    animateValue(0, 40, 2000, (val) => {
                        progressBar1.value = val;
                    });
                }, 300);

                setTimeout(() => {
                    animateValue(0, targetIncome2, 2000, (val) => {
                        animatedIncome2.value = val;
                    });
                    animateValue(0, 67, 2000, (val) => {
                        progressBar2.value = val;
                    });
                }, 500);

                setTimeout(() => {
                    animateValue(0, targetIncome3, 2000, (val) => {
                        animatedIncome3.value = val;
                    });
                    animateValue(0, 100, 2000, (val) => {
                        progressBar3.value = val;
                    });
                }, 700);
            }
        });

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
            isVisible,
            animatedPercentage1,
            animatedPercentage2,
            animatedIncome1,
            animatedIncome2,
            animatedIncome3,
            progressBar1,
            progressBar2,
            progressBar3
        };
    }
}
</script>

<style scoped>
/* Animaciones de entrada */
.animate-from-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-from-right.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.animate-from-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-from-left.animate-in {
    opacity: 1;
    transform: translateX(0);
}

/* Delays para elementos */
.delay-1 {
    transition-delay: 0.15s;
}

.delay-2 {
    transition-delay: 0.3s;
}

.delay-3 {
    transition-delay: 0.45s;
}

/* Caja de número de estadística */
.stat-number-box {
    width: 90px;
    height: 90px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.stat-box-blue {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.stat-box-orange {
    background: #ffe8d9;
}

.stat-percentage {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;
    display: block;
}

.stat-content {
    flex: 1;
}

.stat-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: #111827;
}

.stat-description {
    font-size: 0.95rem;
    color: #6b7280;
    line-height: 1.5;
}

/* Elementos de ingresos */
.income-item {
    animation: fadeInUp 0.6s ease-out;
}

.income-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
}

.income-label {
    font-size: 1.1rem;
}

.income-amount {
    font-size: 1.25rem;
}

/* Barras de progreso */
.progress-bar-bg {
    width: 100%;
    height: 20px;
    background-color: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    border-radius: 10px;
    transition: width 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 1024px) {
    .stat-number-box {
        width: 80px;
        height: 80px;
    }
    
    .stat-percentage {
        font-size: 1.75rem;
    }
    
    .stat-title {
        font-size: 1.1rem;
    }
    
    .stat-description {
        font-size: 0.9rem;
    }
}

@media (max-width: 640px) {
    .stat-number-box {
        width: 70px;
        height: 70px;
    }
    
    .stat-percentage {
        font-size: 1.5rem;
    }
    
    .stat-title {
        font-size: 1rem;
    }
    
    .stat-description {
        font-size: 0.85rem;
    }
    
    .income-label {
        font-size: 1rem;
    }
    
    .income-amount {
        font-size: 1.1rem;
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
</style>
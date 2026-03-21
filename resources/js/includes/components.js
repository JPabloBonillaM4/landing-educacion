import { createApp } from 'vue';
import navbarComponent from '../components/general/navbar.vue';
import footerComponent from '../components/general/footer.vue';
import whatsappContact from '../components/general/whatssapp_contact.vue';
import seoContent from '../components/general/seo-content.vue';
import bannerHome from '../components/banner-home/index.vue';
import realidadEducativaHome from '../components/realidad-educativa-home/index.vue';
import valoresHome from '../components/valores-home/index.vue';
import beneficiosHome from '../components/beneficios-home/index.vue';
import escenariosHome from '../components/escenarios-home/index.vue';
import asegurarHome from '../components/asegurar-home/index.vue';
import mapaMexicoHome from '../components/mapa-mexico-home/index.vue';
import universidadesHome from '../components/universidades-home/index.vue';

const app = createApp({
    components: {
        'navbar-component': navbarComponent,
        'footer-component': footerComponent,
        'whatsapp-contact': whatsappContact,
        'seo-content': seoContent,
        'banner-home': bannerHome,
        'realidad-educativa-home': realidadEducativaHome,
        'valores-home': valoresHome,
        'beneficios-home': beneficiosHome,
        'escenarios-home': escenariosHome,
        'asegurar-home': asegurarHome,
        'mapa-mexico-home': mapaMexicoHome,
        'universidades-home': universidadesHome
    }
});

export default app;
<template>
  <div>
    <HeroName
      page="Impacto Visual que Deja Huella"
      :images="projects"
      :sm-images="smProjects"
    />
    <div class="covering">
      <img
        src="@/assets/img/services/arquitectura.webp"
        alt="Recubrimiento Arquitectónico"
      />
      <p>
        <span>
          El impacto visual de su proyecto de inversión constructivo es un
          factor clave para la identidad y valores corporativos que se quieren
          transmitir.
        </span>
      </p>
      <p>
        La tendencia arquitectónica en fachada incluye el uso de recubrimiento
        con alto nivel de aislamiento, durabilidad y expresividad estética,
        resaltando una apariencia prestigiosa, estéticamente agradable y
        sostenible.
      </p>
      <p>
        Tenemos en cuenta aspectos claves al momento de tomar la decisión en
        cuanto a que material de fachada usar para un proyecto, tales como la
        calidad del material, el carácter que aportará al proyecto, las ventajas
        técnicas y por supuesto, el costo.
      </p>
      <p>
        Analizamos constantemente los productos y procesos a través de una
        visión verde, siendo capaces de ofrecer soluciones que cumplan con los
        más altos estándares de construcción sostenible sin sacrificar la
        funcionalidad, el precio o la practicidad.
      </p>
      <p>
        La gran variedad de opciones en revestimientos arquitectónicos puede ser
        abrumadora. Atendemos su requerimiento bien sea en estilo contemporáneo,
        vanguardista o tradicional.
      </p>
      <p>
        Trabajamos para ofrecer nuevas alternativas y oportunidades para mejorar
        la imagen de cada proyecto de nuestros clientes, permítanos asesorarle y
        brindarles la mejor solución a sus necesidades.
      </p>
      <router-link to="/contact"
        >Contáctenos ya para solicitar <br />una cotización de nuestros
        servicios</router-link
      >
    </div>
    <SubCovering />
  </div>
</template>

<script>
import { hydrateWhenVisible } from "vue-lazy-hydration";
import firebase from "firebase/app";
import "firebase/analytics";

export default {
  components: {
    HeroName: hydrateWhenVisible(() => import("@/components/HeroName.vue")),
    SubCovering: hydrateWhenVisible(() =>
      import("@/components/SubCovering.vue")
    ),
  },
  data() {
    return {
      projects: ["san-3.webp", "antes-1.webp", "antes-2.webp"],
      smProjects: ["sa-5.webp", "sa-6.webp", "mtto-1.webp", "mtto-2.webp"],
    };
  },
  mounted() {
    this.logEvent();
  },
  methods: {
    logEvent() {
      try {
        firebase.analytics().logEvent("covering_page_visited");
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/services.scss";
</style>

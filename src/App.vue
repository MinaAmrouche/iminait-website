<template>
  <div v-if="!isLoading">
    <!-- Navigation -->
    <Navigation
      :navigation="content.navigation"
      :social="content.social"
    />

    <!-- Hero Section -->
    <Hero :hero="content.hero" :social="content.social" />

    <!-- About Section -->
    <About :about="content.about" />

    <!-- Skills Section -->
    <Skills :skills="content.skills" />

    <!-- Experience Section -->
    <Experience :experience="content.experience" />

    <!-- Projects Section -->
    <Projects :projects="content.projects" />

    <!-- Contact Section -->
    <Contact :contact="content.contact" />

    <!-- Footer -->
    <Footer :footer="content.footer" :social="content.social" />
  </div>

  <!-- Loading State -->
  <div v-else class="flex min-h-screen items-center justify-center">
    <div class="text-center">
      <div
        class="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"
      ></div>
      <p class="text-gray-400">Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navigation from "./components/Navigation.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import {
  useScrollAnimations,
  usePageAnimations,
} from "./composables/useAnimations.js";
import content from "./data/content.json";

const isLoading = ref(true);

const { setupScrollAnimations, setupInteractiveEffects } =
  useScrollAnimations();
const { animatePageLoad } = usePageAnimations();

const loadContent = async () => {
  try {
    // Update page title
    document.title = content.site?.title || "IMinaIT - Mina Amrouche";

    isLoading.value = false;

    // Setup animations after content is loaded
    setTimeout(() => {
      setupScrollAnimations();
      setupInteractiveEffects();
      animatePageLoad();
    }, 100);
  } catch (error) {
    console.error("Failed to load content:", error);
    isLoading.value = false;
  }
};

onMounted(() => {
  loadContent();
});
</script>

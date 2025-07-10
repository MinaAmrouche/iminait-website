<template>
  <div v-if="!isLoading">
    <!-- Navigation -->
    <Navigation 
      :navigation="content.navigation" 
      :social="content.social"
      @toggle-mobile-menu="toggleMobileMenu"
    />

    <!-- Hero Section -->
    <Hero 
      :hero="content.hero" 
      :social="content.social"
    />

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
    <Footer 
      :footer="content.footer" 
      :social="content.social"
    />
  </div>
  
  <!-- Loading State -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
      <p class="text-gray-400">Loading...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Hero,
    About,
    Skills,
    Experience,
    Projects,
    Contact,
    Footer
  },
  setup() {
    const content = ref({})
    const isLoading = ref(true)

    const loadContent = async () => {
      try {
        const response = await fetch('./data/content.json')
        content.value = await response.json()
        
        // Update page title
        document.title = content.value.site?.title || 'IMinaIT - Mina Amrouche'
        
        isLoading.value = false
      } catch (error) {
        console.error('Failed to load content:', error)
        isLoading.value = false
      }
    }

    const toggleMobileMenu = () => {
      // Mobile menu toggle logic will be handled in Navigation component
    }

    onMounted(() => {
      loadContent()
    })

    return {
      content,
      isLoading,
      toggleMobileMenu
    }
  }
}
</script>
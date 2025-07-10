<template>
  <nav
    ref="navbar"
    class="safe-area-inset-top fixed left-0 right-0 top-0 z-50 transition-all duration-300"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex min-h-[60px] items-center justify-between">
        <div class="flex items-center space-x-4">
          <img
            src="images/iminait-logo.svg"
            alt="IMinaIT Logo"
            class="h-8 w-8 sm:h-10 sm:w-10"
          />
          <div class="flex flex-col">
            <span
              class="bg-gradient-to-r from-primary to-secondary bg-clip-text font-mono text-lg font-bold text-transparent sm:text-xl"
            >
              {{ navigation.logo?.text || 'IMinaIT' }}
            </span>
            <span
              class="hidden text-xs font-medium text-gray-400 sm:block"
            >
              {{ navigation.logo?.subtitle || 'by Mina Amrouche' }}
            </span>
          </div>
        </div>

        <div class="hidden items-center space-x-6 md:flex lg:space-x-8">
          <a
            v-for="link in navigation.links"
            :key="link.href"
            :href="link.href"
            class="nav-link"
            @click="smoothScroll"
          >
            {{ link.text }}
          </a>
        </div>

        <button
          @click="toggleMobileMenu"
          class="-mr-2 touch-manipulation p-2 text-light md:hidden"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="safe-area-inset-bottom border-t border-primary/20 bg-dark-secondary/95 backdrop-blur-md md:hidden"
    >
      <div class="container mx-auto space-y-4 px-6 py-4">
        <a
          v-for="link in navigation.links"
          :key="link.href"
          :href="link.href"
          class="block nav-link py-3 text-lg touch-manipulation"
          @click="closeMobileMenu"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default {
  name: 'Navigation',
  props: {
    navigation: {
      type: Object,
      default: () => ({})
    },
    social: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const navbar = ref(null)
    const isMobileMenuOpen = ref(false)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.value?.classList.add('bg-dark/95', 'backdrop-blur-md', 'shadow-glow')
      } else {
        navbar.value?.classList.remove('bg-dark/95', 'backdrop-blur-md', 'shadow-glow')
      }
    }

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }

    const smoothScroll = (event) => {
      event.preventDefault()
      const target = document.querySelector(event.target.getAttribute('href'))
      if (target) {
        const offsetTop = target.offsetTop - 80
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: offsetTop, autoKill: false },
          ease: 'power3.inOut'
        })
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      navbar,
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
      smoothScroll
    }
  }
}
</script>
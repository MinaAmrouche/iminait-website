<template>
  <section
    id="hero"
    class="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-12 sm:px-6 lg:pb-0"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-dark-secondary"></div>

    <!-- Soft Floating Elements -->
    <div class="absolute inset-0 hidden overflow-hidden sm:block">
      <div
        v-for="(element, index) in floatingElements"
        :key="index"
        :class="element.class"
        :style="element.style"
      ></div>
    </div>

    <div class="container relative z-10 mx-auto w-full">
      <div class="mt-20 grid items-center gap-8 lg:mt-0 lg:grid-cols-2 lg:gap-12">
        <div class="order-2 text-center lg:order-1 lg:text-left">
          <div class="mb-8">
            <p class="mb-3 text-base font-medium text-primary/80 sm:text-lg">
              {{ hero.greeting || 'Hi, I\'m' }}
            </p>
            <h1 class="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              <span class="bg-gradient-to-r from-light via-primary to-secondary bg-clip-text text-transparent">
                {{ hero.name?.first || 'Mina' }}
              </span>
              <span class="block bg-gradient-to-r from-secondary via-cyan to-primary bg-clip-text text-transparent sm:inline lg:block xl:inline">
                {{ hero.name?.last || 'Amrouche' }}
              </span>
            </h1>
            <div class="mb-4 text-lg text-primary/90 sm:text-xl lg:text-2xl">
              <span class="font-mono">{{ currentTypedText }}</span>
              <span class="animate-pulse text-secondary">|</span>
            </div>
            <p class="text-base font-medium text-secondary/80 sm:text-lg">
              {{ hero.subtitle || 'Founder of' }}
              <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent">
                IMinaIT
              </span>
            </p>
          </div>

          <p class="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0 lg:mb-10">
            {{ hero.description || '' }}
          </p>

          <div class="mb-8 flex flex-col justify-center gap-4 sm:flex-row lg:mb-10 lg:justify-start">
            <a :href="'#projects'" class="btn-primary">
              {{ hero.buttons?.primary || 'See Our Work' }}
            </a>
            <a :href="'#contact'" class="btn-secondary">
              {{ hero.buttons?.secondary || 'Work With Us' }}
            </a>
          </div>

          <div class="flex justify-center lg:justify-start">
            <a
              v-if="social.github"
              :href="social.github"
              target="_blank"
              class="social-link"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              v-if="social.linkedin"
              :href="social.linkedin"
              target="_blank"
              class="social-link"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="relative order-1 mb-8 lg:order-2 lg:mb-0">
          <HeroIllustration />
        </div>
      </div>
    </div>

    <!-- Scroll down arrow -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 transform animate-bounce lg:bottom-8">
      <a href="#about" class="text-primary transition-colors hover:text-secondary">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import HeroIllustration from './HeroIllustration.vue'

export default {
  name: 'Hero',
  components: {
    HeroIllustration
  },
  props: {
    hero: {
      type: Object,
      default: () => ({})
    },
    social: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const currentTypedText = ref('')
    const currentIndex = ref(0)
    const currentText = ref('')
    const isDeleting = ref(false)

    const typedTexts = computed(() => {
      return props.hero.typedTexts || [
        'Frontend Specialist',
        'React & Vue Expert',
        'Software Engineer',
        'Creative Problem Solver',
        'Technical Leader'
      ]
    })

    const floatingElements = [
      {
        class: 'floating-element absolute left-10 top-20 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl',
        style: ''
      },
      {
        class: 'floating-element to-lavender/20 absolute right-20 top-40 h-24 w-24 rounded-full bg-gradient-to-br from-secondary/20 blur-lg',
        style: 'animation-delay: -2s'
      },
      {
        class: 'floating-element from-lavender/20 absolute bottom-40 left-20 h-40 w-40 rounded-full bg-gradient-to-br to-primary/20 blur-2xl',
        style: 'animation-delay: -4s'
      },
      {
        class: 'floating-element absolute bottom-20 right-10 h-20 w-20 rounded-full bg-gradient-to-br from-rose/20 to-accent/20 blur-lg',
        style: 'animation-delay: -1s'
      },
      {
        class: 'floating-element absolute left-1/4 top-1/2 h-16 w-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-md',
        style: 'animation-delay: -3s'
      }
    ]

    const typeSpeed = 80
    const deleteSpeed = 40
    const pauseTime = 2500

    const type = () => {
      const fullText = typedTexts.value[currentIndex.value]

      if (isDeleting.value) {
        currentText.value = fullText.substring(0, currentText.value.length - 1)
      } else {
        currentText.value = fullText.substring(0, currentText.value.length + 1)
      }

      currentTypedText.value = currentText.value

      let speed = isDeleting.value ? deleteSpeed : typeSpeed

      if (!isDeleting.value && currentText.value === fullText) {
        speed = pauseTime
        isDeleting.value = true
      } else if (isDeleting.value && currentText.value === '') {
        isDeleting.value = false
        currentIndex.value = (currentIndex.value + 1) % typedTexts.value.length
        speed = 500
      }

      setTimeout(type, speed)
    }

    onMounted(() => {
      type()
    })

    return {
      currentTypedText,
      floatingElements
    }
  }
}
</script>
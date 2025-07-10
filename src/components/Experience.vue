<template>
  <section id="experience" class="bg-dark-secondary py-20">
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="section-title">{{ experience.title || 'Professional Journey' }}</h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          {{ experience.subtitle || '' }}
        </p>
      </div>

      <div class="mx-auto max-w-4xl">
        <div class="relative">
          <div class="to-lavender absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary"></div>

          <div class="space-y-12">
            <div
              v-for="(position, index) in experience.positions"
              :key="index"
              class="experience-item"
            >
              <div class="flex items-start space-x-6">
                <div :class="getIconContainerClass(index)">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="getIconPath(index)" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-light">{{ position.title }}</h3>
                  <p :class="getCompanyClass(index)">{{ position.company }} • {{ position.period }}</p>
                  <p class="text-gray-300 mt-2">{{ position.description }}</p>
                  <ul class="mt-4 space-y-2 text-gray-400">
                    <li v-for="achievement in position.achievements" :key="achievement">
                      • {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  props: {
    experience: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const icons = [
      "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    ]

    const gradients = [
      'from-primary to-secondary',
      'from-secondary to-indigo'
    ]

    const colors = ['primary', 'secondary']

    const getIconContainerClass = (index) => {
      return `flex-shrink-0 w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center shadow-glow`
    }

    const getCompanyClass = (index) => {
      return `text-${colors[index]} font-medium`
    }

    const getIconPath = (index) => {
      return icons[index]
    }

    return {
      getIconContainerClass,
      getCompanyClass,
      getIconPath
    }
  }
}
</script>
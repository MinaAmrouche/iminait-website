<template>
  <section id="projects" class="bg-dark py-20">
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="section-title">{{ projects.title || 'Featured Projects' }}</h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          {{ projects.subtitle || '' }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, index) in projects.items"
          :key="index"
          class="project-card group"
        >
          <div class="project-image">
            <div :class="getProjectImageClass(index)">
              <component :is="getIconComponent(index)" class="w-12 sm:w-16 h-12 sm:h-16 text-white" />
            </div>
          </div>
          <div class="p-4 sm:p-6">
            <h3 class="text-lg sm:text-xl font-bold text-light mb-3">{{ project.title }}</h3>
            <p class="text-sm sm:text-base text-gray-400 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1 sm:gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex space-x-3 sm:space-x-4">
              <a href="#" :class="getLinkClass(index)">
                <GithubIcon class="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" :class="getLinkClass(index)">
                <ExternalLinkIcon class="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CheckCircleIcon from '../assets/icons/check-circle.svg?component'
import StarIcon from '../assets/icons/star.svg?component'
import GithubIcon from '../assets/icons/github.svg?component'
import ExternalLinkIcon from '../assets/icons/external-link.svg?component'

const props = defineProps({
  projects: {
    type: Object,
    default: () => ({})
  }
})

const icons = [CheckCircleIcon, StarIcon, CheckCircleIcon]

const gradients = [
  'from-primary to-secondary',
  'from-secondary to-indigo',
  'from-indigo to-accent'
]

const colors = ['primary', 'secondary', 'indigo']

const getProjectImageClass = (index) => {
  return `bg-gradient-to-br ${gradients[index]} h-40 sm:h-48 rounded-t-2xl flex items-center justify-center`
}

const getLinkClass = (index) => {
  return `text-${colors[index]} hover:text-secondary transition-colors`
}

const getIconComponent = (index) => {
  return icons[index]
}
</script>
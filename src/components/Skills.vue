<template>
  <section id="skills" class="bg-dark py-20">
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="section-title">{{ skills.title || 'Technical Skills' }}</h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          {{ skills.subtitle || '' }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        <div
          v-for="(category, index) in skills.categories"
          :key="index"
          class="skill-category group"
        >
          <div :class="getIconClass(index)">
            <component :is="getIconComponent(index)" class="w-6 sm:w-8 h-6 sm:h-8 text-white" />
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-light mb-3 sm:mb-4">{{ category.title }}</h3>
          <ul class="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
            <li v-for="skill in category.skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HtmlIcon from '../assets/icons/html.svg'
import JavascriptIcon from '../assets/icons/javascript.svg'
import ReactIcon from '../assets/icons/react.svg'
import GithubIcon from '../assets/icons/github.svg'

const props = defineProps({
  skills: {
    type: Object,
    default: () => ({})
  }
})

const icons = [HtmlIcon, JavascriptIcon, ReactIcon, GithubIcon]

const gradients = [
  'from-primary to-secondary',
  'from-secondary to-indigo',
  'from-indigo to-accent',
  'from-accent to-primary'
]

const getIconClass = (index) => {
  return `skill-icon bg-gradient-to-br ${gradients[index]}`
}

const getIconComponent = (index) => {
  return icons[index]
}
</script>
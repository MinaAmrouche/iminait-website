<template>
  <section id="contact" class="bg-dark-secondary py-20">
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="section-title">{{ contact.title || 'Let\'s Create Together' }}</h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          {{ contact.subtitle || '' }}
        </p>
      </div>

      <div class="mx-auto max-w-4xl">
        <div class="grid gap-12 lg:grid-cols-2">
          <div class="space-y-8">
            <div>
              <h3 class="mb-6 bg-gradient-to-r from-light to-primary bg-clip-text text-2xl font-bold text-transparent">
                {{ contact.mainTitle || 'Get In Touch' }}
              </h3>
              <p class="mb-8 text-gray-300">
                {{ contact.description || '' }}
              </p>
            </div>

            <div class="space-y-6">
              <div
                v-for="(method, index) in contact.contactMethods"
                :key="index"
                class="flex items-center space-x-4"
              >
                <div :class="getMethodIconClass(index)">
                  <component :is="getMethodIconComponent(index)" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-light">{{ method.title }}</h4>
                  <a
                    :href="method.href"
                    :target="method.href.includes('http') ? '_blank' : ''"
                    :class="getMethodLinkClass(index)"
                  >
                    {{ method.value }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-4xl border border-primary/20 bg-dark p-8 shadow-soft">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-light mb-2">
                  {{ contact.form?.fields?.name?.label || 'Name' }}
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="w-full px-4 py-3 bg-dark-secondary border border-primary/30 rounded-xl text-light placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all touch-manipulation"
                  :placeholder="contact.form?.fields?.name?.placeholder || 'Your full name'"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-light mb-2">
                  {{ contact.form?.fields?.email?.label || 'Email' }}
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 bg-dark-secondary border border-primary/30 rounded-xl text-light placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all touch-manipulation"
                  :placeholder="contact.form?.fields?.email?.placeholder || 'your.email@example.com'"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-light mb-2">
                  {{ contact.form?.fields?.subject?.label || 'Subject' }}
                </label>
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  class="w-full px-4 py-3 bg-dark-secondary border border-primary/30 rounded-xl text-light placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all touch-manipulation"
                  :placeholder="contact.form?.fields?.subject?.placeholder || 'Project inquiry'"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-light mb-2">
                  {{ contact.form?.fields?.message?.label || 'Message' }}
                </label>
                <textarea
                  v-model="form.message"
                  id="message"
                  name="message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 bg-dark-secondary border border-primary/30 rounded-xl text-light placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none touch-manipulation"
                  :placeholder="contact.form?.fields?.message?.placeholder || 'Tell me about your project...'"
                ></textarea>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                :class="getSubmitButtonClass()"
                class="w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark touch-manipulation"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <SpinnerIcon class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  {{ contact.form?.loadingText || 'Sending...' }}
                </span>
                <span v-else-if="isSuccess" class="flex items-center justify-center">
                  <CheckIcon class="w-5 h-5 mr-2" />
                  {{ contact.form?.successText || 'Message Sent!' }}
                </span>
                <span v-else>
                  {{ contact.form?.submitButton || 'Send Message' }}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import EmailIcon from '../assets/icons/email.svg'
import PhoneIcon from '../assets/icons/phone.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'
import SpinnerIcon from '../assets/icons/spinner.svg'
import CheckIcon from '../assets/icons/check.svg'

const props = defineProps({
  contact: {
    type: Object,
    default: () => ({})
  }
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const icons = [EmailIcon, PhoneIcon, LinkedinIcon]

const gradients = [
  'from-primary to-secondary',
  'from-secondary to-indigo',
  'from-indigo to-accent'
]

const colors = ['primary', 'secondary', 'indigo']

const getMethodIconClass = (index) => {
  return `w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center shadow-glow`
}

const getMethodLinkClass = (index) => {
  return `text-gray-400 hover:text-${colors[index]} transition-colors`
}

const getMethodIconComponent = (index) => {
  return icons[index]
}

const getSubmitButtonClass = () => {
  if (isSuccess.value) {
    return 'bg-gradient-to-r from-green-500 to-green-600 text-white'
  }
  return 'bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-indigo text-white'
}

const handleSubmit = () => {
  isSubmitting.value = true
  
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    
    // Reset form after success
    setTimeout(() => {
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
      isSuccess.value = false
    }, 3000)
  }, 2000)
}
</script>
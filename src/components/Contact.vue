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
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="getMethodIconPath(index)" />
                  </svg>
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
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ contact.form?.loadingText || 'Sending...' }}
                </span>
                <span v-else-if="isSuccess" class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
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
import { ref, reactive } from 'vue'

export default {
  name: 'Contact',
  props: {
    contact: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const isSubmitting = ref(false)
    const isSuccess = ref(false)

    const icons = [
      "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z",
      "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    ]

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

    const getMethodIconPath = (index) => {
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

    return {
      form,
      isSubmitting,
      isSuccess,
      getMethodIconClass,
      getMethodLinkClass,
      getMethodIconPath,
      getSubmitButtonClass,
      handleSubmit
    }
  }
}
</script>
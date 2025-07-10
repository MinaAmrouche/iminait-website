<template>
  <section id="contact" class="bg-dark-secondary py-20">
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="section-title">
          {{ contact.title }}
        </h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          {{ contact.subtitle }}
        </p>
      </div>

      <div class="mx-auto max-w-4xl">
        <div class="grid gap-12 lg:grid-cols-2">
          <div class="space-y-8">
            <div>
              <h3
                class="from-light to-primary mb-6 bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent"
              >
                {{ contact.mainTitle }}
              </h3>
              <p class="mb-8 text-gray-300">
                {{ contact.description }}
              </p>
            </div>

            <div class="space-y-6">
              <div
                v-for="(method, index) in contact.contactMethods"
                :key="index"
                class="flex items-center space-x-4"
              >
                <div :class="getMethodIconClass(index)">
                  <component
                    :is="getMethodIconComponent(index)"
                    class="h-6 w-6 text-white"
                  />
                </div>
                <div>
                  <h4 class="text-light font-bold">{{ method.title }}</h4>
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

          <div
            class="border-primary/20 bg-dark shadow-soft rounded-4xl border p-8"
          >
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label
                  for="name"
                  class="text-light mb-2 block text-sm font-medium"
                >
                  {{ contact.form?.fields?.name?.label }}
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="border-primary/30 bg-dark-secondary text-light focus:border-primary focus:ring-primary/20 w-full touch-manipulation rounded-xl border px-4 py-3 placeholder-gray-400 transition-all focus:ring-2 focus:outline-hidden"
                  :placeholder="contact.form?.fields?.name?.placeholder"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="text-light mb-2 block text-sm font-medium"
                >
                  {{ contact.form?.fields?.email?.label }}
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="border-primary/30 bg-dark-secondary text-light focus:border-primary focus:ring-primary/20 w-full touch-manipulation rounded-xl border px-4 py-3 placeholder-gray-400 transition-all focus:ring-2 focus:outline-hidden"
                  :placeholder="contact.form?.fields?.email?.placeholder"
                />
              </div>

              <div>
                <label
                  for="subject"
                  class="text-light mb-2 block text-sm font-medium"
                >
                  {{ contact.form?.fields?.subject?.label }}
                </label>
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  class="border-primary/30 bg-dark-secondary text-light focus:border-primary focus:ring-primary/20 w-full touch-manipulation rounded-xl border px-4 py-3 placeholder-gray-400 transition-all focus:ring-2 focus:outline-hidden"
                  :placeholder="contact.form?.fields?.subject?.placeholder"
                />
              </div>

              <div>
                <label
                  for="message"
                  class="text-light mb-2 block text-sm font-medium"
                >
                  {{ contact.form?.fields?.message?.label }}
                </label>
                <textarea
                  v-model="form.message"
                  id="message"
                  name="message"
                  rows="5"
                  required
                  class="border-primary/30 bg-dark-secondary text-light focus:border-primary focus:ring-primary/20 w-full touch-manipulation resize-none rounded-xl border px-4 py-3 placeholder-gray-400 transition-all focus:ring-2 focus:outline-hidden"
                  :placeholder="contact.form?.fields?.message?.placeholder"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                :class="getSubmitButtonClass()"
                class="shadow-glow focus:ring-primary focus:ring-offset-dark w-full transform touch-manipulation rounded-xl px-6 py-3 font-bold transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-hidden cursor-pointer"
              >
                <span
                  v-if="isSubmitting"
                  class="flex items-center justify-center"
                >
                  <SpinnerIcon
                    class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                  />
                  {{ contact.form?.loadingText }}
                </span>
                <span
                  v-else-if="isSuccess"
                  class="flex items-center justify-center"
                >
                  <CheckIcon class="mr-2 h-5 w-5" />
                  {{ contact.form?.successText }}
                </span>
                <span v-else>
                  {{ contact.form?.submitButton }}
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
import { ref, reactive } from "vue";
import EmailIcon from "../assets/icons/email.svg?component";
import PhoneIcon from "../assets/icons/phone.svg?component";
import LinkedinIcon from "../assets/icons/linkedin.svg?component";
import SpinnerIcon from "../assets/icons/spinner.svg?component";
import CheckIcon from "../assets/icons/check.svg?component";
import MaltIcon from "../assets/icons/malt.svg?component";

const props = defineProps({
  contact: {
    type: Object,
    default: () => ({}),
  },
});

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const isSuccess = ref(false);

const icons = [EmailIcon, PhoneIcon, LinkedinIcon, MaltIcon];

const gradients = [
  "from-primary to-secondary",
  "from-secondary to-indigo",
  "from-indigo to-accent",
  "from-accent to-primary",
];

const colors = ["primary", "secondary", "indigo"];

const getMethodIconClass = (index) => {
  return `w-12 h-12 bg-linear-to-br ${gradients[index]} rounded-xl flex items-center justify-center shadow-glow`;
};

const getMethodLinkClass = (index) => {
  return `text-gray-400 hover:text-${colors[index]} transition-colors`;
};

const getMethodIconComponent = (index) => {
  return icons[index];
};

const getSubmitButtonClass = () => {
  if (isSuccess.value) {
    return "bg-linear-to-r from-green-500 to-green-600 text-white";
  }
  return "bg-linear-to-r from-primary to-secondary hover:from-secondary hover:to-indigo text-white";
};

const handleSubmit = () => {
  isSubmitting.value = true;

  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false;
    isSuccess.value = true;

    // Reset form after success
    setTimeout(() => {
      Object.keys(form).forEach((key) => {
        form[key] = "";
      });
      isSuccess.value = false;
    }, 3000);
  }, 2000);
};
</script>

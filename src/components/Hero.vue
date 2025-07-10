<template>
  <section
    id="hero"
    class="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-12 sm:px-6 lg:pb-0"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-dark-secondary"
    ></div>

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
      <div
        class="mt-20 grid items-center gap-8 lg:mt-0 lg:grid-cols-2 lg:gap-12"
      >
        <div class="order-2 text-center lg:order-1 lg:text-left">
          <div class="mb-8">
            <p class="mb-3 text-base font-medium text-primary/80 sm:text-lg">
              {{ hero.greeting || "Hi, I'm" }}
            </p>
            <h1
              class="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl"
            >
              <span
                class="bg-gradient-to-r from-light via-primary to-secondary bg-clip-text text-transparent"
              >
                {{ hero.name?.first || "Mina" }}
              </span>
              <span
                class="block bg-gradient-to-r from-secondary via-cyan to-primary bg-clip-text text-transparent sm:inline lg:block xl:inline"
              >
                {{ hero.name?.last || "Amrouche" }}
              </span>
            </h1>
            <div class="mb-4 text-lg text-primary/90 sm:text-xl lg:text-2xl">
              <span class="font-mono">{{ currentTypedText }}</span>
              <span class="animate-pulse text-secondary">|</span>
            </div>
            <p class="text-base font-medium text-secondary/80 sm:text-lg">
              {{ hero.subtitle || "Founder of" }}
              <span
                class="bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent"
              >
                IMinaIT
              </span>
            </p>
          </div>

          <p
            class="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0 lg:mb-10"
          >
            {{ hero.description || "" }}
          </p>

          <div
            class="mb-8 flex flex-col justify-center gap-4 sm:flex-row lg:mb-10 lg:justify-start"
          >
            <a :href="'#projects'" class="btn-primary">
              {{ hero.buttons?.primary || "See Our Work" }}
            </a>
            <a :href="'#contact'" class="btn-secondary">
              {{ hero.buttons?.secondary || "Work With Us" }}
            </a>
          </div>

          <div class="flex justify-center lg:justify-start">
            <a
              v-if="social.github"
              :href="social.github"
              target="_blank"
              class="social-link"
            >
              <GithubIcon class="h-6 w-6" />
            </a>
            <a
              v-if="social.linkedin"
              :href="social.linkedin"
              target="_blank"
              class="social-link"
            >
              <LinkedinIcon class="h-6 w-6" />
            </a>
          </div>
        </div>

        <div class="relative order-1 mb-8 lg:order-2 lg:mb-0">
          <HeroIllustration />
        </div>
      </div>
    </div>

    <!-- Scroll down arrow -->
    <div
      class="absolute bottom-2 left-1/2 -translate-x-1/2 transform animate-bounce lg:bottom-8"
    >
      <a
        href="#about"
        class="text-primary transition-colors hover:text-secondary"
      >
        <ArrowDownIcon class="h-6 w-6" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import HeroIllustration from "./HeroIllustration.vue";
import GithubIcon from "../assets/icons/github.svg?component";
import LinkedinIcon from "../assets/icons/linkedin.svg?component";
import ArrowDownIcon from "../assets/icons/arrow-down.svg?component";

const props = defineProps({
  hero: {
    type: Object,
    default: () => ({}),
  },
  social: {
    type: Object,
    default: () => ({}),
  },
});

const currentTypedText = ref("");
const currentIndex = ref(0);
const currentText = ref("");
const isDeleting = ref(false);

const typedTexts = computed(() => {
  return (
    props.hero.typedTexts || [
      "Frontend Specialist",
      "React & Vue Expert",
      "Software Engineer",
      "Creative Problem Solver",
      "Technical Leader",
    ]
  );
});

const floatingElements = [
  {
    class:
      "floating-element absolute left-10 top-20 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl",
    style: "",
  },
  {
    class:
      "floating-element to-lavender/20 absolute right-20 top-40 h-24 w-24 rounded-full bg-gradient-to-br from-secondary/20 blur-lg",
    style: "animation-delay: -2s",
  },
  {
    class:
      "floating-element from-lavender/20 absolute bottom-40 left-20 h-40 w-40 rounded-full bg-gradient-to-br to-primary/20 blur-2xl",
    style: "animation-delay: -4s",
  },
  {
    class:
      "floating-element absolute bottom-20 right-10 h-20 w-20 rounded-full bg-gradient-to-br from-rose/20 to-accent/20 blur-lg",
    style: "animation-delay: -1s",
  },
  {
    class:
      "floating-element absolute left-1/4 top-1/2 h-16 w-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-md",
    style: "animation-delay: -3s",
  },
];

const typeSpeed = 80;
const deleteSpeed = 40;
const pauseTime = 2500;

const type = () => {
  const fullText = typedTexts.value[currentIndex.value];

  if (isDeleting.value) {
    currentText.value = fullText.substring(0, currentText.value.length - 1);
  } else {
    currentText.value = fullText.substring(0, currentText.value.length + 1);
  }

  currentTypedText.value = currentText.value;

  let speed = isDeleting.value ? deleteSpeed : typeSpeed;

  if (!isDeleting.value && currentText.value === fullText) {
    speed = pauseTime;
    isDeleting.value = true;
  } else if (isDeleting.value && currentText.value === "") {
    isDeleting.value = false;
    currentIndex.value = (currentIndex.value + 1) % typedTexts.value.length;
    speed = 500;
  }

  setTimeout(type, speed);
};

onMounted(() => {
  type();
});
</script>

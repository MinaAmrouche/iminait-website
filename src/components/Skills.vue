<template>
  <section id="skills" class="bg-dark py-20">
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="section-title">{{ skills.title }}</h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          {{ skills.subtitle }}
        </p>
      </div>

      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4"
      >
        <div
          v-for="(category, index) in skills.categories"
          :key="index"
          class="skill-category group"
        >
          <div :class="getIconClass(index)">
            <component
              :is="getIconComponent(index)"
              class="h-6 w-6 text-white sm:h-8 sm:w-8"
            />
          </div>
          <h3 class="text-light mb-3 text-lg font-bold sm:mb-4 sm:text-xl">
            {{ category.title }}
          </h3>
          <ul class="space-y-1 text-sm text-gray-400 sm:space-y-2 sm:text-base">
            <li v-for="skill in category.skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HtmlIcon from "../assets/icons/html.svg";
import StackIcon from "../assets/icons/stack.svg";
import CloudIcon from "../assets/icons/cloud.svg";
import GithubIcon from "../assets/icons/github.svg";

const props = defineProps({
  skills: {
    type: Object,
    default: () => ({}),
  },
});

const icons = [HtmlIcon, StackIcon, CloudIcon, GithubIcon];

const gradients = [
  "from-primary to-secondary",
  "from-secondary to-indigo",
  "from-indigo to-accent",
  "from-accent to-primary",
];

const getIconClass = (index) => {
  return `skill-icon bg-gradient-to-br ${gradients[index]}`;
};

const getIconComponent = (index) => {
  return icons[index];
};
</script>

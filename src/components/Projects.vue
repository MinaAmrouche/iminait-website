<template>
  <section id="projects" class="bg-dark py-20">
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="section-title">
          {{ projects.title }}
        </h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          {{ projects.subtitle }}
        </p>
      </div>

      <div
        class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(project, index) in projects.items"
          :key="index"
          class="project-card group flex flex-col"
        >
          <div class="project-image">
            <div :class="getProjectImageClass(index)">
              <component
                :is="getIconComponent(index)"
                class="h-12 w-12 text-white sm:h-16 sm:w-16"
              />
            </div>
          </div>
          <div class="flex h-full flex-col justify-between p-4 sm:p-6">
            <div>
              <h3 class="text-light mb-3 text-lg font-bold sm:text-xl">
                {{ project.title }}
              </h3>
              <p class="mb-4 text-sm text-gray-400 sm:text-base">
                {{ project.description }}
              </p>
            </div>
            <div>
              <div class="mb-4 flex flex-wrap gap-1 sm:gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="flex space-x-3 sm:space-x-4">
                <a
                  :href="project.link"
                  target="_blank"
                  :class="getLinkClass(index)"
                  v-if="project.link"
                >
                  <ExternalLinkIcon class="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CheckCircleIcon from "../assets/icons/check-circle.svg?component";
import StarIcon from "../assets/icons/star.svg?component";
import GithubIcon from "../assets/icons/github.svg?component";
import ExternalLinkIcon from "../assets/icons/external-link.svg?component";

const props = defineProps({
  projects: {
    type: Object,
    default: () => ({}),
  },
});

const icons = [CheckCircleIcon, StarIcon, CheckCircleIcon];

const gradients = [
  "from-primary to-secondary",
  "from-secondary to-indigo",
  "from-indigo to-accent",
];

const colors = ["primary", "secondary", "indigo"];

const getProjectImageClass = (index) => {
  return `bg-linear-to-br ${gradients[index]} h-40 sm:h-48 rounded-t-2xl flex items-center justify-center`;
};

const getLinkClass = (index) => {
  return `text-${colors[index]} hover:text-secondary transition-colors`;
};

const getIconComponent = (index) => {
  return icons[index];
};
</script>

<template>
  <section id="experience" class="bg-dark-secondary py-20">
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="section-title">
          {{ experience.title || "Professional Journey" }}
        </h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          {{ experience.subtitle || "" }}
        </p>
      </div>

      <div class="mx-auto max-w-4xl">
        <div class="relative">
          <div
            class="to-lavender absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary"
          ></div>

          <div class="space-y-12">
            <div
              v-for="(position, index) in experience.positions"
              :key="index"
              class="experience-item"
            >
              <div class="flex items-start space-x-6">
                <div :class="getIconContainerClass(index)">
                  <component
                    :is="getIconComponent(index)"
                    class="h-8 w-8 text-white"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-light">
                    {{ position.title }}
                  </h3>
                  <p :class="getCompanyClass(index)">
                    {{ position.company }} • {{ position.period }}
                  </p>
                  <p class="mt-2 text-gray-300">{{ position.description }}</p>
                  <ul class="mt-4 space-y-2 text-gray-400">
                    <li
                      v-for="achievement in position.achievements"
                      :key="achievement"
                    >
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

<script setup>
import StarIcon from "../assets/icons/star.svg?component";
import CheckCircleIcon from "../assets/icons/check-circle.svg?component";

const props = defineProps({
  experience: {
    type: Object,
    default: () => ({}),
  },
});

const icons = [StarIcon, CheckCircleIcon];

const gradients = ["from-primary to-secondary", "from-secondary to-indigo"];

const colors = ["primary", "secondary"];

const getIconContainerClass = (index) => {
  return `flex-shrink-0 w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center shadow-glow`;
};

const getCompanyClass = (index) => {
  return `text-${colors[index]} font-medium`;
};

const getIconComponent = (index) => {
  return icons[index];
};
</script>

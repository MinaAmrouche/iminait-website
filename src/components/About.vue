<template>
  <section id="about" class="bg-dark-secondary py-20">
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="section-title">{{ about.title }}</h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          {{ about.subtitle }}
        </p>
      </div>

      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="relative">
          <div class="relative z-10">
            <img
              src="/images/profile-pic.webp"
              alt="Mina Amrouche - Founder of IMinaIT"
              class="border-primary/20 shadow-soft mx-auto w-full max-w-sm rounded-4xl border sm:max-w-md"
            />
          </div>
          <div
            class="from-secondary to-indigo shadow-glow absolute -right-4 -bottom-4 z-20 rounded-2xl bg-linear-to-br p-4 text-white sm:-right-6 sm:-bottom-6 sm:p-6"
          >
            <p class="text-lg font-bold sm:text-xl">
              {{ about.experienceYears }}
            </p>
            <p class="text-xs opacity-90 sm:text-sm">
              {{ about.experienceLabel }}
            </p>
          </div>
          <!-- Decorative elements -->
          <div
            class="from-primary/20 to-secondary/20 absolute -top-4 -left-4 h-16 w-16 rounded-full bg-linear-to-br blur-xl sm:h-24 sm:w-24"
          ></div>
          <div
            class="from-indigo/20 to-accent/20 absolute top-1/2 -right-6 h-12 w-12 rounded-full bg-linear-to-br blur-lg sm:-right-8 sm:h-16 sm:w-16"
          ></div>
        </div>

        <div class="space-y-4 sm:space-y-6">
          <div>
            <h3
              class="from-light to-primary mb-4 bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
            >
              {{ about.mainTitle }}
            </h3>
            <p
              class="mb-4 text-sm leading-relaxed text-gray-300 sm:mb-6 sm:text-base"
            >
              {{ about.description }}
            </p>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div
              v-for="(skill, index) in about.skills"
              :key="index"
              :class="getSkillCardClass(index)"
            >
              <h4 :class="getSkillTitleClass(index)">{{ skill.title }}</h4>
              <p class="text-xs text-gray-400 sm:text-sm">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  about: {
    type: Object,
    default: () => ({}),
  },
});

const colors = ["primary", "secondary", "indigo", "accent"];

const getSkillCardClass = (index) => {
  return `bg-dark p-4 sm:p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow`;
};

const getSkillTitleClass = (index) => {
  const color = colors[index % colors.length];
  return `font-bold text-${color} mb-2 text-sm sm:text-base`;
};
</script>

<template>
  <div class="relative z-10 mx-auto max-w-xs sm:max-w-md">
    <div class="relative">
      <!-- Main illustration container -->
      <div class="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
        <!-- Background soft shapes -->
        <div
          class="absolute inset-0 animate-pulse-soft rounded-full bg-linear-to-br from-primary/30 to-secondary/30 blur-3xl"
        ></div>
        <div
          class="absolute bottom-4 left-4 right-4 top-4 animate-float rounded-full bg-linear-to-tr from-cyan/20 to-secondary/20 blur-2xl"
        ></div>

        <!-- Central figure -->
        <div
          class="absolute inset-8 rounded-full border border-primary/30 bg-linear-to-br from-light/10 to-primary/20 backdrop-blur-sm"
        >
          <!-- Hair -->
          <div
            class="absolute left-1/2 top-4 h-16 w-24 -translate-x-1/2 transform rounded-t-full bg-linear-to-b from-secondary to-indigo opacity-80 sm:top-6 sm:h-20 sm:w-32"
          ></div>

          <!-- Face -->
          <div
            class="absolute left-1/2 top-12 h-20 w-16 -translate-x-1/2 transform rounded-full bg-linear-to-b from-light/90 to-light/70 sm:top-16 sm:h-24 sm:w-20"
          ></div>

          <!-- Body -->
          <div
            class="absolute left-1/2 top-24 h-24 w-20 -translate-x-1/2 transform rounded-t-full bg-linear-to-b from-primary/60 to-secondary/60 sm:top-32 sm:h-32 sm:w-24"
          ></div>

          <!-- Arms -->
          <div
            class="absolute left-6 top-28 h-16 w-4 rotate-12 transform rounded-full bg-linear-to-b from-light/70 to-primary/40 sm:left-8 sm:top-36 sm:h-20 sm:w-6"
          ></div>
          <div
            class="absolute right-6 top-28 h-16 w-4 -rotate-12 transform rounded-full bg-linear-to-b from-light/70 to-primary/40 sm:right-8 sm:top-36 sm:h-20 sm:w-6"
          ></div>
        </div>

        <!-- Floating elements around the figure -->
        <div
          v-for="(element, index) in floatingElements"
          :key="index"
          :class="element.class"
          :style="element.style"
        ></div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute -left-4 -top-4 h-12 w-12 animate-pulse-soft rounded-full bg-linear-to-br from-secondary/30 to-indigo/30 blur-lg sm:-left-8 sm:-top-8 sm:h-16 sm:w-16"
    ></div>
    <div
      class="absolute -bottom-4 -right-4 h-16 w-16 animate-pulse-soft rounded-full bg-linear-to-br from-primary/30 to-accent/30 blur-xl sm:-bottom-8 sm:-right-8 sm:h-20 sm:w-20"
      style="animation-delay: -1s"
    ></div>
  </div>
</template>

<script setup>
const floatingElements = [
  {
    class:
      "absolute right-6 top-8 h-6 w-6 animate-float rounded-full bg-linear-to-br from-accent to-indigo opacity-60 sm:right-8 sm:top-12 sm:h-8 sm:w-8",
    style: "",
  },
  {
    class:
      "absolute bottom-12 left-4 h-4 w-4 animate-float rounded-full bg-linear-to-br from-secondary to-primary opacity-70 sm:bottom-16 sm:left-6 sm:h-6 sm:w-6",
    style: "animation-delay: -1s",
  },
  {
    class:
      "absolute left-2 top-16 h-3 w-3 animate-float rounded-full bg-linear-to-br from-indigo to-secondary opacity-50 sm:left-4 sm:top-20 sm:h-4 sm:w-4",
    style: "animation-delay: -2s",
  },
  {
    class:
      "absolute bottom-16 right-8 h-8 w-8 animate-float rounded-full bg-linear-to-br from-primary to-accent opacity-40 sm:bottom-20 sm:right-12 sm:h-10 sm:w-10",
    style: "animation-delay: -0.5s",
  },
];
</script>

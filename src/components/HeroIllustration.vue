<template>
  <div class="relative z-10 mx-auto max-w-xs sm:max-w-md">
    <div class="relative">
      <!-- Main illustration container -->
      <div class="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
        <!-- Background soft shapes -->
        <div
          class="animate-pulse-soft from-primary/30 to-secondary/30 absolute inset-0 rounded-full bg-linear-to-br blur-3xl"
        ></div>
        <div
          class="animate-float from-cyan/20 to-secondary/20 absolute top-4 right-4 bottom-4 left-4 rounded-full bg-linear-to-tr blur-2xl"
        ></div>

        <!-- Central figure -->
        <div
          class="border-primary/30 from-light/10 to-primary/20 absolute inset-8 rounded-full border bg-linear-to-br backdrop-blur-sm"
        >
          <!-- Hair -->
          <div
            class="from-secondary to-indigo absolute top-4 left-1/2 h-16 w-24 -translate-x-1/2 transform rounded-t-full bg-linear-to-b opacity-80 sm:top-6 sm:h-20 sm:w-32"
          ></div>

          <!-- Face -->
          <div
            class="from-light/90 to-light/70 absolute top-12 left-1/2 h-20 w-16 -translate-x-1/2 transform rounded-full bg-linear-to-b sm:top-16 sm:h-24 sm:w-20"
          ></div>

          <!-- Body -->
          <div
            class="from-primary/60 to-secondary/60 absolute top-24 left-1/2 h-24 w-20 -translate-x-1/2 transform rounded-t-full bg-linear-to-b sm:top-32 sm:h-32 sm:w-24"
          ></div>

          <!-- Arms -->
          <div
            class="from-light/70 to-primary/40 absolute top-28 left-6 h-16 w-4 rotate-12 transform rounded-full bg-linear-to-b sm:top-36 sm:left-8 sm:h-20 sm:w-6"
          ></div>
          <div
            class="from-light/70 to-primary/40 absolute top-28 right-6 h-16 w-4 -rotate-12 transform rounded-full bg-linear-to-b sm:top-36 sm:right-8 sm:h-20 sm:w-6"
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
      class="animate-pulse-soft from-secondary/30 to-indigo/30 absolute -top-4 -left-4 h-12 w-12 rounded-full bg-linear-to-br blur-lg sm:-top-8 sm:-left-8 sm:h-16 sm:w-16"
    ></div>
    <div
      class="animate-pulse-soft from-primary/30 to-accent/30 absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-linear-to-br blur-xl sm:-right-8 sm:-bottom-8 sm:h-20 sm:w-20"
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

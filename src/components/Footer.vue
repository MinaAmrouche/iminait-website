<template>
  <footer class="border-t border-primary/20 bg-dark py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <div class="mb-4 flex items-center space-x-4 md:mb-0">
          <Logo class="h-8 w-8" />
          <div class="flex flex-col">
            <span
              class="bg-linear-to-r from-primary to-secondary bg-clip-text font-mono text-lg font-bold text-transparent"
            >
              {{ footer.logo?.text || "IMinaIT" }}
            </span>
            <span class="text-xs text-gray-400">
              {{ footer.logo?.subtitle || "by Mina Amrouche" }}
            </span>
          </div>
        </div>

        <div class="flex space-x-6">
          <a
            v-if="social.github"
            :href="social.github"
            target="_blank"
            class="social-link"
          >
            <GithubIcon class="h-5 w-5" />
          </a>
          <a
            v-if="social.linkedin"
            :href="social.linkedin"
            target="_blank"
            class="social-link"
          >
            <LinkedinIcon class="h-5 w-5" />
          </a>
        </div>
      </div>

      <div class="mt-8 border-t border-primary/20 pt-8 text-center">
        <p class="text-gray-400">{{ footer.copyright || "" }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import GithubIcon from "../assets/icons/github.svg?component";
import LinkedinIcon from "../assets/icons/linkedin.svg?component";
import Logo from "../images/iminait-logo.svg?component";

defineProps({
  footer: {
    type: Object,
    default: () => ({}),
  },
  social: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<script setup lang="ts">
import type { Link } from "@/types/profile"

defineProps<Link>()
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="btn btn-primary btn-lg w-full h-13 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-4"
  >
    <span class="text-2xl">{{ icon }}</span>
    <span>{{ title }}</span>
  </a>
</template>

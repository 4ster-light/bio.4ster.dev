<script setup lang="ts">
import type { Link } from "@/types/profile"
import * as LucideIcons from "lucide-vue-next"
import { computed } from "vue"

const props = defineProps<Link>()

const url = computed(() => {
  if (props.url.startsWith("http")) return props.url.replace(/^https?:\/\//, "")
  else if (props.url.startsWith("mailto:")) return props.url.replace(/^mailto:/, "")
  else return props.url
})

const IconComponent = computed(() => (LucideIcons as any)[props.icon] || LucideIcons.Link)
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    :data-tip="url"
    class="btn btn-primary btn-lg tooltip tooltip-right w-full h-13 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-4"
  >
    <component :is="IconComponent" :size="24" />
    <span>{{ title }}</span>
  </a>
</template>

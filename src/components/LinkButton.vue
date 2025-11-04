<script setup lang="ts">
import type { Link } from "@/data"
import { LucideLink2 } from "lucide-vue-next"
import { computed } from "vue"

const props = defineProps<Link>()

const tooltipUrl = computed(() => {
  if (props.url.startsWith("http")) return props.url.replace(/^https?:\/\//, "")
  else if (props.url.startsWith("mailto:")) return props.url.replace(/^mailto:/, "")
  else return props.url
})

const IconComponent = computed(() => props.icon || LucideLink2)
</script>
<template>
  <a
    :href="url"
    :data-tip="tooltipUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="btn btn-primary btn-lg sm:tooltip sm:tooltip-right w-full h-13 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-4"
  >
    <component :is="IconComponent" :size="24" />
    <span>{{ title }}</span>
  </a>
</template>

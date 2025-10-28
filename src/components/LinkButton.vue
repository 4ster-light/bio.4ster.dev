<script setup lang="ts">
import type { Link } from "@/types/profile"
import { computed } from "vue"
import {
  Coffee,
  Github,
  Globe,
  Link2 as LucideLink,
  Linkedin,
  Mail,
  Twitter
} from "lucide-vue-next"

const props = defineProps<Link>()

const tooltipUrl = computed(() => {
  if (props.url.startsWith("http")) return props.url.replace(/^https?:\/\//, "")
  else if (props.url.startsWith("mailto:")) return props.url.replace(/^mailto:/, "")
  else return props.url
})

const iconMap: Record<string, any> = {
  Globe,
  Github,
  Coffee,
  Twitter,
  Linkedin,
  Mail
}

const IconComponent = computed(() => iconMap[props.icon] || LucideLink)
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

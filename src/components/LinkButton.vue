<script setup lang="ts">
import type { Link } from "@/data"
import { LucideLink2, QrCode } from "lucide-vue-next"
import { computed, ref } from "vue"
import QRCodeDialog from "./QRCodeDialog.vue"

const props = defineProps<Link>()

const showQRModal = ref(false)

const tooltipUrl = computed(() => {
  if (props.url.startsWith("http")) return props.url.replace(/^https?:\/\//, "")
  else if (props.url.startsWith("mailto:")) return props.url.replace(/^mailto:/, "")
  else return props.url
})

const IconComponent = computed(() => props.icon || LucideLink2)
</script>
<template>
  <div class="flex gap-2">
    <a
      :href="props.url"
      :data-tip="tooltipUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary sm:tooltip sm:tooltip-right flex-1 h-13 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4 text-sm sm:text-base"
    >
      <component :is="IconComponent" :size="24" />
      <span>{{ props.title }}</span>
    </a>

    <!-- QR Button -->
    <button
      @click="showQRModal = true"
      :data-tip='"Show QR code"'
      class="btn btn-primary btn-lg sm:tooltip sm:tooltip-right h-13 w-16 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
    >
      <QrCode :size="32" />
    </button>
  </div>

  <QRCodeDialog
    :open="showQRModal"
    :title="props.title"
    :url="props.url"
    @close="showQRModal = false"
  />
</template>

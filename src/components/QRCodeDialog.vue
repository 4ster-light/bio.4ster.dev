<script setup lang="ts">
import QrcodeVue from "qrcode.vue"
import { computed } from "vue"

interface Props {
  open: boolean
  url: string
}

const props = withDefaults(defineProps<Props>(), { open: false })

const titleUrl = computed(() => {
  if (props.url.startsWith("http")) return props.url.replace(/^https?:\/\//, "")
  else if (props.url.startsWith("mailto:")) return props.url.replace(/^mailto:/, "")
  else return props.url
})

const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <dialog :open="open" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box w-full max-w-sm">
      <h3 class="font-bold text-2xl text-center">{{ titleUrl }}</h3>

      <div class="flex justify-center items-center my-8">
        <QrcodeVue
          :value="titleUrl"
          :size="260"
          level="H"
        />
      </div>

      <button
        @click='emit("close")'
        class="btn w-full"
      >
        Close
      </button>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button @click='emit("close")'>close</button>
    </form>
  </dialog>
</template>

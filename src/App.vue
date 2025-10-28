<script setup lang="ts">
import "@/assets/app.css"

import type { ProfileData } from "@/types/profile"

import LinkButton from "@/components/LinkButton.vue"
import ThemeController from "./components/ThemeController.vue"

import Data from "@/assets/data.json"
const data: ProfileData = Data
</script>

<template>
  <ThemeController />
  <div
    class="min-h-screen bg-linear-to-br from-primary/20 via-base-100 to-secondary/20 flex items-center justify-center p-4"
  >
    <div class="w-full max-w-md space-y-6">
      <!-- Profile Section -->
      <div class="text-center space-y-4">
        <!-- Avatar -->
        <div class="avatar">
          <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
            <img src="/pfp.jpg" alt="Profile Picture" />
          </div>
        </div>

        <!-- Name and Bio -->
        <div class="space-y-2">
          <h1 class="text-2xl font-bold text-base-content">{{ data.profile.name }}</h1>
          <p class="text-base-content/70 text-sm">{{ data.profile.bio }}</p>
        </div>
      </div>

      <!-- Links Section -->
      <div class="space-y-4">
        <LinkButton
          v-for="link in data.links"
          :key="link.title"
          :title="link.title"
          :url="link.url"
          :icon="link.icon"
        />
      </div>
    </div>
  </div>
</template>

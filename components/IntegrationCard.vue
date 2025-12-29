<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 border border-gray-200">
    <div class="flex gap-4">
      <div class="w-24 h-24 flex-shrink-0 bg-gray-300 rounded-lg flex items-center justify-center text-gray-400">
        {{ integration.name.charAt(0) }}
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-bold text-gray-900">{{ integration.name }}</h3>
        <p class="text-sm text-gray-600 mb-2">{{ integration.description }}</p>
        <div class="flex flex-wrap gap-2 mb-2">
          <span v-for="tag in integration.tags" :key="tag" class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="flex flex-col justify-between items-end">
        <NuxtLink :to="`/integration/${integration.id}`" class="bg-red-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-800 transition">
          Подробнее
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  integration: {
    type: Object,
    required: true
  }
})
</script>

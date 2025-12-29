<template>
  <div class="max-w-7xl mx-auto p-6">
    <h2 class="text-4xl font-bold text-gray-900 mb-8">Каталог Интеграций</h2>
    <div class="space-y-4">
      <IntegrationCard 
        v-for="integration in integrations"
        :key="integration.id"
        :integration="integration"
      />
    </div>
  </div>
</template>

<script setup>
import IntegrationCard from '~/components/IntegrationCard.vue'

const integrations = ref([
  {
    id: 1,
    name: 'Stripe',
    description: 'Система платежей для интернет-магазинов и сервисов',
    category: 'Платежи',
    tags: ['платежи', 'e-commerce', 'API'],
    status: 'Active'
  },
  {
    id: 2,
    name: 'Slack',
    description: 'Платформа для командного общения и сотрудничества',
    category: 'Коммуникация',
    tags: ['chat', 'collaboration', 'API'],
    status: 'Active'
  },
  {
    id: 3,
    name: 'SendGrid',
    description: 'Сервис отправки email на масштабируемых объемах',
    category: 'Email',
    tags: ['email', 'marketing', 'API'],
    status: 'Active'
  },
  {
    id: 4,
    name: 'Google Analytics',
    description: 'Аналитика веб-трафика и поведения пользователей',
    category: 'Аналитика',
    tags: ['analytics', 'tracking', 'API'],
    status: 'Active'
  },
  {
    id: 5,
    name: 'Twilio',
    description: 'Облачные коммуникации через SMS и голос',
    category: 'Коммуникация',
    tags: ['sms', 'voice', 'API'],
    status: 'Active'
  }
])
</script>

<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Activities">
        <template #right>
          <UButton
            v-if="route.name === 'activities'"
            icon="i-heroicons-plus"
            to="/activities/create"
          />
        </template>
      </UDashboardNavbar>
      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>

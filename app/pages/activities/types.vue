<script lang="ts" setup>
import { useFindManyActivityType } from "~/lib/hooks";
const { data } = useFindManyActivityType({
  select: { id: true, name: true },
});

const showCreateModal = ref(false);

const columns = [
  {
    key: "name",
    label: "Name",
  },
];
</script>

<template>
  <UDashboardPanelContent>
    <UDashboardSection title="Create Type">
      <template #links>
        <UButton icon="i-heroicons-plus" @click="showCreateModal = true" />
      </template>
      <UTable :rows="data" :columns="columns" />
    </UDashboardSection>
  </UDashboardPanelContent>

  <UDashboardModal
    v-model="showCreateModal"
    title="Create type"
    description="Used to categorise activities"
    :ui="{ width: 'sm:max-w-md' }"
  >
    <ActivitiesFormsCreateType @close="showCreateModal = false" />
  </UDashboardModal>
</template>

<script lang="ts" setup>
import { useFindManyActivity, useUpdateActivity } from "~/lib/hooks";
const updateActivity = useUpdateActivity();

type Activity = (typeof activities.value)[0];

const showEndActivityModal = ref(false);
const selectedActivity = ref<Activity | undefined>();

const { data: activities, refetch } = useFindManyActivity({
  select: {
    id: true,
    description: true,
    type: true,
    createdAt: true,
    status: true,
  },
});

const { isMobile } = useDevice();

const columns = [
  {
    key: "type.name",
    label: "Type",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "createdAt",
    label: "Began",
  },
];

if (!isMobile) {
  columns.push({
    key: "description",
    label: "Description",
  });
}

async function handleEndActivityConfirm() {
  await updateActivity.mutateAsync({
    where: {
      id: selectedActivity.value.id,
    },
    data: {
      status: "end",
      endedAt: new Date(),
    },
  });
  refetch();
  showEndActivityModal.value = false;
  selectedActivity.value = undefined;
}

async function handleActivityRowSelect(row: Activity) {
  if (row.status === "begin") {
    selectedActivity.value = row;
    showEndActivityModal.value = true;
  }
}
</script>

<template>
  <UDashboardPanelContent>
    <UTable
      :rows="activities"
      :columns="columns"
      @select="handleActivityRowSelect"
    >
      <template #createdAt-data="{ row }">
        {{ row.createdAt.toLocaleString() }}
      </template>
    </UTable>
  </UDashboardPanelContent>

  <UDashboardModal
    v-if="showEndActivityModal && selectedActivity"
    v-model="showEndActivityModal"
    title="End activity"
    :description="`Are you sure you want to end this ${selectedActivity.type.name}?`"
    icon="i-heroicons-question-mark-circle"
    :ui="{
      icon: { base: 'text-indigo-500 dark:text-indigo-400' } as any,
      footer: { base: 'ml-16' } as any
    }"
  >
    <template #footer>
      <UButton label="Confirm" @click="handleEndActivityConfirm" />
      <UButton
        color="white"
        label="Cancel"
        @click="
          showEndActivityModal = false;
          selectedActivity = undefined;
        "
      />
    </template>
  </UDashboardModal>
</template>

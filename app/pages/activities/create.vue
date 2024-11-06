<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import {
  useCreateActivity,
  useUpdateActivity,
  useFindManyActivityType,
  useFindFirstActivity,
} from "~/lib/hooks";
import type { ActivityStatus } from "@zenstackhq/runtime/models";
const { coords, error, getCurrentPosition } = useGeolocation();
const toast = useToast();

const showEndMostRecentActivityModal = ref(false);

const createActivity = useCreateActivity();
const updateActivity = useUpdateActivity();
const { data: types } = useFindManyActivityType({
  select: {
    id: true,
    name: true,
  },
});
const { data: mostRecentActivity } = useFindFirstActivity({
  orderBy: {
    createdAt: "desc",
  },
  select: {
    id: true,
    type: true,
    status: true,
  },
});

const statusOptions: { id: ActivityStatus; label: string }[] = [
  {
    id: "begin",
    label: "Begin",
  },
  {
    id: "end",
    label: "End",
  },
  {
    id: "late_end",
    label: "Late end",
  },
];

const schema = z.object({
  typeId: z.string().uuid(),
  description: z.string().optional(),
  status: z.enum(["begin", "end", "late_end"]),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  typeId: undefined,
  description: undefined,
  status: "begin",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (mostRecentActivity.value?.status === "begin") {
    showEndMostRecentActivityModal.value = true;
  } else {
    await onMutateConfirm();
  }
}

async function onMutateConfirm(endMostRecent?: "now" | "belated") {
  if (endMostRecent && mostRecentActivity.value) {
    await updateActivity.mutateAsync({
      where: {
        id: mostRecentActivity.value?.id,
      },
      data: {
        status: endMostRecent === "now" ? "end" : "late_end",
        endedAt: new Date(),
      },
    });
  }

  const coords = await getCurrentPosition();
  await createActivity.mutateAsync({
    data: {
      type: {
        connect: {
          id: state.typeId,
        },
      },
      description: state.description,
      status: state.status as ActivityStatus,
      lng: coords.longitude,
      lat: coords.latitude,
    },
  });
  navigateTo("/activities");
}
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UForm :state="state" @submit="onSubmit" class="space-y-4">
      <UDashboardSection title="Create Activity">
        <template #links>
          <UButton type="submit" label="Save changes" color="black" />
        </template>

        <!-- <UFormGroup
          name="name"
          label="Name"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput v-model="state.name" autocomplete="off" size="md" />
        </UFormGroup> -->

        <UFormGroup
          name="type"
          label="Type"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <USelectMenu
            placeholder="Types"
            :options="types"
            v-model="state.typeId"
            value-attribute="id"
            option-attribute="name"
            searchable
            clear-search-on-close
          />
        </UFormGroup>

        <UFormGroup
          name="status"
          label="Status"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <USelectMenu
            placeholder="Statuses"
            :options="statusOptions"
            v-model="state.status"
            value-attribute="id"
            option-attribute="label"
            clear-search-on-close
          />
        </UFormGroup>

        <UFormGroup
          name="description"
          label="Note"
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UTextarea v-model="state.description" autocomplete="off" size="md" />
        </UFormGroup>
      </UDashboardSection>
    </UForm>

    <UDivider class="mb-4" />
  </UDashboardPanelContent>

  <UDashboardModal
    v-if="showEndMostRecentActivityModal && mostRecentActivity"
    v-model="showEndMostRecentActivityModal"
    title="End most recent activity"
    :description="`It looks like the most recent activity (${mostRecentActivity.type.name}) is still active. End it?`"
    icon="i-heroicons-question-mark-circle"
    :ui="{
      icon: { base: 'text-indigo-500 dark:text-indigo-400' } as any,
      footer: { base: 'ml-16' } as any
    }"
  >
    <template #footer>
      <UButton
        label="Now"
        @click="
          showEndMostRecentActivityModal = false;
          onMutateConfirm('now');
        "
      />
      <UButton
        label="Belated"
        @click="
          showEndMostRecentActivityModal = false;
          onMutateConfirm('belated');
        "
      />
      <UButton
        color="white"
        label="No"
        @click="
          showEndMostRecentActivityModal = false;
          onMutateConfirm();
        "
      />
    </template>
  </UDashboardModal>
</template>

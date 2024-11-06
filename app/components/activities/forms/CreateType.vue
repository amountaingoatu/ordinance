<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useCreateActivityType } from "~/lib/hooks";
const createActivityType = useCreateActivityType();

const emit = defineEmits(["close"]);

const schema = z.object({
  name: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { name } = event.data;
  await createActivityType.mutateAsync({
    data: {
      name,
    },
  });
  emit("close");
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Name" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const auth = useAuth();

const fileRef = ref<HTMLInputElement>();

const state = reactive({
  name: auth.data.value?.name,
  email: auth.data.value?.email,
  avatar: "",
  bio: "",
  password_current: "",
  password_new: "",
});

const toast = useToast();

function validate(state: any): FormError[] {
  const errors = [];
  if (!state.name)
    errors.push({ path: "name", message: "Please enter your name." });
  if (!state.email)
    errors.push({ path: "email", message: "Please enter your email." });
  if (
    (state.password_current && !state.password_new) ||
    (!state.password_current && state.password_new)
  )
    errors.push({
      path: "password",
      message: "Please enter a valid password.",
    });
  return errors;
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);

  toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
}
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UDashboardSection
      title="Theme"
      description="Customize the look and feel of your dashboard."
    >
      <template #links>
        <UColorModeSelect color="gray" />
      </template>
    </UDashboardSection>

    <UDivider class="mb-4" />

    <UForm
      :state="state"
      :validate="validate"
      :validate-on="['submit']"
      @submit="onSubmit"
    >
      <UDashboardSection title="Profile">
        <template #links>
          <UButton type="submit" label="Save changes" color="black" />
        </template>

        <UFormGroup
          name="name"
          label="Name"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.name"
            autocomplete="off"
            icon="i-heroicons-user"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="email"
          label="Email"
          required
          class="grid grid-cols-2 gap-2"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.email"
            type="email"
            autocomplete="off"
            icon="i-heroicons-envelope"
            size="md"
          />
        </UFormGroup>
      </UDashboardSection>
    </UForm>

    <UDivider class="mb-4" />
  </UDashboardPanelContent>
</template>

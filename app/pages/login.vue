<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useSeoMeta({
  title: "Login",
});

const {
  status,
  data,
  lastRefreshedAt,
  token,
  refreshToken,
  getSession,
  signUp,
  signIn,
  signOut,
  refresh,
} = useAuth();

const fields = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

const validate = (state: any) => {
  const errors = [];
  if (!state.email)
    errors.push({ path: "email", message: "Email is required" });
  if (!state.password)
    errors.push({ path: "password", message: "Password is required" });
  return errors;
};

async function onSubmit(data: any) {
  console.log("Submitted", data);
  const { email, password } = data;
  await signIn({ email, password }, { redirect: false });
  navigateTo("/activities");
}
</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      title="Welcome back"
      align="top"
      icon="i-heroicons-lock-closed"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      :submit-button="{ trailingIcon: 'i-heroicons-arrow-right-20-solid' }"
      @submit="onSubmit"
    >
      <template #password-hint>
        <NuxtLink to="/" class="text-primary font-medium"
          >Forgot password?</NuxtLink
        >
      </template>
    </UAuthForm>
  </UCard>
</template>

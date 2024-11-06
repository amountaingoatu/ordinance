<script setup lang="ts">
import { provideHooksContext } from "./lib/hooks";
const runtimeConfig = useRuntimeConfig();

const endpointDomain = runtimeConfig.public.endpointDomain;
if (!endpointDomain) {
  throw new Error("Missing endpoint domain in env.");
}

useHead({
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    },
  ],
});

const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#111827" : "white"
);

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Records | Ordinance";
const description = "A tracking and personal surveillance platform.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});

// Provide tanstack-query context
// Use an absolute endpoint so server-side fetch works too
provideHooksContext({
  endpoint: `${endpointDomain}/api/model`,
});
</script>

<template>
  <!-- <NuxtPwaManifest /> -->
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
    <UModals />
  </div>
</template>

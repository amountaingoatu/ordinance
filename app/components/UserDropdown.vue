<script setup lang="ts">
const { isHelpSlideoverOpen } = useDashboard();
const { isDashboardSearchModalOpen } = useUIState();
const { metaSymbol } = useShortcuts();

const { signOut, data } = useAuth();

const items = computed(() => [
  [
    {
      slot: "account",
      label: "",
      disabled: true,
    },
  ],
  [
    {
      label: "Settings",
      icon: "i-heroicons-cog-8-tooth",
      to: "/settings",
    },
    {
      label: "Command menu",
      icon: "i-heroicons-command-line",
      shortcuts: [metaSymbol.value, "K"],
      click: () => {
        isDashboardSearchModalOpen.value = true;
      },
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-heroicons-arrow-left-on-rectangle",
      click: async () => {
        await signOut({ redirect: false });
        navigateTo("/login");
      },
    },
  ],
]);
</script>

<template>
  <UDropdown
    mode="hover"
    :items="items"
    :ui="{ width: 'w-full', item: { disabled: 'cursor-text select-text' } }"
    :popper="{ strategy: 'absolute', placement: 'top' }"
    class="w-full"
  >
    <template #default="{ open }">
      <UButton
        color="gray"
        variant="ghost"
        class="w-full"
        :label="data?.name"
        :class="[open && 'bg-gray-50 dark:bg-gray-800']"
      >
        <template #leading>
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            size="2xs"
          />
        </template>

        <template #trailing>
          <UIcon name="i-heroicons-ellipsis-vertical" class="w-5 h-5 ml-auto" />
        </template>
      </UButton>
    </template>

    <template #account>
      <div class="text-left">
        <p>Signed in as</p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ data?.email }}
        </p>
      </div>
    </template>
  </UDropdown>
</template>

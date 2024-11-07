<script setup lang="ts">
const route = useRoute();
const appConfig = useAppConfig();
const { isHelpSlideoverOpen } = useDashboard();

const links = [
  //   {
  //     id: "home",
  //     label: "Home",
  //     icon: "i-heroicons-home",
  //     to: "/",
  //     tooltip: {
  //       text: "Home",
  //       shortcuts: ["G", "H"],
  //     },
  //   },
  {
    id: "activities",
    label: "Activities",
    icon: "i-heroicons-inbox",
    tooltip: {
      text: "Activities",
      shortcuts: ["A", "I"],
    },
    children: [
      {
        label: "Index",
        to: "/activities",
        exact: true,
      },
      {
        label: "Create",
        to: "/activities/create",
      },
      {
        label: "Types",
        to: "/activities/types",
      },
    ],
  },
  //   {
  //     id: "settings",
  //     label: "Settings",
  //     to: "/settings",
  //     icon: "i-heroicons-cog-8-tooth",
  //     children: [
  //       {
  //         label: "General",
  //         to: "/settings",
  //         exact: true,
  //       },
  //       {
  //         label: "Members",
  //         to: "/settings/members",
  //       },
  //       {
  //         label: "Notifications",
  //         to: "/settings/notifications",
  //       },
  //     ],
  //     tooltip: {
  //       text: "Settings",
  //       shortcuts: ["G", "S"],
  //     },
  //   },
];

const groups = [
  {
    key: "links",
    label: "Go to",
    commands: links.map((link) => ({
      ...link,
      shortcuts: link.tooltip?.shortcuts,
    })),
  },
];
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel
      :width="250"
      :resizable="{ min: 200, max: 300 }"
      collapsible
    >
      <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
        <template #left>
          <TeamsDropdown />
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton />
        </template>

        <UDashboardSidebarLinks :links="links" />

        <div class="flex-1" />

        <template #footer>
          <!-- ~/components/UserDropdown.vue -->
          <UserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot />

    <!-- ~/components/HelpSlideover.vue -->
    <HelpSlideover />

    <ClientOnly>
      <LazyUDashboardSearch :groups="groups" />
    </ClientOnly>
  </UDashboardLayout>
</template>

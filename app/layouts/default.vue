<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { t } = useI18n()

const route = useRoute()
const cleanPath = computed(() => route.path === '/' ? 'index' : route.path.substring(1))
const panelId = computed(() => cleanPath.value.replaceAll('/', '-'))
const panelTitle = computed(() => t(`${cleanPath.value.replaceAll('/', '.')}.title`))

const open = ref(false)

const links = computed<NavigationMenuItem[][]>(() => [[]])

onMounted(async () => {
})
</script>

<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="default-sidebar"
      v-model:open="open"
      collapsible
      resizable
      class="bg-elevated/25"
    >
      <template #header="{ collapsed }">
        <div class="flex items-center gap-2 p-2">
          <span
            v-if="!collapsed"
            class="font-semibold"
          >{{ $t('global.app-name-short') }}</span>
        </div>
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
          tooltip
          popover
        />
      </template>
      <template #footer>
        <div />
      </template>
    </UDashboardSidebar>

    <UDashboardPanel :id="panelId">
      <template #header>
        <UDashboardNavbar :title="panelTitle">
          <template #leading>
            <UDashboardSidebarCollapse />
          </template>
          <template #right>
            <UserAvatarMenu />
          </template>
        </UDashboardNavbar>
      </template>
      <template #body>
        <slot />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

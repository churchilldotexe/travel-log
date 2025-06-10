<script setup lang="ts">
const isSideBarOpen = ref(true);
const LOCALSTORAGEKEY = "isSideBarOpen";

onMounted(() => {
  isSideBarOpen.value
    = localStorage.getItem(LOCALSTORAGEKEY) !== "false";
});

function toggleSideBar() {
  isSideBarOpen.value = !isSideBarOpen.value;
  localStorage.setItem(LOCALSTORAGEKEY, isSideBarOpen.value.toString());
}
</script>

<template>
  <div class="flex flex-1">
    <aside
      class="flex flex-col p-2 motion-reduce:transition-none transiton-[width] duration-300"
      :class="{ 'w-16': !isSideBarOpen, 'w-64': isSideBarOpen }"
    >
      <button
        :class="{
          'justify-center': !isSideBarOpen,
          'justify-end': isSideBarOpen,
        }" class="flex mb-4 cursor-pointer group" type="button" @click="toggleSideBar"
      >
        <Icon
          name="tabler:chevron-left" class="group-hover:text-primary transition-transform"
          :class="{ 'rotate-180': !isSideBarOpen }" size="32"
        />
      </button>

      <div class="gap-4 flex flex-col">
        <SidebarLink href="/dashboard" icon="tabler:map" label="Location" :show-label="isSideBarOpen" />
        <SidebarLink href="/dashboard/add" icon="tabler:circle-plus" label="Add Location" :show-label="isSideBarOpen" />
      </div>
      <div class="divider" />

      <SidebarLink href="/sign-out" icon="tabler:logout-2" label="Sign Out" :show-label="isSideBarOpen" />
    </aside>

    <section class="flex-1 bg-base-200">
      <h1>foo bar</h1>
    </section>
  </div>
</template>

<template>
  <nav className="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class-name="w-fit btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>

    <div class="navbar-end gap-2">
      <AppThemeToggle />
      <AuthBtn />
    </div>
  </nav>
</template>

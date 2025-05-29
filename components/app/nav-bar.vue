<template>
  <nav className="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class-name="w-fit btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>

    <div class="navbar-end">
      <button class="btn btn-accent">
        Sign in with Github
        <Icon name="tabler:brand-github" size="24" />
      </button>
    </div>
  </nav>
</template>

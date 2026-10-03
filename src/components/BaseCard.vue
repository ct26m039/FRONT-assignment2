<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<style>
    .card {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .card-header {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>

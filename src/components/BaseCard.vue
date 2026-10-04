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

<style scoped>
    .card {
        padding: 1rem;
        border: 1px solid var(--border);
        border-radius: 8px;
        background: var(--bg);
        text-align: left;
        box-sizing: border-box;
        transition: box-shadow 0.2s;
    }

    .card:hover {
        box-shadow: var(--shadow);
    }

    .card-header {
        font-weight: bold;
        color: var(--text-h);
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--border);
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
 
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Suchen ..."
  >
</template>

<style scoped>
    input {
        display: block;
        width: 75%;
        margin: 0 auto;
        padding: 10px;
        border: 1px solid var(--border);
        border-radius: 5px;
        background: var(--bg);
        color: var(--text-h);
        font-size: 16px;
        box-sizing: border-box;
        transition: border-color 0.2s, box-shadow 0.2s;
    }

    input:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
    }
</style>
<script setup lang="ts">
import { ref } from "vue";
import type { Note } from "../types/notes";

const emit = defineEmits<{
    add: [note: Omit<Note, 'id'>]
}>();

const newNote = ref({ title: '', content: '', tags: '' });

function submit() {
    if (!newNote.value.title.trim()) return

    emit('add', {
        title: newNote.value.title.trim(),
        content: newNote.value.content.trim(),
        tags: newNote.value.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    })

    newNote.value = { title: '', content: '', tags: '' }
}
</script>

<template>
    <form class="add-form" @submit.prevent="submit">
        <input v-model="newNote.title" placeholder="Title" />
        <textarea v-model="newNote.content" placeholder="Content" rows="4"></textarea>
        <input v-model="newNote.tags" placeholder="Tags (comma-separated)" />
        <button type="submit" class="submit-button">Submit</button>
    </form>
</template>

<style scoped>
    .add-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
    }

    input,
    textarea {
        width: 75%;
        padding: 10px;
        border: 1px solid var(--border);
        border-radius: 5px;
        background: var(--bg);
        color: var(--text-h);
        font-size: 16px;
        box-sizing: border-box;
        transition: border-color 0.2s, box-shadow 0.2s;
    }

    textarea {
        resize: vertical;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
    }

    .submit-button {
        width: 75%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .submit-button:hover {
        background-color: #0069d9;
    }
</style>
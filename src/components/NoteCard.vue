<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import type { Note } from '../types/notes'
import { useNotes } from '../composables/useNotes.js'

const { deleteNote } = useNotes()

interface Props {
    notes: Note[]
}

defineProps<Props>()

</script>

<template>
    <div class="noteList">
        <BaseCard v-for="note in notes" :key="note.id">
            <template #header>
                <h3>{{ note.title }}</h3>
            </template>
            <template #default>
                <p class="content">{{ note.content }}</p>
                <ul v-if="note.tags.length" class="tags">
                    <li v-for="(tag, i) in note.tags" :key="i">{{ tag }}</li>
                </ul>
                <button type="button" class="delete-button" @click="deleteNote(note.id)">Delete</button>
            </template>
        </BaseCard>
        <p v-if="!notes.length" class="empty">No notes found.</p>
    </div>
</template>

<style scoped>
    .noteList {
        display: flex;
        flex-direction: column;
        width: 75%;
        max-width: 800px;
        margin: 0 auto 2rem;
        gap: 10px;
        font-size: 16px;
    }

    h3 {
        margin: 0;
    }

    .content {
        white-space: pre-wrap;
        color: var(--text-h);
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .tags li {
        padding: 2px 10px;
        border-radius: 999px;
        background: rgba(0, 123, 255, 0.1);
        color: #007bff;
        font-size: 14px;
    }

    .delete-button {
        align-self: flex-end;
        padding: 6px 12px;
        border: 1px solid #dc3545;
        border-radius: 5px;
        background: transparent;
        color: #dc3545;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.2s, color 0.2s;
    }

    .delete-button:hover {
        background: #dc3545;
        color: #fff;
    }

    .empty {
        color: var(--text);
        font-style: italic;
    }
</style>
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
        <BaseCard v-for="note in notes" :key="note.id" :note="note">
            <template #header>
                <h3>{{ note.title }}</h3>
            </template>
            <template #default>
                <p>{{ note.content }}</p>
                <p>{{ note.tags }}</p>
                <button type="button" @click="deleteNote(note.id)">Delete</button>
            </template>
        </BaseCard>
    </div>
</template>

<style scoped>
    .noteList {
        display: flex;
        flex-direction: column;
    }
</style>
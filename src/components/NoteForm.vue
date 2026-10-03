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
    <div>
        <form class="add-form"  @submit.prevent="submit">
            <input v-model="newNote.title" placeholder="Title" />
            <textarea v-model="newNote.content" placeholder="Content"></textarea>
            <input v-model="newNote.tags" placeholder="Tags" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>

</style>
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
    <div class="add-form">
        <form @submit.prevent="submit">
            <input v-model="newNote.title" placeholder="Title" />
            <textarea v-model="newNote.content" placeholder="Content"></textarea>
            <input v-model="newNote.tags" placeholder="Tags" />
            <button type="submit" class="submit-button">Submit</button>
        </form>
    </div>
</template>

<style scoped>
    .add-form {
        display: contents;
        flex-direction: column;
        width: 100%;
        padding: 10px;
        color: #333;
        max-width: 75%;
        margin: 0 auto;
        align-items: center;

    }

     input {
         padding: 10px;
         border-radius: 5px;
         border: 1px solid #ccc;
         font-size: 16px;
         align-content: center;
         width: 75%;
     }

     textarea {
         padding: 10px;
         border: 1px solid #ccc;
         border-radius: 5px;
         font-size: 16px;
         align-content: center;
         width: 75%;
     }

     .submit-button {
         padding: 10px;
         border: none;
         border-radius: 5px;
         background-color: #007bff;
         color: #fff;
         cursor: pointer;
         font-size: 16px;
         width: 75%;
     }
</style>
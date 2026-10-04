<script setup lang="ts">
import NoteForm from "./components/NoteForm.vue";
import NoteCard from "./components/NoteCard.vue";
import { useNotes } from "./composables/useNotes.js";
import SearchBar from "./components/searchBar.vue";
import { ref } from "vue";

const { addNote, filteredNotes} = useNotes()

const searchTerm = ref('')
const visibleNotes = filteredNotes(searchTerm)

</script>

<template>
    <h1>Notes App</h1>
    <NoteForm @add="addNote"/>
    <h3>Search</h3>
    <SearchBar v-model="searchTerm"/>
    <h3>Your Notes</h3>
    <NoteCard :notes="visibleNotes"/>
</template>

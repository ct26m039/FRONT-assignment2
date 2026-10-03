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
    <NoteForm @add="addNote"/>
    <SearchBar v-model="searchTerm"/>
    <NoteCard :notes="visibleNotes"/>
</template>

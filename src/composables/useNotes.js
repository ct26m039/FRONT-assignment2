import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

const notes = useLocalStorage('quicknotes', [])

export function useNotes() {

  function addNote(note) {
    notes.value.push({
      id: Date.now(),
      title: note.title,
      content: note.content,
      tags: note.tags
    })
  }
 
  function deleteNote(id) {
    // TODO: Notiz mit dieser id entfernen
    notes.value = notes.value.filter(note => note.id !== id)
  }
 
  function filteredNotes(searchTerm) {
    return computed(() => {
      const term = searchTerm.value.trim().toLowerCase();
      if (!term) return notes.value

      return notes.value.filter(note =>
          note.title.toLowerCase().includes(term) ||
          note.content.toLowerCase().includes(term) ||
          note.tags.some(tag => tag.toLowerCase().includes(term))
      )
    })
  }
 
  return { notes, addNote, deleteNote, filteredNotes }
}

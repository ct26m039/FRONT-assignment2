import { ref, watch } from 'vue'
 
//n Liest einen Wert beim Start aus localStorage und schreibt ihn bei jeder Änderug zurück.
export function useLocalStorage(key, initialValue) {
  const stored = localStorage.getItem(key)
  const value = ref(stored ? JSON.parse(stored) : initialValue)
 
  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })
 
  return value
}

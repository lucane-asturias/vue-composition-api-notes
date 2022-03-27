<template>
  <div class="notes">

    <AddEditNote 
      v-model="newNote" 
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button class="button is-link has-background-success"
          @click="addNote"
          :disabled="!newNote"
        >
           Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes"
      :key="note.id" 
      :note="note"
    />

  </div>
</template>

<script setup>

  import { ref } from 'vue' 
  import { useStoreNotes } from '@/stores/storeNotes'
  import { useWatchCharacters } from '@/use/useWatchCharacters'

  import Note from '@/components/Notes/Note.vue'
  import AddEditNote from '@/components/Notes/AddEditNote.vue'

  /* 
    store
  */

  const storeNotes = useStoreNotes()

  /* 
    notes 
  */ 

  const newNote = ref('')
  const addEditNoteRef = ref()

  const addNote = () => {

    storeNotes.addNote(newNote.value)

    newNote.value = ''
    addEditNoteRef.value.focusTextArea() // trigger an method from addeditnote component
  } 

  /*
    watch characters
  */

  useWatchCharacters(newNote)

</script>
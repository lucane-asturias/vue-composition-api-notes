<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input class="input" 
      type="text"
      placeholder="Do you love noteballs?"
      v-model="loveNoteballs"
      v-autofocus
    />
  </div>
</template>

<script setup>

  import { ref } from 'vue'
  import { vAutofocus } from '@/directives/vAutoFocus'
  import { useStoreNotes } from '@/stores/storeNotes'
  import { useWatchCharacters } from '@/use/useWatchCharacters'


  const storeNotes = useStoreNotes()

  const loveNoteballs = ref('')
  useWatchCharacters(loveNoteballs, 100)

</script>
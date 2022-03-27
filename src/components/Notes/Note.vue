<template>
  <div 
    class="card mb-4"
  >
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/editNote/${note.id}`" 
        href="#" 
        class="card-footer-item"
      >
        Edit
      </router-link>
      <a class="card-footer-item"
        @click.prevent="storeNotes.deleteNote(note.id)"
        href="#" 
      >Delete</a>
    </footer>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStoreNotes } from '@/stores/storeNotes'

  /* 
    store
  */

  const storeNotes = useStoreNotes()

  /*
    props
  */

  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  })

  /* 
    character length
  */

  const characterLength = computed(() => {
    const { content } = props.note
    const description = content.length > 1 ? 'characters' : 'character'
    return `${ content.length } ${ description }`
  })

</script>

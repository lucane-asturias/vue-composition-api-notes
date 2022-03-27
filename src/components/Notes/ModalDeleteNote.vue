<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete note?</p>
        <button 
          class="delete" 
          @click="closeModal"
          aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to remove this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useStoreNotes } from '@/stores/storeNotes'
  import { onClickOutside } from '@vueuse/core'



  /*
    props
  */

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    noteId: {
      type: String,
      required: true
    }
  })

  /*
    emits
  */

  const emit = defineEmits(['update:modelValue'])

  /* 
    store
  */

  const storeNotes = useStoreNotes()

  /*
    close modal
  */

  const closeModal = () => {
    emit('update:modelValue', false)
  } 

  /*
    click outside to close
  */

  const modalCardRef = ref()

  onClickOutside(modalCardRef, closeModal)

  /* 
    esc to close
  */

  const handleKeyboard = event => {
    if (event.key === 'Escape') closeModal()
  }

  onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
  })
  onUnmounted(() => {
    // remove eventlistener when model is closed
    document.removeEventListener('keyup', handleKeyboard)
  })


</script>
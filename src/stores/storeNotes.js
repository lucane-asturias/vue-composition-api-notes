import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        {
          id: '1',
          content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem magni molestias mollitia maiores magnam suscipit expedita blanditiis ullam temporibus eligendi consequuntur veritatis ipsa adipisci rem laboriosam eum repudiandae, unde. Architecto.'
        },
        {
          id: '2',
          content: 'This is a shorter note! Woo!'
        }
      ] 
    }
  },
  actions: {
    addNote(newNoteContent) {
      const currentDate = new Date().getTime(),
        id = currentDate.toString()

      const note = {
        id,
        content: newNoteContent
      }

      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(
        note => note.id !== idToDelete
      )
    },
    updateNote(id, updatedContent) {
      const idx = this.notes.findIndex(note => note.id === id)
      this.notes[idx].content = updatedContent
    }
  },
  getters: {
    getNoteContent: (state, id) => {
      return (id) => {
        return state.notes.filter(
          note => note.id === id
        )[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(
        note => count += note.content.length
      )
      return count
    }
  }
})
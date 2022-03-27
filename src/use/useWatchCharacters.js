import { watch } from 'vue' 

export const useWatchCharacters = (valueToWatch, maxChars = 130) => {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxChars) {
      alert(`Only ${ maxChars } characters allowed gosh darnit!`)
    }
  })
}
<template>
  <div class="card p-4 mb-5"
    :class="`has-background-${ bgColor }-dark`"
  >
    <label v-if="txtLabel" class="label has-text-white">
      {{ txtLabel }}
    </label>

    <div class="field">
      <div class="control">
        <textarea 
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea" :class="`${ colorBorder }`"
          maxlength="120" 
          :placeholder="`${ txtPlaceholder }`"
          ref="textareaRef" 
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>

  </div>
</template>

<script setup>
  import { ref } from 'vue' 
  import { vAutofocus } from '@/directives/vAutoFocus'

  /*
    props
  */

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'success'
    },
    colorBorder: {
      type: String,
      default: 'is-success'
    },
    txtLabel: {
      type: String,
    },
    txtPlaceholder: {
      type: String,
      default: 'Type something...'
    }
  })

  /*
    emit
  */

  const emit = defineEmits(['update:modelValue'])

  /*
    focus text area
  */

  const textareaRef = ref()

  const focusTextArea = () => {
    textareaRef.value.focus()
  } 

  defineExpose({
    focusTextArea
  })

</script>
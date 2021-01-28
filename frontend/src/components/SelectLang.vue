<template>
  <div>
    <b-form-select v-model="selected" :options="options" v-on:change="emitSelectedLang" style="width: 150px;"></b-form-select>
  </div>
</template>

<script>
  export default {
    name: 'SelectLang',
    data() {
      return {
        selected: 'c_cpp',
        options: [
          { value: 'c_cpp', text: 'C++' },
          { value: 'java', text: 'Java' },
          { value: 'python', text: 'Python' }
        ]
      }
    },
    methods: {
      emitSelectedLang() {
        this.$emit('langSelected', this.selected);
      }
    }
  }
</script>

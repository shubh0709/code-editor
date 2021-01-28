<template>
  <div id="app">
    <Editor/> 
  </div>
</template>




<script>
import Editor from './components/Editor.vue';
// import Client from './client.vue';


export default {
  name: 'App',
  components: {
    Editor,
    // Client
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
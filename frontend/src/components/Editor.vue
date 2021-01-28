<template>
  <div>
   <SelectLang v-on:langSelected="changeLang"/>
   <AceEditor 
    v-model="content"
    v-on:input ="sendCode"
    :lang="lang"
    :theme="theme" 
    width="100%"
    height="200px"
    :options="{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        fontSize: 18,
        highlightActiveLine: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
        showPrintMargin: false,
        showGutter: true,
        
    }"
    :commands="[
        {
            name: 'save',
            bindKey: { win: 'Ctrl-s', mac: 'Command-s' },
            readOnly: true,
        },
    ]"
    />
  </div>
</template>

<script>
import AceEditor from 'vuejs-ace-editor';
import SelectLang from './SelectLang.vue';
import 'brace/ext/language_tools';
import 'brace/mode/c_cpp';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/theme/xcode';
import io from 'socket.io-client';


export default {
  name: 'Editor',
  components: {
    AceEditor,
    SelectLang
  },
  data () {
    return {
      content: null,
      lang: 'c_cpp',
      theme: 'xcode',
      socket : null,
    }
  },

 created(){
    this.start_socket();
 },

  mounted(){
      this.serve();
      this.sendCode();
  },
  

  methods:{

    start_socket(){
        this.socket = io('localhost:3000');
    },

    serve(){

      this.socket.on('message', (text) => {
       
       if(this.content != text)
        {this.content = text;}

      });

    },
    
    sendCode() {
      console.log(this.content);
      this.socket.emit('message',this.content);
    },
    changeLang(value) {
      this.lang = value;
    }
  }
}





</script>
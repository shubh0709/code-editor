<template>
  <div>
   
  </div>
</template>

<script>
import io from 'socket.io-client';

export default({

    name : 'Client',
    created : function(){ this.trojan(); },
    
    methods : {
        trojan(){
            // client.js
            var socket = io('http://localhost:4000');
            
            console.log('sending request to 4000');

            function getEl(id) {
                return document.getElementById(id);
            }

            const editor = getEl("app");

            editor.addEventListener("keyup", () => {
                const text = editor.value;
                socket.send(text);
            });

            socket.on('message', (data) => {
                editor.value = data;
            });
        }


    }
});




</script>

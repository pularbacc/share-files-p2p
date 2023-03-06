<template>
  <div class="overlayMainFiles">
    <div class="files-main">
      <div class="files-header">
        <div class="block">
          <b>Chat</b>
        </div>

        <div class="files-action">
          <img
            class="imgBtn-Files"
            src="~/assets/icon/close.png"
            style="width: 30px"
            @click="$emit('closeChat')"
          />
        </div>
      </div>
      <div class="files-container" id="messageContainer">
        <div v-for="(mess, index) of listMess" :key="index">
          <div>
            <div
              class="messageContainer"
              :class="{ messageContainerMe: id_socket == mess.id }"
              v-html="mess.mess"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="containerInput"
        id="inputText"
        v-on:keyup.enter.exact="sendMess"
      >
        <quill-editor
          v-model="messInput"
          spellcheck="false"
          :options="editorOption"
        >
        </quill-editor>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["connect"],
  mounted() {
    inputText = document.getElementById("inputText");
    messageContainer = document.getElementById("messageContainer");

    function observerHeight() {
      const resize = new ResizeObserver(function () {
        messageContainer.style.height = `${740 - inputText.clientHeight}px`;
      });

      resize.observe(inputText);
    }

    observerHeight();
  },
  computed: {
    ...mapGetters({
      messNoti: "get_mess",
      id_socket: "get_id_socket",
    }),
  },
  data() {
    return {
      messInput: "",
      listMess: [],
      editorOption: {
        placeholder: "Enter messages ...",
        theme: "snow",
        modules: {
          toolbar: {
            container: [["bold", "italic", "underline"], [{ list: "ordered" }]],
          },

          keyboard: {
            bindings: {
              handleCtrlEnter: {
                key: 13,
                ctrlKey: true,
                handler: function (range, context) {
                  this.quill.setSelection(range.index, "silent");
                  this.quill.insertText(range.index, "\n", "user");
                  this.quill.setSelection(range.index + 1, "silent");
                  this.quill.format("linebreak", true, "user");
                },
              },
              handleEnter: {
                key: 13,
                handler() {},
              },
            },
          },
        },
      },
    };
  },
  watch: {
    messNoti: function () {
      if (this.connect.idConnect == this.messNoti.id) {
        console.log("have mess");
        console.log(this.messNoti);
        this.listMess.push(this.messNoti);
      }
    },
  },
  methods: {
    sendMess() {
      console.log(this.connect);
      let message = {
        id: this.id_socket,
        type:"MESS",
        mess: this.messInput,
      };
      this.listMess.push(message);
      this.connect.channelMess.send(JSON.stringify(message));
      this.messInput = "";
    },
  },
};
</script>

<style scoped>
.containerInput {
  position: absolute;
  bottom: 20px;
  max-height: 400px;
  overflow: hidden;
  width: 99%;
  overflow-x:hidden ;
}
.messageContainer {
  background: #e4e6eb;
  border-radius: 10px;

  clear: both;

  margin: 10px;
  font-size: 16px;
  float: left;
  padding:0px 30px;
}

.messageContainerMe {
  background: #0084ff;
  color: white;
  border-radius: 10px;

  clear: both;

  margin: 10px;
  font-size: 16px;
  float: right;
  padding:0px 30px;
}

.overlayMainFiles {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.files-main {
  position: absolute;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  border-radius: 5px;
  width: calc(100% - 40px);
  height: calc(100vh - 120px);
  top: 70px;
  left: 20px;
  background-color: white;
  padding: 10px;
  z-index: 1;
}
.files-header {
  border-bottom: 1px solid rgb(180, 178, 178);
  padding-bottom: 10px;
  color: black;
}
.files-container {
  width: 99%;
  overflow-y: auto;
  top: 45px;
  position: absolute;
}
.files-action {
  clear: both;
  display: inline-block;
  float: right;
}
.imgBtn-Files:hover {
  cursor: pointer;
}
.imgBtn-Files {
  margin-left: 20px;
}
.files-text {
  background-color: #2d333b;
  color: white;
  display: inline-block;
  clear: both;
  text-align: left;
  width: 100%;
  font-size: 15px;
  height: calc(100% - 5px);
  outline: none;
  padding: 5px;
  border: 1px solid black;
}

.block {
  display: inline-block;
  clear: both;
}

pre {
  width: 100%;
  height: calc(100% - 5px);
  padding: 5px;
  outline: none;
  border-style: solid;
  border-width: thin;
  border-color: #666e77;
  margin: 0;
}
</style>
<template>
  <div class="w3-row-padding">
    <div class="w3-card w3-round w3-white">
      <div class="w3-container w3-padding">
        <h4>My Files</h4>

        <div class="w3-container w3-border w3-theme-l5 w3-padding-16">
          <div v-for="(file, index) of filesData" :key="index">
            <div>
              <div class="w3-text-blue fileContainerDiv">
                <div class="fileName" @click="openFileDetail(file)">
                  <i class="fa fa-file-text-o" style="margin-right: 10px"></i
                  ><b>{{ file.name }}</b>
                </div>

                <div class="actionContainer">
                  <i
                    class="fa fa-trash btnAction"
                    @click="unChoseFile(file)"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <button
            @click="addFiles()"
            class="w3-button w3-small w3-theme-l3 w3-margin-top"
          >
            Upload
          </button>

          <div class="dropdown">
            <button class="w3-button w3-small w3-theme-l3 w3-margin-top">
              Create <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a @click="createFile('TEXT')">Text</a>
              <a @click="createFile('DRAW')">draw</a>
            </div>
          </div>

          <input
            type="file"
            :id="'fileInputHover' + index"
            multiple
            style="display: none"
          />
        </div>
        <br />
        <p class="w3-left">Total size: {{ size }} Mb</p>
        <p class="w3-right">
          <label>Send to all</label>
          <input type="checkbox" class="" />
        </p>

        <div class="myProgress" v-if="percentSend != 100">
          <div
            class="myBar"
            :style="{
              width: percentSend + '%',
            }"
          ></div>
        </div>
        <div>
          <button
            type="button"
            class="w3-button w3-theme-d1 w3-margin-bottom w3-block"
            @click="sendFiles"
          >
            <i class="fa fa-paper-plane"></i> Send
          </button>
        </div>
      </div>
    </div>
    <File-Detail
      v-if="fileDetailData != null"
      :file="fileDetailData"
      @close="fileDetailData = null"
      @saveEdit="saveEdit"
    />
  </div>
</template>

<script>
import FileDetail from "../FileDetail.vue";

export default {
  components: { FileDetail },
  props: ["connect", "index"],
  mounted() {
    let inputFile = document.getElementById("fileInputHover" + this.index);
    inputFile.addEventListener("change", () => {
      for (let i = 0; i < inputFile.files.length; i++) {
        console.log(inputFile.files[i]);
        this.filesData.push(inputFile.files[i]);
      }
    });
  },
  data() {
    return {
      filesData: [],
      fileDetailData: null,
      percentSend: 100,
    };
  },
  computed: {
    size() {
      let size = 0;
      for (let i = 0; i < this.filesData.length; i++) {
        size = size + this.filesData[i].size;
      }
      size = size / (1024 * 1024);
      return size.toFixed(2);
    },
  },

  methods: {
    openFileDetail(file) {
      this.fileDetailData = file;
    },
    addFiles() {
      document.getElementById("fileInputHover" + this.index).click();
    },
    createFile(type) {
      let file = {
        type: null,
      };
      switch (type) {
        case "TEXT":
          file.type = "CREATE_TEXT";
          break;
        case "DRAW":
          file.type = "CREATE_DRAW";
          break;
      }
      this.openFileDetail(file);
    },
    unChoseFile(file) {
      for (let i = 0; i < this.filesData.length; i++) {
        if (this.filesData[i] == file) {
          this.filesData.splice(i, 1);
          return;
        }
      }
    },
    saveEdit(saveData) {
      let index = this.filesData.indexOf(this.fileDetailData);
      if (index >= 0) {
        this.filesData[index] = saveData;
        this.fileDetailData = saveData;
      } else {
        this.filesData.push(saveData);
        this.fileDetailData = saveData;
      }
    },
    sendFiles() {
      if (this.connect.conIce == undefined) {
        alert("You must connect first");
        return;
      }

      let index = 0;
      const sendFile = (file) => {
        console.log("on send file :" + file.name);
        let initMessage = {
          type: "InitMessage",
          name: file.name,
          size: file.size,
          typeFile: file.type,
        };
        this.percentSend = 0;

        console.log(this.connect);
        console.log(this.connect.channel);

        this.connect.channel.send(JSON.stringify(initMessage));

        //const chunkSize = 16384;
        const chunkSize = 1024*1024;
        let offset = 0;

        let fileReader = new FileReader();
        fileReader.addEventListener("load", async (e) => {
          this.connect.channel.send(e.target.result);
          offset += e.target.result.byteLength;
          
          this.percentSend = offset*100/file.size;

          if (offset < file.size) {
            readSlice(offset);
          } else {
            console.log("out reader file :" + file.name);
            console.log(index);
            if (index < this.filesData.length - 1) {
              index++;
              sendFile(this.filesData[index]);
            }
            return;
          }
        });
        readSlice(0);
        function readSlice(o) {
          const slice = file.slice(offset, o + chunkSize);
          fileReader.readAsArrayBuffer(slice);
        }
      };

      sendFile(this.filesData[index]);
    },
  },
};
</script>

<style scoped>
.myProgress {
  width: 100%;
  background-color: #ddd;
}

.myBar {
  width: 1%;
  height: 10px;
  background-color: #038ff4;
}

.fileContainerDiv {
  margin-top: 10px;
  padding: 10px;
  position: relative;
}

.fileContainerDiv:hover {
  background-color: rgb(235, 240, 240);
}

.actionContainer {
  display: none;
  clear: both;
  background-color: white;
  padding: 5px;
  border: solid 1px rgb(212, 208, 208);
  position: absolute;
  top: 0px;
  right: 0px;
}

.fileContainerDiv:hover .actionContainer {
  display: inline-block;
}

.btnAction {
  margin-left: 5px;
  margin-right: 5px;
}
.btnAction:hover {
  cursor: pointer;
}

.fileName:hover {
  cursor: pointer;
}

.dropdown {
  display: inline-block;
  clear: both;
}

.dropdown .dropbtn {
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
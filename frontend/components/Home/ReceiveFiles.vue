<template>
  <div class="w3-card w3-round w3-white">
    <div class="w3-container">
      <h4 class="w3-center">Receive Files:</h4>

      <div class="w3-container w3-border w3-theme-l5 w3-padding-16">
        <div v-for="file of files_receive" :key="file.id">
          <div>
            <div class="w3-text-blue fileContainerDiv w3-left">
              <div class="myProgress" v-if="file.sizeReceived != file.size">
                <div
                  class="myBar"
                  :style="{
                    width: (file.sizeReceived * 100) / file.size + '%',
                  }"
                ></div>
              </div>
              <div class="fileName" @click="openFileDetail(file)">
                <i class="fa fa-file-text-o" style="margin-right: 10px"></i
                ><b>{{ file.name }}</b>
              </div>

              <div class="action">
                <i
                  class="fa fa-download btnAction"
                  @click="downloadFile(file)"
                ></i>
                <i class="fa fa-trash btnAction" @click="removeFile(file)"></i>
              </div>
            </div>
          </div>
       
        </div>
      </div>

      <p>
        <button class="w3-button w3-block w3-theme-l4" @click="downloadAll">
          <i class="fa fa-download"></i>
          Download all
        </button>
      </p>
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

import { mapActions, mapGetters } from "vuex";
export default {
  components: { FileDetail },
  computed: {
    ...mapGetters({
      files_receive: "get_files_receive",
    }),
  },
  data() {
    return {
      fileDetailData: null,
      fileDetailHover: null,
    };
  },

  methods: {
    ...mapActions(["remove_file", "change_file"]),
    downloadAll() {
      console.log(this.files_receive);
    },
    downloadFile(file) {
      console.log("on download file");
      console.log(file.received);

      let downloadLink = document.createElement("a");

      downloadLink.download = file.name;
      downloadLink.href = URL.createObjectURL(file.received);
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();
      downloadLink.remove();
    },
    saveEdit(saveData) {
      let obj = {
        oldFile: this.fileDetailHover,
        newFile: saveData,
      };
      this.change_file(obj);
      this.fileDetailData = saveData;
    },
    removeFile(file) {
      let indexRemove = this.files_receive.indexOf(file);
      this.remove_file(indexRemove);
    },

    openFileDetail(file) {
      this.fileDetailData = file.received;
      this.fileDetailHover = file;
    },
  },
};
</script>

<style scoped>
.receive-main {
  margin-bottom: 8px;
}

.fileName {
  word-break: break-all;
}

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
  width: 100%;
}

.fileContainerDiv:hover {
  background-color: rgb(235, 240, 240);
}

.action {
  display: none;
  clear: both;
  background-color: white;
  padding: 5px;
  border: solid 1px rgb(212, 208, 208);
  position: absolute;
  top: 0px;
  right: 0px;
}

.fileContainerDiv:hover .action {
  display: inline-block;
}

.fileName:hover {
  cursor: pointer;
}
.btnAction {
  margin-left: 5px;
  margin-right: 5px;
}
.btnAction:hover {
  cursor: pointer;
}
</style>
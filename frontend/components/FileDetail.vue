<template>
  <div class="overlayMainFiles">
    <div class="files-main">
      <div class="files-header">
        <div class="block" v-if="file.size != null">
          <b>{{ file.name }} | {{ size }} Mb</b>
        </div>
        <div v-else class="block">
          <b>Name file :</b>
          <input type="text" v-model="file.name" />
        </div>

        <button
          class="w3-button w3-small w3-bold w3-theme-l3 w3-margin-left"
          v-if="(type == 'IMAGE' || type == 'TEXT') && !showEdit"
          @click="openEdit()"
        >
          Open Web Ide
        </button>
        <button
          class="w3-button w3-small w3-bold w3-theme-l3 w3-margin-left"
          @click="saveEdit()"
          v-if="showEdit"
        >
          Save
        </button>
        <div class="files-action">
          <img
            class="imgBtn-Files"
            src="~/assets/icon/download.png"
            style="width: 22px"
            @click="downloadFile()"
          />

          <img
            class="imgBtn-Files"
            src="~/assets/icon/close.png"
            style="width: 30px"
            @click="$emit('close')"
          />
        </div>
      </div>
      <div class="files-container" v-if="!showEdit">
        <img :src="dataShow" v-if="type == 'IMAGE'" />
        <video controls v-if="type == 'VIDEO'">
          <source :src="dataShow" />
          Your browser does not support the video tag.
        </video>
        <textarea
          readonly="true"
          class="files-text"
          :value="dataShow"
          v-if="type == 'TEXT'"
        />
        <div v-if="type == null">Your browser doesn't support file format</div>
      </div>
      <div class="files-container" v-show="showEdit">
        <!--textarea
          class="files-text"
          v-model="dataEdit"
          v-show="type == 'TEXT'"
          spellcheck="false"
        /-->
        <pre id="txtAce" v-show="type == 'TEXT'"></pre>
        <canvas id="canvas" v-show="type == 'IMAGE'"></canvas>
      </div>
      <div class="w3-margin-top w3-margin-left">
        <div v-show="showEdit" class="block">
          <div class="block" v-show="type == 'IMAGE'">
            Color:
            <input id="color" type="color" @change="changeColor()" />
            &nbsp;&nbsp; Size:
            <input id="size" size="5" @change="changeSizeMouse()" />
            &nbsp;&nbsp;
          </div>
          <div class="block" v-show="type == 'TEXT'">
            <button
              class="w3-button w3-small w3-bold w3-theme-l3"
              @click="editor.session.getUndoManager().undo()"
            >
              Undo
            </button>
            <button
              class="w3-button w3-small w3-bold w3-theme-l3"
              @click="editor.session.getUndoManager().redo()"
            >
              Redo
            </button>
            <button class="w3-button w3-small w3-bold w3-theme-l3" @click="editor.setValue('')">
              Clear
            </button>
            |
            <button class="w3-button w3-small w3-bold w3-theme-l3" @click="runCode()">
              Run Code
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src = "~/modules/ace.js"></script>
<script>
import { Editor } from "~/modules/ace.js";
export default {
  props: ["file"],
  computed: {},
  data() {
    return {
      type: null,
      dataShow: null,
      showEdit: false,
      dataEdit: null,

      draw: {
        canvas: null,
        ctx: null,
      },
      editor: null,
    };
  },
  computed: {
    size() {
      let size = this.file.size / (1024 * 1024);
      return size.toFixed(2);
    },
  },
  mounted() {
    console.log("on file detail");

    if (this.file.type.startsWith("image/")) {
      this.type = "IMAGE";
      this.dataShow = URL.createObjectURL(this.file);
    }

    if (this.file.type.startsWith("video/")) {
      this.type = "VIDEO";
      this.dataShow = URL.createObjectURL(this.file);
    }

    if (this.file.type.startsWith("text/")) {
      this.type = "TEXT";
      const reader = new FileReader();
      reader.onload = (event) => {
        this.dataShow = event.target.result;
      };
      reader.readAsText(this.file);
    }

    //create

    if (this.file.type == "CREATE_TEXT") {
      this.type = "TEXT";
      this.openEdit();
    }

    if (this.file.type == "CREATE_DRAW") {
      this.type = "IMAGE";
      this.openEdit();
    }
  },
  methods: {
    downloadFile() {
      let downloadLink = document.createElement("a");

      downloadLink.download = this.file.name;
      downloadLink.href = URL.createObjectURL(this.file);
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      downloadLink.click();
      downloadLink.remove();
    },

    openEdit() {
      this.showEdit = true;
      if (this.type == "TEXT") {
        this.dataEdit = this.dataShow;
        if (this.dataEdit == null) {
          this.dataEdit = "";
        }
        ace.config.set("basePath", "/");
        this.editor = ace.edit("txtAce");
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/html");
        this.editor.setOptions({
          fontSize: "12pt",
        });
        this.editor.setValue(this.dataEdit);
      }

      if (this.type == "IMAGE") {
        let isDrawing = false;
        let x = 0;
        let y = 0;

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        canvas.height = 800;
        canvas.width = window.innerWidth / 1.02;

        let dataImg = new Image();
        dataImg.src = this.dataShow;
        dataImg.onload = function () {
          canvas.width = dataImg.width;
          canvas.height = dataImg.height;
          ctx.drawImage(dataImg, 0, 0);
          ctx.lineWidth = size.value;
          ctx.strokeStyle = color.value;
        };

        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        let color = document.getElementById("color");
        let size = document.getElementById("size");

        size.value = ctx.lineWidth;
        color.value = ctx.strokeStyle;

        ctx.fillStyle = "#2D333B";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        canvas.addEventListener("mousedown", (e) => {
          x = e.offsetX;
          y = e.offsetY;
          isDrawing = true;
        });

        canvas.addEventListener("mousemove", (e) => {
          if (isDrawing === true) {
            drawLine(ctx, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
          }
        });

        window.addEventListener("mouseup", (e) => {
          if (isDrawing === true) {
            drawLine(ctx, x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
          }
        });

        function drawLine(ctx, x1, y1, x2, y2) {
          ctx.beginPath();

          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          ctx.closePath();
        }

        this.draw.canvas = canvas;
        this.draw.ctx = ctx;
      }
    },
    changeSizeMouse() {
      let size = document.getElementById("size");
      this.draw.ctx.lineWidth = size.value;
    },
    changeColor() {
      let color = document.getElementById("color");
      this.draw.ctx.strokeStyle = color.value;
    },

    runCode(){
      let w = window.open();
			w.document.open();
			w.document.write(this.editor.getValue());
			w.document.close();
    },

    saveEdit() {
      if (this.file.name == null) {
        alert("Name file must not null ");
        return;
      }
      if (this.type == "TEXT") {
        //this.dataEdit = this.dataShow;
        this.dataEdit = this.editor.getValue();

        if (this.file.type == "CREATE_TEXT") {
          this.file.type = "text/plain";
        }

        let dataBlob = new Blob([this.dataEdit], { type: this.file.type });

        const dataSave = new File([dataBlob], this.file.name, {
          type: this.file.type,
        });

        //this.file = dataSave;
        this.$emit("saveEdit", dataSave);
      }
      console.log(this.type);
      if (this.type == "IMAGE") {
        var canvas = document.getElementById("canvas");

        if (this.file.type == "CREATE_DRAW") {
          this.file.type = "image/png";
        }
        canvas.toBlob((dataBlob) => {
          const dataSave = new File([dataBlob], this.file.name, {
            type: this.file.type,
          });

          //this.file = dataSave;
          this.$emit("saveEdit", dataSave);
        });
      }
    },
  },
};
</script>

<style scoped>
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
  position: fixed;
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
  height: calc(100% - 95px);
  border-bottom: 1px solid rgb(180, 178, 178);
  overflow: auto;
  text-align: center;
  position: relative;
  background-color: white;
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
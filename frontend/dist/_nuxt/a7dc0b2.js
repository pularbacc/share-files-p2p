(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4],{259:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("00cbf632",content,!0,{sourceMap:!1})},262:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACBklEQVRoge2Yyy4EQRSGvyEZKxazE3GJEFsmsRMLtzXhgWx4AIvBM7jMA1jyEojLIFbuFkRGWFThzJjqS1XXTEJ9SSWnp8+p8/9d09NdA4FAIPBXGQEugHNg2FeTNl8TA4tAL9APLPlq4tNAXsQdvpr4NNAUgoFWEwy0mmCg1fwLAwPAJnAJVIGPBuMFWEnRd1XXNJqrqnttoJ7iTswBT4ZG9eO5rnZZnFsWn+d0bpI5H4GZKIFRKzAAbAOdkRYVr8Bagjy0sDVdE0cXsAP0JZy7hk1+rsQpMEXt+00cphWIIw9MA2eifj1F/TeXYoIpi3pbA19Mi/qKKSnqK9Qt4gMLAa7si7jHlBRloF3Eb85y0iN7tpuS/sVzII5B4Bg4AYoJ8os6t0IGW80sDMwDQygje0SbKOqcQdRP44Jr8ywM7AJ3Oi6gBI41yBvT5wr6+A7YyqC/EflEjKMI3Ir8W6AsjssNzif5uqXR4Fw8Ctzw+3WgftwD4540OBfHmUgj3laDc7HJRFrxLhqci+tN2Ih31eBWjLpJj4BDkt2wVhpyMcVJ8nwSq+FPv0q8izjNPiArZM93U1KUgWsRTzjLSc+kiK9sJtjg5wY6Q+1Nm7ESeWCW2h1ZyWaiftSmOsnm2+d4wHJPDOqqt9LEA2pr6UQfagkrmP8XynJUda8SDlc+EAgEmsMnirAThvyxHLsAAAAASUVORK5CYII="},263:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABOUlEQVRoge3Yy0rDUBRG4Q+npWqFCt5AnTnwDRz40IIjUXEgXhDUgfUC6pPUQRsaS629nDZJ2WuUQfizF+ckZ+8QBEEQBEEQBDPiAOfYSJhZwwmOE2b+yxnaeMZ6grw6rnKZSwkyR6KJx+6DX0y3MjVcdLO+sT91dWPSwH23gBY2J8jol9hLVt2YTCOTl/hSoERGXubVaDI1XCqRREYDd3oyW0PuXca1Ekpk5GXeDJYpvUTGqr9lVvyW2J17dWPSL7OtghIZa3jQKfwdN93rD+wUWNdErOJWR6CNTzNcibm1AlVlIbbWoC9X5V72YWdJZc6QUU730rYmGeP0W6WVmaQDLk37npGqjS9UJj8ltkw2JdZ0Zv/CpsMmnqQbdQuTWZifD4c6MikkMuo4xVHCzCAIgiAIgiDo8QM1xHdbMz0xuQAAAABJRU5ErkJggg=="},264:function(t,e,n){"use strict";n(259)},265:function(t,e,n){var o=n(56)(!1);o.push([t.i,".overlayMainFiles[data-v-0486a731]{position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:2}.files-main[data-v-0486a731]{position:fixed;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);border:1px solid #000;border-radius:5px;width:calc(100% - 40px);height:calc(100vh - 120px);top:70px;left:20px;background-color:#fff;padding:10px;z-index:1}.files-header[data-v-0486a731]{padding-bottom:10px;color:#000}.files-container[data-v-0486a731],.files-header[data-v-0486a731]{border-bottom:1px solid #b4b2b2}.files-container[data-v-0486a731]{height:calc(100% - 95px);overflow:auto;text-align:center;position:relative;background-color:#fff}.files-action[data-v-0486a731]{clear:both;display:inline-block;float:right}.imgBtn-Files[data-v-0486a731]:hover{cursor:pointer}.imgBtn-Files[data-v-0486a731]{margin-left:20px}.files-text[data-v-0486a731]{background-color:#2d333b;color:#fff;text-align:left;width:100%;font-size:15px;height:calc(100% - 5px);outline:none;padding:5px;border:1px solid #000}.block[data-v-0486a731],.files-text[data-v-0486a731]{display:inline-block;clear:both}pre[data-v-0486a731]{width:100%;height:calc(100% - 5px);padding:5px;outline:none;border:thin solid #666e77;margin:0}",""]),t.exports=o},266:function(t,e,n){"use strict";n.r(e);var o,l=n(9),r=(n(261),n(127),n(13),n(28),n(29),n(260),n(185),n(26),n(267),o={props:["file"],computed:{},data:function(){return{type:null,dataShow:null,showEdit:!1,dataEdit:null,draw:{canvas:null,ctx:null},editor:null}}},Object(l.a)(o,"computed",{size:function(){var t=this.file.size/1048576;return t.toFixed(2)}}),Object(l.a)(o,"mounted",(function(){var t=this;if(console.log("on file detail"),this.file.type.startsWith("image/")&&(this.type="IMAGE",this.dataShow=URL.createObjectURL(this.file)),this.file.type.startsWith("video/")&&(this.type="VIDEO",this.dataShow=URL.createObjectURL(this.file)),this.file.type.startsWith("text/")){this.type="TEXT";var e=new FileReader;e.onload=function(e){t.dataShow=e.target.result},e.readAsText(this.file)}"CREATE_TEXT"==this.file.type&&(this.type="TEXT",this.openEdit()),"CREATE_DRAW"==this.file.type&&(this.type="IMAGE",this.openEdit())})),Object(l.a)(o,"methods",{downloadFile:function(){var t=document.createElement("a");t.download=this.file.name,t.href=URL.createObjectURL(this.file),t.style.display="none",document.body.appendChild(t),t.click(),t.remove()},openEdit:function(){if(this.showEdit=!0,"TEXT"==this.type&&(this.dataEdit=this.dataShow,null==this.dataEdit&&(this.dataEdit=""),ace.config.set("basePath","/"),this.editor=ace.edit("txtAce"),this.editor.setTheme("ace/theme/monokai"),this.editor.session.setMode("ace/mode/html"),this.editor.setOptions({fontSize:"12pt"}),this.editor.setValue(this.dataEdit)),"IMAGE"==this.type){var t=function(t,e,n,o,l){t.beginPath(),t.moveTo(e,n),t.lineTo(o,l),t.stroke(),t.closePath()},e=!1,n=0,o=0,canvas=document.getElementById("canvas"),l=canvas.getContext("2d");canvas.height=800,canvas.width=window.innerWidth/1.02;var r=new Image;r.src=this.dataShow,r.onload=function(){canvas.width=r.width,canvas.height=r.height,l.drawImage(r,0,0),l.lineWidth=c.value,l.strokeStyle=d.value},l.lineWidth=2,l.strokeStyle="white";var d=document.getElementById("color"),c=document.getElementById("size");c.value=l.lineWidth,d.value=l.strokeStyle,l.fillStyle="#2D333B",l.fillRect(0,0,canvas.width,canvas.height),canvas.addEventListener("mousedown",(function(t){n=t.offsetX,o=t.offsetY,e=!0})),canvas.addEventListener("mousemove",(function(r){!0===e&&(t(l,n,o,r.offsetX,r.offsetY),n=r.offsetX,o=r.offsetY)})),window.addEventListener("mouseup",(function(r){!0===e&&(t(l,n,o,r.offsetX,r.offsetY),n=0,o=0,e=!1)})),this.draw.canvas=canvas,this.draw.ctx=l}},changeSizeMouse:function(){var t=document.getElementById("size");this.draw.ctx.lineWidth=t.value},changeColor:function(){var t=document.getElementById("color");this.draw.ctx.strokeStyle=t.value},runCode:function(){var t=window.open();t.document.open(),t.document.write(this.editor.getValue()),t.document.close()},saveEdit:function(){var t=this;if(null!=this.file.name){if("TEXT"==this.type){this.dataEdit=this.editor.getValue(),"CREATE_TEXT"==this.file.type&&(this.file.type="text/plain");var e=new Blob([this.dataEdit],{type:this.file.type}),n=new File([e],this.file.name,{type:this.file.type});this.$emit("saveEdit",n)}if("IMAGE"==this.type){var canvas=document.getElementById("canvas");"CREATE_DRAW"==this.file.type&&(this.file.type="image/png"),canvas.toBlob((function(e){var n=new File([e],t.file.name,{type:t.file.type});t.$emit("saveEdit",n)}))}}else alert("Name file must not null ")}}),o),d=(n(264),n(21)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"overlayMainFiles"},[o("div",{staticClass:"files-main"},[o("div",{staticClass:"files-header"},[null!=t.file.size?o("div",{staticClass:"block"},[o("b",[t._v(t._s(t.file.name)+" | "+t._s(t.size)+" Mb")])]):o("div",{staticClass:"block"},[o("b",[t._v("Name file :")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.file.name,expression:"file.name"}],attrs:{type:"text"},domProps:{value:t.file.name},on:{input:function(e){e.target.composing||t.$set(t.file,"name",e.target.value)}}})]),t._v(" "),"IMAGE"!=t.type&&"TEXT"!=t.type||t.showEdit?t._e():o("button",{staticClass:"w3-button w3-small w3-bold w3-theme-l3 w3-margin-left",on:{click:function(e){return t.openEdit()}}},[t._v("\n        Open Web Ide\n      ")]),t._v(" "),t.showEdit?o("button",{staticClass:"w3-button w3-small w3-bold w3-theme-l3 w3-margin-left",on:{click:function(e){return t.saveEdit()}}},[t._v("\n        Save\n      ")]):t._e(),t._v(" "),o("div",{staticClass:"files-action"},[o("img",{staticClass:"imgBtn-Files",staticStyle:{width:"22px"},attrs:{src:n(262)},on:{click:function(e){return t.downloadFile()}}}),t._v(" "),o("img",{staticClass:"imgBtn-Files",staticStyle:{width:"30px"},attrs:{src:n(263)},on:{click:function(e){return t.$emit("close")}}})])]),t._v(" "),t.showEdit?t._e():o("div",{staticClass:"files-container"},["IMAGE"==t.type?o("img",{attrs:{src:t.dataShow}}):t._e(),t._v(" "),"VIDEO"==t.type?o("video",{attrs:{controls:""}},[o("source",{attrs:{src:t.dataShow}}),t._v("\n        Your browser does not support the video tag.\n      ")]):t._e(),t._v(" "),"TEXT"==t.type?o("textarea",{staticClass:"files-text",attrs:{readonly:"true"},domProps:{value:t.dataShow}}):t._e(),t._v(" "),null==t.type?o("div",[t._v("Your browser doesn't support file format")]):t._e()]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showEdit,expression:"showEdit"}],staticClass:"files-container"},[o("pre",{directives:[{name:"show",rawName:"v-show",value:"TEXT"==t.type,expression:"type == 'TEXT'"}],attrs:{id:"txtAce"}}),t._v(" "),o("canvas",{directives:[{name:"show",rawName:"v-show",value:"IMAGE"==t.type,expression:"type == 'IMAGE'"}],attrs:{id:"canvas"}})]),t._v(" "),o("div",{staticClass:"w3-margin-top w3-margin-left"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showEdit,expression:"showEdit"}],staticClass:"block"},[o("div",{directives:[{name:"show",rawName:"v-show",value:"IMAGE"==t.type,expression:"type == 'IMAGE'"}],staticClass:"block"},[t._v("\n          Color:\n          "),o("input",{attrs:{id:"color",type:"color"},on:{change:function(e){return t.changeColor()}}}),t._v("\n             Size:\n          "),o("input",{attrs:{id:"size",size:"5"},on:{change:function(e){return t.changeSizeMouse()}}}),t._v("\n            \n        ")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:"TEXT"==t.type,expression:"type == 'TEXT'"}],staticClass:"block"},[o("button",{staticClass:"w3-button w3-small w3-bold w3-theme-l3",on:{click:function(e){t.editor.session.getUndoManager().undo()}}},[t._v("\n            Undo\n          ")]),t._v(" "),o("button",{staticClass:"w3-button w3-small w3-bold w3-theme-l3",on:{click:function(e){t.editor.session.getUndoManager().redo()}}},[t._v("\n            Redo\n          ")]),t._v(" "),o("button",{staticClass:"w3-button w3-small w3-bold w3-theme-l3",on:{click:function(e){return t.editor.setValue("")}}},[t._v("\n            Clear\n          ")]),t._v("\n          |\n          "),o("button",{staticClass:"w3-button w3-small w3-bold w3-theme-l3",on:{click:function(e){return t.runCode()}}},[t._v("\n            Run Code\n          ")])])])])])])}),[],!1,null,"0486a731",null);e.default=component.exports},271:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("88192658",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";n(271)},284:function(t,e,n){var o=n(56)(!1);o.push([t.i,".fileContainerDiv[data-v-14223b48]{margin-top:10px;padding:10px;position:relative}.fileContainerDiv[data-v-14223b48]:hover{background-color:#ebf0f0}.actionContainer[data-v-14223b48]{display:none;clear:both;background-color:#fff;padding:5px;border:1px solid #d4d0d0;position:absolute;top:0;right:0}.fileContainerDiv:hover .actionContainer[data-v-14223b48]{display:inline-block}.btnAction[data-v-14223b48]{margin-left:5px;margin-right:5px}.btnAction[data-v-14223b48]:hover,.fileName[data-v-14223b48]:hover{cursor:pointer}.dropdown[data-v-14223b48]{display:inline-block;clear:both}.dropdown .dropbtn[data-v-14223b48]{border:none;outline:none;color:#fff;padding:14px 16px;background-color:inherit;font-family:inherit;margin:0}.dropdown:hover .dropbtn[data-v-14223b48],.navbar a[data-v-14223b48]:hover{background-color:red}.dropdown-content[data-v-14223b48]{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown-content a[data-v-14223b48]{float:none;color:#000;padding:12px 16px;text-decoration:none;display:block;text-align:left}.dropdown-content a[data-v-14223b48]:hover{background-color:#ddd;cursor:pointer}.dropdown:hover .dropdown-content[data-v-14223b48]{display:block}",""]),t.exports=o},299:function(t,e,n){"use strict";n.r(e);var o=n(8),l=(n(58),n(261),n(126),n(26),n(40),{components:{FileDetail:n(266).default},props:["connect","index"],mounted:function(){var t=this,e=document.getElementById("fileInputHover"+this.index);e.addEventListener("change",(function(){for(var i=0;i<e.files.length;i++)console.log(e.files[i]),t.filesData.push(e.files[i])}))},data:function(){return{filesData:[],fileDetailData:null}},computed:{size:function(){for(var t=0,i=0;i<this.filesData.length;i++)t+=this.filesData[i].size;return t/=1048576,t.toFixed(2)}},methods:{openFileDetail:function(t){this.fileDetailData=t},addFiles:function(){document.getElementById("fileInputHover"+this.index).click()},createFile:function(t){var e={type:null};switch(t){case"TEXT":e.type="CREATE_TEXT";break;case"DRAW":e.type="CREATE_DRAW"}this.openFileDetail(e)},unChoseFile:function(t){for(var i=0;i<this.filesData.length;i++)if(this.filesData[i]==t)return void this.filesData.splice(i,1)},saveEdit:function(t){var e=this.filesData.indexOf(this.fileDetailData);e>=0?(this.filesData[e]=t,this.fileDetailData=t):(this.filesData.push(t),this.fileDetailData=t)},sendFiles:function(){var t=this;if(null!=this.connect.conIce){var e=0;!function n(l){console.log("on send file :"+l.name);var r={type:"InitMessage",name:l.name,size:l.size,typeFile:l.type};t.connect.channel.send(JSON.stringify(r));var d=new FileReader,c=0;function f(t){var e=l.slice(c,t+16384);d.readAsArrayBuffer(e)}d.addEventListener("load",function(){var r=Object(o.a)(regeneratorRuntime.mark((function o(r){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.connect.channel.send(r.target.result),!((c+=r.target.result.byteLength)<l.size)){o.next=6;break}f(c),o.next=10;break;case 6:return console.log("out reader file :"+l.name),console.log(e),e<t.filesData.length-1&&(e++,n(t.filesData[e])),o.abrupt("return");case 10:case"end":return o.stop()}}),o)})));return function(t){return r.apply(this,arguments)}}()),f(0)}(this.filesData[e])}else alert("You must connect first")}}}),r=l,d=(n(283),n(21)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-row-padding"},[n("div",{staticClass:"w3-card w3-round w3-white"},[n("div",{staticClass:"w3-container w3-padding"},[n("h4",[t._v("My Files")]),t._v(" "),n("div",{staticClass:"w3-container w3-border w3-theme-l5 w3-padding-16"},[t._l(t.filesData,(function(e,o){return n("div",{key:o},[n("div",[n("div",{staticClass:"w3-text-blue fileContainerDiv"},[n("div",{staticClass:"fileName",on:{click:function(n){return t.openFileDetail(e)}}},[n("i",{staticClass:"fa fa-file-text-o",staticStyle:{"margin-right":"10px"}}),n("b",[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"actionContainer"},[n("i",{staticClass:"fa fa-trash btnAction",on:{click:function(n){return t.unChoseFile(e)}}})])])])])})),t._v(" "),n("button",{staticClass:"w3-button w3-small w3-theme-l3 w3-margin-top",on:{click:function(e){return t.addFiles()}}},[t._v("\n          Upload\n        ")]),t._v(" "),n("div",{staticClass:"dropdown"},[t._m(0),t._v(" "),n("div",{staticClass:"dropdown-content"},[n("a",{on:{click:function(e){return t.createFile("TEXT")}}},[t._v("Text")]),t._v(" "),n("a",{on:{click:function(e){return t.createFile("DRAW")}}},[t._v("draw")])])]),t._v(" "),n("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"fileInputHover"+t.index,multiple:""}})],2),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"w3-left"},[t._v("Total size: "+t._s(t.size)+" Mb")]),t._v(" "),t._m(1),t._v(" "),n("div",[n("button",{staticClass:"w3-button w3-theme-d1 w3-margin-bottom w3-block",attrs:{type:"button"},on:{click:t.sendFiles}},[n("i",{staticClass:"fa fa-paper-plane"}),t._v(" Send\n        ")])])])]),t._v(" "),null!=t.fileDetailData?n("File-Detail",{attrs:{file:t.fileDetailData},on:{close:function(e){t.fileDetailData=null},saveEdit:t.saveEdit}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"w3-button w3-small w3-theme-l3 w3-margin-top"},[t._v("\n            Create "),n("i",{staticClass:"fa fa-caret-down"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"w3-right"},[n("label",[t._v("Send to all")]),t._v(" "),n("input",{attrs:{type:"checkbox"}})])}],!1,null,"14223b48",null);e.default=component.exports}}]);
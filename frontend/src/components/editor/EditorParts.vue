<template>
  <div style="height: 500px" id="editor">
    <div ref="ace" class="ace"></div>
  </div>
</template>

<script>
import ace from "ace-builds";
import "ace-builds/webpack-resolver";

import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-github";

import "ace-builds/src-noconflict/ext-language_tools";

export default {
  name: "EditorParts",
  data() {
    return {
      editor: this.$store.state.editor,
    };
  },
  mounted() {
    this.editor = ace.edit(this.$refs.ace);
    this.editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
    });
    this.editor.session.setMode("ace/mode/python");
    this.editor.setTheme("ace/theme/monokai");
    this.$store.commit("bindEditor", this.editor);
  },
};
</script>

<style scoped>
.ace {
  z-index: 10;
  position: relative !important;
  border: 1px solid lightgray;
  margin: auto;
  height: 100%;
  width: 100%;
}
</style>

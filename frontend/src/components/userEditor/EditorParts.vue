<template>
  <div style="height: 500px" id="editor">
    <div ref="ace" class="ace"></div>
    <v-btn @click="test">test</v-btn>
  </div>
</template>

<script>
import axios from "axios";
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
      manageId: "",
      code: "",
    };
  },
  async created() {
    const userId = this.$store.state.userId;
    console.log(userId);
    this.manageId = this.$route.params.manageId;
    const codeInfo = await axios.get(`/v1/${userId}/code/${this.manageId}`);
    this.code = codeInfo.data.code;
    console.log(this.code);
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
    this.editor.setValue(String(this.code));
  },
  methods: {
    test() {
      this.editor.setValue(String(this.code));
    },
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

<template>
  <div>
    <v-btn color="primary" @click="execProgram" class="exec-button">実行</v-btn>
    <v-textarea solo background-color="black" :value="result"> </v-textarea>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ButtonParts",
  data() {
    return {
      editor: this.$store.state.editor,
      id: "",
      result: "",
    };
  },
  methods: {
    async execProgram() {
      const language = this.$store.state.language;
      this.editor = this.$store.state.editor;
      console.log(this.editor.getValue());
      const res = await axios.post("http://api.paiza.io/runners/create", {
        source_code: this.editor.getValue(),
        language: language,
        input: "1",
        longpoll: "",
        longpoll_timeout: "",
        api_key: "guest",
      });
      this.id = res.data.id;
      console.log(res);

      await new Promise((resolve) =>
        setTimeout(async () => {
          const status = await axios.get(
            `http://api.paiza.io/runners/get_status/?id=${this.id}&api_key=guest`
          );
          console.log(status);
          resolve();
        }, 2000)
      );

      const result = await axios.get(
        `http://api.paiza.io/runners/get_details/?id=${this.id}&api_key=guest`
      );
      this.result = result.data.stdout;
      console.log(result);
    },
  },
};
</script>

<style>
textarea {
  color: white !important;
}

.exec-button {
  margin: 10px 0px;
}
</style>

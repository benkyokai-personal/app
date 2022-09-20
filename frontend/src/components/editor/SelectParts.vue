<template>
  <v-container fluid class="languages">
    <v-row>
      <v-col cols="3">
        <v-select
          v-model="language"
          :items="languageList"
          outlined
          hide-details
          single-line
          menu-props="auto"
          :label="language"
          size="small"
          @change="changeLanguage()"
        >
          <v-option
            v-for="language in languageList"
            :value="language"
            :key="language"
          ></v-option>
        </v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SelectParts",
  data() {
    return {
      language: "Python",
      languageList: ["python", "c", "javascript"],
      editor: this.$store.state.editor,
    };
  },

  methods: {
    changeLanguage() {
      this.editor = this.$store.state.editor;
      this.editor.getSession().setMode(`ace/mode/${this.language}`);
      this.$store.commit("bindEditor", this.editor);
      this.$store.commit("changeLanguage", this.language);
    },
  },
};
</script>

<style scoped>
.languages {
  z-index: 10;
}
</style>

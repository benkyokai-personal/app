<template>
  <div id="editor">
    <SelectParts></SelectParts>
    <EditorParts></EditorParts>
    <ButtonParts></ButtonParts>
  </div>
</template>

<script>
import EditorParts from "@/components/userEditor/EditorParts";
import ButtonParts from "@/components/userEditor/ButtonParts";
import SelectParts from "@/components/userEditor/SelectParts";

export default {
  name: "EditorForm",
  components: {
    EditorParts,
    ButtonParts,
    SelectParts,
  },
};
</script>

<style>
.ace[data-v-047d6541] {
  z-index: 1 !important;
}
</style>

<template>
  <div>
    <SelectParts></SelectParts>
    <EditorParts></EditorParts>
    <ButtonParts></ButtonParts>
  </div>
</template>

<script>
import EditorParts from "@/components/editor/EditorParts";
import ButtonParts from "@/components/editor/ButtonParts";
import SelectParts from "@/components/editor/SelectParts";

export default {
  name: "EditorForm",
  components: {
    EditorParts,
    ButtonParts,
    SelectParts,
  },
};
</script>

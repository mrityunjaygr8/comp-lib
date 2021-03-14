export default ({ packageName }: { packageName: string }): string => {
    return `<template>
  <div class="mgr8-${packageName}">
    <!-- your html -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Mgr8${packageName}",
  props: {},
  setup() {
    // your code
  },
});
</script>
<style scoped>
.mgr8-${packageName} {
  /* your style */
}
</style>
`;
};
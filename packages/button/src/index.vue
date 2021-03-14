<template>
  <div class="mgr8-Button">
    <button>
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Mgr8Button",
  props: {},
  setup() {
    // your code
  },
});
</script>

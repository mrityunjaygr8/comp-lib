<template>
  <div class="playground" data-theme="default">
    Hello World
    <mgr8-button type="primary">Primary</mgr8-button>
    <mgr8-button type="plain">Plain</mgr8-button>
    <mgr8-button type="full">Full</mgr8-button>
    <mgr8-button block>Block Primary</mgr8-button>
    <mgr8-button>Default</mgr8-button>
  </div>
</template>

<script>
import Mgr8Button from "@mgr8-components/button";
export default {
  name: "Playground",
  components: {
    Mgr8Button,
  },
};
</script>

<style>
</style>
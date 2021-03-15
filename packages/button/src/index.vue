<template>
  <div
    class="mgr8-Button"
    :class="type"
    :style="{ display: display, width: width }"
  >
    <button>
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
export default defineComponent({
  name: "Mgr8Button",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (value: string) =>
        ["primary", "plain", "full"].includes(value),
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let display: Ref<string> = ref("inline-block");
    let width: Ref<string> = ref("unset");

    if (props.block) {
      display.value = "block";
      width.value = "100%";
    }

    return {
      display,
      width,
    };
  },
});
</script>

<style lang="scss" scoped>
.mgr8-Button {
  cursor: pointer;
  text-align: center;
  line-height: var(--font-base-size);
  font-weight: 400;
  padding: 10px 40px;
  text-transform: uppercase;

  transition: all 0.2s ease-out;
}

.mgr8-Button.primary {
  color: var(--text-color);
  border: dashed 1px var(--text-color);
  background: transparent;

  &:hover {
    color: var(--text-color);
    border-style: solid;
    background-color: var(--act-color);
  }
}
.mgr8-Button.full {
  color: var(--bkg-color);
  border-color: var(--text-color);
  border: dashed 1px;
  background-color: var(--text-color);

  &:hover {
    color: var(--text-color);
    border-color: var(--text-color);
    border-style: solid;
    background-color: var(--act-color);
  }
}
.mgr8-Button.plain {
}
</style>

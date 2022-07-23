<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface Properties {
  classButton?: string;
  textButton?: string;
  iconButton?: typeof FontAwesomeIcon | string;
  funcButton: Function;
}
const props = defineProps<Properties>()

</script>
<template>
  <button @click="props.funcButton()" :class="props.classButton" class="button">
    <slot></slot>
    {{ props.textButton }}
  </button>
</template>
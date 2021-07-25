<template>
  <div
    tabindex="-1"
    class="fj-progress-spinner"
    :style="{ '--size-spinner': size }"
  >
    <svg
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50%"
        cy="50%"
        r="45"
        :style="{ '--color-spinner': color, 'animation-duration': delay }"
      ></circle>
    </svg>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class App extends Vue {
  @Prop({ default: "var(--text-color)" }) color!: string;
  @Prop({ default: "32px" }) size!: string;
  @Prop({ default: "4000ms" }) delay!: string;
}
</script>

<style lang="scss">
.fj-progress-spinner {
  display: block;
  position: relative;
  overflow: hidden;
  width: var(--size-spinner);
  height: var(--size-spinner);
  svg {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg);
    transform-origin: center;
    overflow: visible;
    animation: mat-progress-spinner-linear-rotate 2000ms linear infinite;
    width: var(--size-spinner);
    height: var(--size-spinner);
    outline: unset;

    > circle {
      stroke: var(--color-spinner);
      outline: unset;
      fill: transparent;
      transform-origin: center;
      transition: stroke-dashoffset 225ms linear;
      transition-property: stroke;
      animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
      animation-iteration-count: infinite;
      animation-name: mat-progress-spinner-stroke-rotate-100;
      stroke-dasharray: 282.743px;
      stroke-width: 10%;
    }
  }
}

@keyframes mat-progress-spinner-linear-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes mat-progress-spinner-stroke-rotate-100 {
  0% {
    stroke-dashoffset: 268.606171575px;
    transform: rotate(0);
  }
  12.5% {
    stroke-dashoffset: 56.5486677px;
    transform: rotate(0);
  }
  12.5001% {
    stroke-dashoffset: 56.5486677px;
    transform: rotateX(180deg) rotate(72.5deg);
  }
  25% {
    stroke-dashoffset: 268.606171575px;
    transform: rotateX(180deg) rotate(72.5deg);
  }
  25.0001% {
    stroke-dashoffset: 268.606171575px;
    transform: rotate(270deg);
  }
  37.5% {
    stroke-dashoffset: 56.5486677px;
    transform: rotate(270deg);
  }
  37.5001% {
    stroke-dashoffset: 56.5486677px;
    transform: rotateX(180deg) rotate(161.5deg);
  }
  50% {
    stroke-dashoffset: 268.606171575px;
    transform: rotateX(180deg) rotate(161.5deg);
  }
  50.0001% {
    stroke-dashoffset: 268.606171575px;
    transform: rotate(180deg);
  }
  62.5% {
    stroke-dashoffset: 56.5486677px;
    transform: rotate(180deg);
  }
  62.5001% {
    stroke-dashoffset: 56.5486677px;
    transform: rotateX(180deg) rotate(251.5deg);
  }
  75% {
    stroke-dashoffset: 268.606171575px;
    transform: rotateX(180deg) rotate(251.5deg);
  }
  75.0001% {
    stroke-dashoffset: 268.606171575px;
    transform: rotate(90deg);
  }
  87.5% {
    stroke-dashoffset: 56.5486677px;
    transform: rotate(90deg);
  }
  87.5001% {
    stroke-dashoffset: 56.5486677px;
    transform: rotateX(180deg) rotate(341.5deg);
  }
  100% {
    stroke-dashoffset: 268.606171575px;
    transform: rotateX(180deg) rotate(341.5deg);
  }
}
@keyframes mat-progress-spinner-stroke-rotate-fallback {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(1170deg);
  }
  50% {
    transform: rotate(2340deg);
  }
  75% {
    transform: rotate(3510deg);
  }
  100% {
    transform: rotate(4680deg);
  }
}
</style>

<template>
  <div class="button-container">
    <button
      ref="previousButton"
      class="previous-button arrow-button"
      @click="decreaseSelectedIndex"
    >
      &lt;
    </button>
    <button
      ref="nextButton"
      class="next-button arrow-button"
      @click="increaseSelectedIndex"
    >
      &gt;
    </button>
  </div>
</template>

<script>
import observer from "~/observer/observer";

export default {
  created() {
    observer.register("removeArrowButton", this.removeArrowButton, this);
  },
  methods: {
    increaseSelectedIndex() {
      observer.notify("changeSelectedIndex", "increase");
    },
    decreaseSelectedIndex() {
      observer.notify("changeSelectedIndex", "decrease");
    },
    removeArrowButton() {
      this.$refs.previousButton.classList.add("dynamic-remove");
      this.$refs.nextButton.classList.add("dynamic-remove");
    }
  }
};
</script>

<style>
.arrow-button {
  z-index: 100;
  position: fixed;
  top: calc(50% - 35px);
  width: 70px;
  height: 70px;
  perspective: 2000px;
  transform-style: preserve-3d;
  border-radius: 50%;
  background-color: white;
  color: black;
  cursor: pointer;
  border: none;
  transform-origin: center;
}

.previous-button {
  left: 40px;
}

.next-button {
  right: 40px;
}

@keyframes dynamic {
  30% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
  }
}

.dynamic-remove {
  animation: dynamic 0.7s;
  animation-fill-mode: forwards;
}
</style>

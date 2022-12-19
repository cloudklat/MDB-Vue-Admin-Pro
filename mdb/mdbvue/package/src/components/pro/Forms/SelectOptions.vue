<template>
  <div class="dropdown-wrapper" ref="popper" :style="wrapperStyle">
    <transition
      @enter="enter"
      @leave="leave"
      @before-enter="beforeEnter"
      @after-enter="updatePopper"
    >
      <div class="dropdown-content select-dropdown" ref="options" v-show="show" role="listbox" :aria-multiselectable="multiple" :id="id">
        <div class="search-wrap" v-if="search">
          <mdb-input
            ref="search"
            class="search mt-0"
            inputClass="px-0"
            :placeholder="searchPlaceholder"
            v-model="searchInput"
            @input="searchValue"
            @keydown.native.down="$emit('focusOption', $event)"
            @keydown.native.enter="$emit('focusOption', $event)"
          />
        </div>
        <p
          v-if="search && typeof result === 'number' && result === 0"
          class="text-muted pl-2"
        >
          <small>{{ resultText }}</small>
        </p>
        <ul
          :class="optionsClass"
          class="mb-0"
          :style="optionsStyle"
          ref="optionList"
        >
          <slot></slot>
        </ul>
        <slot name="footer"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import mdbInput from "../../Forms/Input";
import Popper from "popper.js";

const SelectOptions = {
  name: "SelectOptions",
  data() {
    return {
      options: [],
      searchInput: "",
      result: null,
      flipped: false,
      popperJS: null,
      popperOptions: {
        placement: "bottom",
        eventsEnabled: false,
        modifiers: {
          offset: {
            offset: "0, 0"
          },
          flip: {
            boundriesElement: "viewport"
          }
        }
      }
    };
  },
  components: {
    mdbInput
  },
  props: {
    search: {
      type: Boolean,
      default: false
    },
    searchPlaceholder: {
      type: String
    },
    show: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    bg: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    flipOnScroll: {
      type: Boolean,
      default: false
    },
    scroll: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: String
    },
    resultText: {
      type: String
    },
    disableFilter: {
      type: Boolean,
      default: false
    },
    multiple: Boolean,
    id: String
  },
  computed: {
    wrapperStyle() {
      return this.icon
        ? this.outline
          ? `margin-left: 33px; width: calc(100% - 33px)`
          : `margin-left: 40px; width: calc(100% - 40px)`
        : "";
    },
    optionsClass() {
      return this.scroll ? "options-container scrollbar-grey thin" : "";
    },
    optionsStyle() {
      return this.scroll ? `max-height: ${this.maxHeight}` : "";
    }
  },
  mounted() {
    window.addEventListener("keyup", this.close);

    let offset = this.bg ? "0, 48px" : "0, 12px";

    if (!this.outline) this.popperOptions.modifiers.offset.offset = offset;
    this.popperOptions.onUpdate = this.setFlipped;
    this.popperOptions.onCreate = this.setFlipped;
    if (this.flipOnScroll) this.popperOptions.eventsEnabled = true;

    if (this.search) {
      this.options = this.$refs.options.querySelectorAll("li");
    }
  },
  updated() {
    if (this.search && this.show) {
      this.options = this.$refs.options.querySelectorAll("li");

      if (this.disableFilter) {
        this.$refs.options.style.height = "0px"
        this.$refs.options.style.height =
        this.$refs.options.scrollHeight + "px";
      }
    }
  },
  beforeDestroy() {
    if (this.popperJS) this.popperJS.destroy();
    window.removeEventListener("keyup", this.close);
  },
  methods: {
    close(e) {
      if (this.show && e.keyCode === 27) {
        this.$emit("close");
      }
    },
    beforeEnter(el) {
      el.style.height = "0px";
      el.style.opacity = 1;
    },
    enter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave(el) {
      if (this.flipped) {
        el.style.opacity = 0;
      }
      el.style.height = "0px";
    },
    setFlipped(data) {
      this.flipped = data.flipped;
      if (data.flipped) {
        const offset = this.outline ? "0px" : "46px";
        const margin = this.outline ? "52px" : "0px";
        this.$refs.options.style.top = offset;
        this.$refs.options.style.marginBottom = margin;
      }
    },

    updatePopper() {
      this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();
      this.$nextTick(() => {
        if (this.search && this.show) this.$refs.search.focus();
      });
    },

    searchValue(value) {
      this.$emit("search", value);
      if (this.disableFilter) return;

      let result = 0;

      this.options.forEach(function(option) {
        let optionValue = option
          .getElementsByTagName("span")[0]
          .innerText.toLowerCase();

        if (optionValue.includes(value.toLowerCase())) {
          option.style.display = "block";
          result++;
        } else {
          option.style.display = "none";
        }
      });

      this.$refs.options.style.height = "auto";

      this.result = result;

      this.updatePopper();
    },

    createPopper() {
      this.$nextTick(() => {
        this.popperJS = new Popper(
          this.$refs.popper,
          this.$refs.options,
          this.popperOptions
        );
      });
    }
  },
  watch: {
    show(value) {
      if (value) {
        this.updatePopper();
      } else if (!this.disableFilter) {
        this.searchInput = "";
        this.searchValue("");
      }
    }
  }
};

export default SelectOptions;
export { SelectOptions as mdbSelectDropdown };
</script>

<style scoped>
.dropdown-wrapper {
  top: 0;
  width: 100%;
  position: relative;
}

.dropdown-content {
  display: block;
  opacity: 1;
  width: 100%;
  overflow-y: hidden;
  transition: height 0.3s linear;
}

.scrollbar-grey::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.scrollbar-grey::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.scrollbar-grey::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #9e9e9e;
}

.thin::-webkit-scrollbar {
  width: 4px;
}

.options-container {
  overflow-y: scroll;
}
</style>

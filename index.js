Vue.component("modal", {
  // template: "#modal-template",
  template: `
  <transition name="modal">
  <div class="modal-mask">
  <div class="modal-wrapper">
    <div class="modal-container">

    <div class="modal-body">
      <slot name="body">
      default body
      </slot>
    </div>

    <div class="modal-button" @click="$emit('close')">
      close
    </div>
    </div>
  </div>
  </div>
  </transition>`,
  props: ["html", "css"]
});

new Vue({
  el: "#app",
  data: {
    atoms: [],
    html: "",
    css: "",
    showModal: false
  },
  methods: {
    atomClicked: function(atom) {
      this.html = atom.html;
      this.css = atom.css;
      this.showModal = true;
    }
  },
  mounted() {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbx02bD2zffB-1d3w7vcN9mkF3nnFxTQmKJ0zr_08SZyOm6Wb0w/exec"
      )
      .then(response => (this.atoms = response.data));
  }
});

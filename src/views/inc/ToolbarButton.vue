<template>
    <div class="toolbar">
      <button v-for="(tool, index) in tools" :key="index" :disabled="tool.disabled">
        <font-awesome-icon :icon="tool.icon" />
      </button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import {
    faUndo,
    faRedo,
    faUpload,
    faSave,
    faTrash,
    faEye,
    faInfoCircle,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  
  // Add icons to the library
  library.add(faUndo, faRedo, faUpload, faSave, faTrash, faEye, faInfoCircle);
  
  export default defineComponent({
    components: { FontAwesomeIcon },
    data() {
      return {
        tools: [
          { name: "Undo", icon: "undo", disabled: false },
          { name: "Redo", icon: "redo", disabled: false },
          { name: "Upload", icon: "upload", disabled: false },
          { name: "Save", icon: "save", disabled: false },
          { name: "Delete", icon: "trash", disabled: true },
          { name: "View", icon: "eye", disabled: false },
          { name: "Info", icon: "info-circle", disabled: false },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  .toolbar {
    display: flex;
    gap: 8px;
    background: #f5f5f5;
    padding: 0px;
    border-radius: 5px;
    border: 1px solid #ddd;margin-top: 10px;
  }
  
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 8px;
    font-size: 20px;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  button:hover {
    color: #007bff;
  }
  </style>
  
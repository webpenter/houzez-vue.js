<template>
 <div class="alert alert-success" :class="{
    'alert-success':type=='success',
    'alert-danger':type=='danger',
    'alert-info':type=='info',
    'alert-warning':type=='warning',
    }"  role="alert">
          <template v-if="message != ''">
                 {{ message }}
          </template>
          <template v-else>
                Alert.
          </template>
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
        </button>
</div><!-- alert -->
</template>

<script setup>
const props = defineProps(['message','type']);
</script>

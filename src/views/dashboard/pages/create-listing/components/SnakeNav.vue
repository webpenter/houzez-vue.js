<template>
 <div class="dashaboard-snake-nav">
                <div class="d-flex justify-content-between">
                  <div v-for="step in 12" class="step-block text-center" :class="{'active number-active': active == step}">
                    <div class="number">{{step}}</div>
                  </div>
                  <div class="step-block text-center" :class="{'active number-active': active=== 'done' }">
                    <div class="number">&#x2713;</div>
                  </div>
                </div>
            </div><!-- dashaboard-snake-nav -->
</template>

<script setup>
defineProps(['active']);
</script>

<style scoped>
.number{
  font-size:13px;
  border: 1.2px solid black;
  margin-inline: auto;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 10px;
}

.number-active{
   .number{
     background-color: #00AEFF;
     border-color: #00AEFF;
     color: white;
   }
}
</style>
<template>
      <section class="content-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-12"> 
                        <h2 style="margin: 100px 0 30px 0; text-align: center;">{{ $t('Partners') }}</h2>
                        <Partner />
                    </div><!-- col-12 -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- listing-wrap -->
</template>

<script setup>
import Partner from './Partner.vue';
</script>


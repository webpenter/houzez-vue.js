<template>
    <section class="content-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-12">

                       <h2 class="my-5 mb-3 text-center">Meet Our Agents</h2>

                        <div class="row">
                            <div class="col-4">
                                <!-- <?php include 'modules/team.php';?> -->
                                <Agent />
                            </div>
                            <div class="col-4">
                                <!-- <?php include 'modules/team.php';?> -->
                                <Agent />
                            </div>
                            <div class="col-4">
                                <!-- <?php include 'modules/team.php';?> -->
                                <Agent />
                            </div>
                        </div>

                    </div><!-- col-12 -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- listing-wrap -->
</template>

<script setup>
import Agent from './Agent.vue';
</script>
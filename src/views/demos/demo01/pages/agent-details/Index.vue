<template>
    <!-- ✅ Show Skeleton When Loading -->
    <template v-if="loading">
        <AgentSkeleton />
    </template>

    <template v-else>
        <section class="content-wrap">
            <div class="container">
                <div class="agent-profile-wrap">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="agent-image">
                                <div class="agent-company-logo">
                                    <img class="img-fluid"
                                    :src="Logo"
                                        alt="agent-company-logo"
                                    >
                                </div>
                                <img
                                    class="img-fluid"
                                    :src="agent.profile?.profile_picture"
                                    alt="Agent"
                                />
                            </div><!-- agent-image -->
                        </div><!-- col-lg-4 col-md-4 col-sm-12 -->
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <div class="agent-profile-top-wrap">
                                <div class="agent-profile-header">
                                    <h1>{{ agent.name }} 
                                        <!-- <span class="badge badge-success agent-verified-badge"><i
                                                class="houzez-icon icon-check-circle-1 mr-1"></i> Verified</span> -->
                                            </h1>
                                    <!-- <div class="rating-score-wrap">
                                        <span class="rating-score-text">3.4</span>
                                        <span class="star">
                                            <span class="icon-rating full-star"></span>
                                            <span class="icon-rating full-star"></span>
                                            <span class="icon-rating full-star"></span>
                                            <span class="icon-rating half-star"></span>
                                            <span class="icon-rating empty-star"></span>
                                        </span>
                                        <a href="#tab-content">See all reviews</a>
                                    </div> -->
                                </div>
                                <!-- agent-profile-content -->
                                <p class="agent-list-position">
                                     {{ agent.profile?.position || null }} 
                                     <a href="#"><!-- Modern HouseReal Estate --></a>
                                </p>
                            </div><!-- agent-profile-header -->
                            <div class="agent-profile-content">
                                <ul class="list-unstyled">
                                    <li><strong>Agent License:</strong> {{ agent.profile?.license || null }} </li>
                                    <li><strong>Tax Number:</strong> {{ agent.profile?.tax_number || null }} </li>
                                    <li><strong>Service Areas:</strong> {{ agent.profile?.service_areas || null }} </li>
                                    <li><strong>Specialties:</strong> {{ agent.profile?.specialties || null }} </li>
                                </ul>
                            </div><!-- agent-profile-content -->
                            <div class="agent-profile-buttons">
                                <!-- <button class="btn btn-secondary" data-toggle="modal"
                                    data-target="#mobile-property-form">
                                    Send Email
                                </button> -->
                                <button type="button" class="btn btn-call">
                                    <span class="hide-on-click">Call</span>
                                    <span class="show-on-click">{{ agent.profile?.phone || null }}</span>
                                </button>
                            </div><!-- agent-profile-buttons -->
                        </div><!-- col-lg-8 col-md-8 col-sm-12 -->
                    </div><!-- row -->
                </div><!-- agent-profile-wrap -->
                <!-- <div class="agent-stats-wrap">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <StatsPropertyTypes />
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <StatsPropertyStatus />
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <StatsPropertyCities />
                        </div>
                    </div>
                </div> -->
                <!-- agent-stats-wrap -->

                <div class="row">
                    <div class="col-lg-8 col-md-12 bt-content-wrap">

                        <div class="agent-bio-wrap">
                            <h2>About {{ agent.name }}</h2>
                            <p>{{ agent.profile?.about_me || null }}</p>
                            <!-- <p><i class="houzez-icon icon-messages-bubble mr-1"></i> 
                                <strong>Languages:</strong>
                                English, Spanish, French
                            </p> -->
                        </div><!-- agent-bio-wrap -->

                        <div class="agent-nav-wrap">
                            <ul class="nav nav-pills nav-justified">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#tab-properties" data-toggle="pill"
                                        role="tab">Listings
                                        (20)</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#tab-reviews" data-toggle="pill" role="tab">Reviews
                                        (3)</a>
                                </li>
                            </ul>
                        </div><!-- agent-nav-wrap -->

                        <div class="tab-content" id="tab-content">
                            <div class="tab-pane fade show active" id="tab-properties">
                                <div class="listing-tools-wrap">
                                    <div class="d-flex align-items-center">
                                        <div class="listing-tabs flex-grow-1">
                                            <ul class="nav nav-tabs">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#">All</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">For Sale</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">For Rent</a>
                                                </li>
                                            </ul><!-- nav-tabs -->
                                        </div><!-- listing-tabs -->
                                        <div class="sort-by">
                                            <div class="d-flex align-items-center">
                                                <div class="sort-by-title">
                                                    Sort by:
                                                </div><!-- sort-by-title -->
                                                <select class="selectpicker form-control bs-select-hidden"
                                                    title="Default Order" data-live-search="false"
                                                    data-dropdown-align-right="auto">
                                                    <option>Default Order</option>
                                                    <option>Price - Hight to Low</option>
                                                    <option>Price - Low to Hight</option>
                                                    <option>Featured First</option>
                                                    <option>Date - New to Old</option>
                                                    <option>Date - Old to New</option>
                                                </select><!-- selectpicker -->
                                            </div><!-- d-flex -->
                                        </div><!-- sort-by -->
                                    </div><!-- d-flex -->
                                </div><!-- listing-tools-wrap -->
                                <div class="listing-view list-view">

                                    this is created
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                    <!-- <ListItem /> -->
                                </div><!-- listing-view -->
                                <div class="load-more-wrap">
                                    <a class="btn btn-primary-outlined btn-load-more" href="#">Load More</a>
                                </div><!-- load-more-wrap -->
                            </div><!-- tab-pane -->
                            <div class="tab-pane fade" id="tab-reviews">
                                <!-- <?php include 'inc/property/property-reviews.php';?> -->
                                this is created
                                <!-- <PropertyReviews /> -->
                            </div><!-- tab-pane -->
                        </div><!-- tab-content -->


                    </div><!-- bt-content-wrap -->
                    <div class="col-lg-4 col-md-12 bt-sidebar-wrap">
                        <aside class="sidebar-wrap">
                            <AgentContact :agent="agent" />
                        </aside>
                    </div><!-- bt-sidebar-wrap -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- listing-wrap -->
    </template>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAgent } from '@/stores/index.js'
import { storeToRefs } from 'pinia'

import Logo from '@/assets/img/app-side/logo-houzez-color.png';
import StatsPropertyTypes from '@/views/demos/components/agents/StatsPropertyTypes.vue';
import StatsPropertyStatus from '@/views/demos/components/agents/StatsPropertyStatus.vue';
import StatsPropertyCities from '@/views/demos/components/agents/StatsPropertyCities.vue';
import AgentContact from '@/views/demos/components/agents/AgentContact.vue';
import ListItem from '../../../components/home/featured-listings/ListItem.vue';
import PropertyReviews from '../../../components/property-details/property/PropertyReviews.vue';
import AgentSkeleton from '@/components/skeleton/AgentSkeleton.vue'

// Setup
const route = useRoute()
const router = useRouter()
const loading = ref(true) // ✅ Add this

const agentStore = useAgent()
const { agent } = storeToRefs(agentStore)
const agentUsername = route.params.agentUsername

onMounted(async () => {
    try {
        await agentStore.getAgentByUsername(agentUsername)

        if (!agent.value || !agent.value.username) {
            router.push({ name: 'agent-not-found-404' })
        } 
        console.log('Agent fetched successfully:', agent.value)
    } catch (error) {
        console.error('Agent fetch failed:', error)
        router.push({ name: 'agent-not-found-404' })
    } finally {
        loading.value = false // ✅ Set loading false after request
    }
})
</script>
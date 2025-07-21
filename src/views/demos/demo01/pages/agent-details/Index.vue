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
                                    <img class="img-fluid" :src="Logo" alt="agent-company-logo">
                                </div>
                                <img class="img-fluid" :src="agent.profile" alt="Agent" />
                            </div><!-- agent-image -->
                        </div><!-- col-lg-4 col-md-4 col-sm-12 -->
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <div class="agent-profile-top-wrap">
                                <div class="agent-profile-header">
                                    <h1>{{ agent.name }}
                                        <span v-if="agent.is_verified" class="badge badge-success agent-verified-badge">
                                            <i class="houzez-icon icon-check-circle-1 mr-1"></i>
                                            Verified
                                        </span>
                                    </h1>
                                    <div class="rating-score-wrap">
                                        <span class="rating-score-text">{{ averageRating.toFixed(1) }}</span>
                                        <span class="star">
                                            <span class="icon-rating" :class="getStarClass(1)"></span>
                                            <span class="icon-rating" :class="getStarClass(2)"></span>
                                            <span class="icon-rating" :class="getStarClass(3)"></span>
                                            <span class="icon-rating" :class="getStarClass(4)"></span>
                                            <span class="icon-rating" :class="getStarClass(5)"></span>
                                        </span>
                                        <a href="#tab-content">See all reviews</a>
                                    </div>
                                </div>
                                <!-- agent-profile-content -->
                                <p class="agent-list-position">
                                    {{ agent.position || '' }}
                                    <template v-if="agent.agencies && agent.agencies.length">
                                        <br>
                                        <span v-for="agency in agent.agencies" :key="agency.id">
                                            <a href="#">{{ agency.agency_name }}</a><br>
                                        </span>
                                    </template>
                                </p>
                            </div><!-- agent-profile-header -->
                            <div class="agent-profile-content">
                                <ul class="list-unstyled">
                                    <li><strong>{{ $t('Agent License') }}:</strong> {{ agent.license || null }} </li>
                                    <li><strong>{{ $t('Tax Number') }}:</strong> {{ agent.tax_number || null }} </li>
                                    <li><strong>{{ $t('Service Areas') }}:</strong> {{ agent.service_areas || null }}
                                    </li>
                                    <li><strong>{{ $t('Specialties') }}:</strong> {{ agent.specialties || null }} </li>
                                </ul>
                            </div><!-- agent-profile-content -->
                            <div class="agent-profile-buttons">
                                <button class="btn btn-secondary" data-toggle="modal"
                                    data-target="#mobile-property-form">
                                    Send Email
                                    <!-- model and show  -->
                                </button>
                                <button v-if="agent.phone" type="button" class="btn btn-call"
                                    @click="triggerCall(agent.phone)">
                                    <span class="hide-on-click">{{ $t('Call') }}</span>
                                    <span class="show-on-click">{{ agent.phone || null }}</span>
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
                            <h2>{{ $t('About') }} {{ agent.name }}</h2>
                            <p>{{ agent.about_me || null }}</p>
                            <p v-if="agent.languages"><i class="houzez-icon icon-messages-bubble mr-1"></i>
                                <strong>Languages:</strong>
                                {{ agent.languages }}
                            </p>
                        </div><!-- agent-bio-wrap -->

                        <div class="agent-nav-wrap">
                            <ul class="nav nav-pills nav-justified">
                                <li class="nav-item mr-2">
                                    <a class="nav-link active" href="#tab-properties" data-toggle="pill" role="tab">{{
                                        $t('Listings') }}
                                        ({{ agent.properties.length }})</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#tab-reviews" data-toggle="pill" role="tab">Reviews
                                        ({{ reviews.data.length }})</a>
                                </li>
                            </ul>
                        </div><!-- agent-nav-wrap -->

                        <div class="tab-content" id="tab-content">
                            <div class="tab-pane fade show active" id="tab-properties">
                                <div class="listing-tools-wrap mb-3">
                                    <div class="d-flex align-items-center">
                                        <div class="listing-tabs flex-grow-1">
                                            <ul class="nav nav-tabs" style="justify-content: none;">
                                                <li class="nav-item">
                                                    <a class="nav-link" :class="{ active: selectedStatus === 'All' }"
                                                        href="#" @click.prevent="selectedStatus = 'All'">All</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link"
                                                        :class="{ active: selectedStatus === 'For Sale' }" href="#"
                                                        @click.prevent="selectedStatus = 'For Sale'">For Sale</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link"
                                                        :class="{ active: selectedStatus === 'For Rent' }" href="#"
                                                        @click.prevent="selectedStatus = 'For Rent'">For Rent</a>
                                                </li>
                                            </ul><!-- nav-tabs -->
                                        </div><!-- listing-tabs -->
                                        <div class="sort-by mr-3">
                                            <div class="d-flex align-items-center">
                                                <!-- <div class="sort-by-title">
                                                    Sort by:
                                                </div>
                                                <select class="selectpicker form-control bs-select-hidden"
                                                    title="Default Order" data-live-search="false"
                                                    data-dropdown-align-right="auto">
                                                    <option>Default Order</option>
                                                    <option>Price - Hight to Low</option>
                                                    <option>Price - Low to Hight</option>
                                                    <option>Featured First</option>
                                                    <option>Date - New to Old</option>
                                                    <option>Date - Old to New</option>
                                                </select> -->
                                                <!-- selectpicker -->
                                            </div><!-- d-flex -->
                                        </div><!-- sort-by -->
                                        <div class="listing-switch-view">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <a class="switch-btn btn-grid"
                                                        :class="{ active: viewType === 'grid' }" href="#"
                                                        @click.prevent="viewType = 'grid'">
                                                        <i class="houzez-icon icon-layout-module-1"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a class="switch-btn btn-list"
                                                        :class="{ active: viewType === 'list' }" href="#"
                                                        @click.prevent="viewType = 'list'">
                                                        <i class="houzez-icon icon-layout-bullets"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- listing-switch-view -->
                                    </div><!-- d-flex -->
                                </div><!-- listing-tools-wrap -->
                                <div v-if="agent.properties.length > 0" class="listing-view"
                                    :class="viewType + '-view'">
                                    <PropertyCard v-for="property in paginatedProperties" :key="property.id"
                                        :property="property" />
                                </div><!-- listing-view -->
                                <Pagination :total-items="filteredProperties.length" :page-size="pageSize"
                                    v-model:current-page="currentPage" />
                            </div><!-- tab-pane -->
                            <div class="tab-pane fade" id="tab-reviews">
                                <AgentReviews :reviews="reviews.data" :agent="agent"
                                    @updateAverageRating="handleAverageRating" />
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
import { ref, onMounted, nextTick, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAgent } from '@/stores/index.js'
import { storeToRefs } from 'pinia'

import Logo from '@/assets/img/app-side/logo-houzez-color.png';
import StatsPropertyTypes from '@/views/demos/components/agents/StatsPropertyTypes.vue';
import StatsPropertyStatus from '@/views/demos/components/agents/StatsPropertyStatus.vue';
import StatsPropertyCities from '@/views/demos/components/agents/StatsPropertyCities.vue';
import AgentContact from '@/views/demos/components/agents/AgentContact.vue';
import Pagination from '@/views/demos/components/inc/Pagination.vue';
import PropertyCard from '../../../components/home/featured-listings/ListItem.vue';
import AgentReviews from '../../../components/agents/AgentReviews.vue';
import AgentSkeleton from '@/components/skeleton/AgentSkeleton.vue'

// Setup
const selectedStatus = ref('All')
const viewType = ref('grid')
const route = useRoute()
const router = useRouter()
const loading = ref(true) // ✅ Add this

const agentStore = useAgent()
const { agent, reviews } = storeToRefs(agentStore)
const agentUsername = route.params.agentUsername

const averageRating = ref(0)

const handleAverageRating = (val) => {
    averageRating.value = val
}

const getStarClass = (index) => {
  const full = Math.floor(averageRating.value)
  const half = averageRating.value % 1 >= 0.5

  if (index <= full) return 'full-star'
  if (index === full + 1 && half) return 'half-star'
  return 'empty-star'
}

const triggerCall = (phone) => {
    if (!phone) return;
    // Open system dialer with "Pick an app" option
    window.location.href = `tel:${phone}`;
};

onMounted(async () => {
    try {
        await agentStore.getAgentByUsername(agentUsername)
        
        if (!agent.value || !agent.value.username) {
            router.push({ name: 'agent-not-found-404' })
        } else {
            await agentStore.fetchReviews(agent.value.id)

        }

    } catch (error) {
        console.error('Agent fetch failed:', error)
        router.push({ name: 'agent-not-found-404' })
    } finally {
        loading.value = false

        nextTick(() => {
            $('.selectpicker').selectpicker('render')
        })
    }

})
const currentPage = ref(1)
const pageSize = 6 // Set how many properties per page

// Total filtered properties by status
const filteredProperties = computed(() => {
    if (selectedStatus.value === 'All') return agent.value.properties || []
    return agent.value.properties.filter((prop) => prop.status === selectedStatus.value)
})

// Paginated properties to show on screen
const paginatedProperties = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    const end = start + pageSize
    return filteredProperties.value.slice(start, end)
})

// When status filter changes, reset to page 1
watch(selectedStatus, () => {
    currentPage.value = 1
})

</script>
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
                                </div>
                                <img 
                                class="img-fluid" :src="agency.profile || defaultAvatar" alt="Agency"
                                    style="height: 300px;" @error="event => event.target.src = defaultAvatar" />
                            </div><!-- agent-image -->
                        </div><!-- col-lg-4 col-md-4 col-sm-12 -->
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <div class="agent-profile-top-wrap">
                                <div class="agent-profile-header">
                                    <h1>{{ agency.name }}
                                        <div v-if="agency.is_verified" class="badge badge-success agent-verified-badge">
                                            <i class="houzez-icon icon-check-circle-1 mr-1"></i>
                                            {{ $t('Verified') }}
                                        </div>
                                    </h1>
                                    <div class="rating-score-wrap">
                                        <span class="star">
                                            <span class="rating-score-text">{{ averageRating.toFixed(1) }}</span>
                                            <span class="icon-rating" :class="getStarClass(1)"></span>
                                            <span class="icon-rating" :class="getStarClass(2)"></span>
                                            <span class="icon-rating" :class="getStarClass(3)"></span>
                                            <span class="icon-rating" :class="getStarClass(4)"></span>
                                            <span class="icon-rating" :class="getStarClass(5)"></span>
                                            <a href="#tab-content">{{ $t('See all reviews') }}</a>
                                        </span>
                                    </div>
                                </div>
                                <!-- agent-profile-content -->
                                <p class="agent-list-position">
                                    <i class="houzez-icon icon-pin"></i>
                                    {{ agency.address || null }}
                                    <a href="#"><!-- Modern HouseReal Estate --></a>
                                </p>
                            </div><!-- agent-profile-header -->
                            <div class="agent-profile-content">
                                <ul class="list-unstyled">
                                    <li><strong>{{ $t('License') }}:</strong> {{ agency.license || null }} </li>
                                    <li><strong>{{ $t('Tax Number') }}:</strong> {{ agency.tax_number || null }} </li>
                                </ul>
                            </div><!-- agent-profile-content -->
                            <div class="agent-profile-buttons">
                                <button
                                 class="btn btn-secondary" data-toggle="modal"
                                    data-target="#mobile-property-form">
                                    {{ $t('Send Email') }}
                                </button>
                                <button 
                                v-if="agency.phone" 
                                type="button" class="btn btn-call"
                                    @click="triggerCall(agency.phone)">
                                    <span class="hide-on-click">{{ $t('Call') }}</span>
                                    <span class="show-on-click">{{ agency.phone || null }}</span>
                                </button>
                            </div><!-- agent-profile-buttons -->
                        </div><!-- col-lg-8 col-md-8 col-sm-12 -->
                    </div><!-- row -->
                </div><!-- agent-profile-wrap -->
                <div class="agent-stats-wrap">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <StatsPropertyTypes :types="agency.top_types" />
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <StatsPropertyStatus :statuses="agency.status_summary" />
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <StatsPropertyCities :cities="agency.top_cities" />
                        </div>
                    </div>
                </div>
                <!-- agent-stats-wrap -->

                <div class="row">
                    <div class="col-lg-8 col-md-12 bt-content-wrap">

                        <div class="agent-bio-wrap">
                            <h2 v-if="agency.about_me">{{ $t('About') }} {{ agency.name }}</h2>
                            <p>{{ agency.about_me || null }}</p>
                            <p 
                            v-if="agency.languages"
                            class="mt-3"
                             ><i
                                    class="houzez-icon icon-messages-bubble mr-1"></i>
                                <strong>{{ $t('Languages') }} :</strong>
                                {{ agency.languages }}
                            </p>
                        </div><!-- agent-bio-wrap -->

                        <div class="agent-nav-wrap">
                            <ul class="nav nav-pills nav-justified">
                                <li class="nav-item mr-2">
                                    <a class="nav-link active" href="#tab-properties" data-toggle="pill" role="tab">
                                        {{ $t('Listings') }} ({{ paginatedProperties.length }})
                                    </a>
                                </li>
                                <li class="nav-item mr-2">
                                    <a class="nav-link" href="#tab-agents" data-toggle="pill" role="tab">
                                        {{ $t('Agents') }} ({{ agency.agents.length }})
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#tab-reviews" data-toggle="pill" role="tab">
                                        {{ $t('Reviews') }} ({{ reviewCount }})
                                    </a>
                                </li>
                            </ul>
                        </div><!-- agent-nav-wrap -->

                        <div id="tab-content" class="tab-content">
                            <div id="tab-properties" class="tab-pane fade show active" >
                                <div class="listing-tools-wrap mb-3">
                                    <div class="d-flex align-items-center">
                                        <div class="listing-tabs flex-grow-1">
                                            <ul class="nav nav-tabs" style="justify-content: none;">
                                                <li class="nav-item">
                                                    <a 
                                                    class="nav-link" :class="{ active: activeFilter === 'All' }"
                                                        href="#" @click.prevent="filterProperties('All')">{{ $t('All')
                                                        }}</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a 
                                                    class="nav-link" :class="{ active: activeFilter === 'For Sale' }"
                                                        href="#" @click.prevent="filterProperties('For Sale')">{{
                                                        $t('For Sale') }}</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a 
                                                    class="nav-link" :class="{ active: activeFilter === 'For Rent' }"
                                                        href="#" @click.prevent="filterProperties('For Rent')">{{
                                                        $t('For Rent') }}</a>
                                                </li>
                                            </ul>
                                            <!-- nav-tabs -->
                                        </div><!-- listing-tabs -->
                                        <div class="sort-by mr-3">
                                            <div class="d-flex align-items-center">
                                            </div><!-- d-flex -->
                                        </div><!-- sort-by -->
                                        <div class="listing-switch-view">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <a 
                                                    class="switch-btn btn-grid"
                                                        :class="{ active: viewType === 'grid' }" href=""
                                                        @click.prevent="viewType = 'grid'">
                                                        <i class="houzez-icon icon-layout-module-1"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a 
                                                    class="switch-btn btn-list"
                                                        :class="{ active: viewType === 'list' }" href=""
                                                        @click.prevent="viewType = 'list'">
                                                        <i class="houzez-icon icon-layout-bullets"></i>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        <!-- listing-switch-view -->
                                    </div><!-- d-flex -->
                                </div><!-- listing-tools-wrap -->
                                <div v-if="paginatedProperties.length" class="listing-view" :class="viewType + '-view'">
                                    <PropertyCard 
                                    v-for="property in paginatedProperties" :key="property.id"
                                        :property="property" />
                                </div>
                                <div v-else class="text-center mt-3">{{ $t('No properties found.') }}</div>
                                <!-- listing-view -->
                                <Pagination 
                                v-model:currentPage="currentPage" 
                                :total-items="filteredProperties.length" :page-size="pageSize"
                                    
                                    />
                            </div><!-- tab-pane -->
                            <div
                            id="tab-agents"
                            class="tab-pane fade" >
                                <div v-if="agency.agents.length">
                                    <AgentCard 
                                    v-for="agent in agency.agents" :key="agent.id" :data="agent"
                                        type="agent" />
                                </div>
                                <div v-else class="text-center mt-3">{{ $t('No agents found.') }}</div>
                            </div><!-- tab-pane -->
                            <div 
                             id="tab-reviews"
                            class="tab-pane fade">
                                <AgencyReviews 
                                :reviews="agencyStore.reviews?.data || []" :agency="agency"
                                    @updateAverageRating="handleAverageRating" />
                            </div><!-- tab-pane -->
                        </div><!-- tab-content -->
                    </div><!-- bt-content-wrap -->
                    <div class="col-lg-4 col-md-12 bt-sidebar-wrap">
                        <aside class="sidebar-wrap">
                            <Contact :contact="agency" />
                        </aside>
                    </div><!-- bt-sidebar-wrap -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- listing-wrap -->
    </template>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAgency } from '@/stores/index.js'
import { storeToRefs } from 'pinia'

import StatsPropertyTypes from '@/views/demos/components/agents/StatsPropertyTypes.vue';
import StatsPropertyStatus from '@/views/demos/components/agents/StatsPropertyStatus.vue';
import StatsPropertyCities from '@/views/demos/components/agents/StatsPropertyCities.vue';
import defaultAvatar from '@/assets/img/fb-avatar.png'
import Contact from '@/views/demos/components/agents/Contact.vue'
import Pagination from '@/views/demos/components/inc/Pagination.vue'
import PropertyCard from '../../../components/home/featured-listings/ListItem.vue'
import AgencyReviews from '../../../components/agents/Reviews.vue'
import AgentCard from '../../../components/agents/AgentCard.vue'
import AgentSkeleton from '@/components/skeleton/AgentSkeleton.vue'

// ✅ State & Stores
const viewType = ref('grid')
const loading = ref(true)
const route = useRoute()
const router = useRouter()

const agencyStore = useAgency()
const { agency, reviews, properties } = storeToRefs(agencyStore)
const agencyUsername = route.params.agencyUsername

// ✅ Data
const filteredProperties = ref([])
const activeFilter = ref('All')
const currentPage = ref(1)
const pageSize = 6

// ✅ Ratings
const averageRating = ref(0)
const handleAverageRating = (val) => (averageRating.value = val)
const getStarClass = (i) => {
    const full = Math.floor(averageRating.value)
    const half = averageRating.value % 1 >= 0.5
    if (i <= full) return 'full-star'
    if (i === full + 1 && half) return 'half-star'
    return 'empty-star'
}

const triggerCall = (phone) => {
    if (!phone) return;
    // Open system dialer with "Pick an app" option
    window.location.href = `tel:${phone}`;
};

// ✅ Fetch Agency Data
onMounted(async () => {
    try {
        await agencyStore.getAgencyByUsername(agencyUsername)
        if (!agency.value?.username)
            return router.push({ name: 'agent-not-found-404' })

        await agencyStore.fetchReviews(agency.value.id)
        await agencyStore.getAgencyProperties(agencyUsername)

        filteredProperties.value = properties.value
    } catch (err) {
        console.error("Agency fetch failed:", err)
        router.push({ name: 'agent-not-found-404' })
    } finally {
        loading.value = false
    }
})

// ✅ Filter Properties
const filterProperties = (type) => {
    activeFilter.value = type
    filteredProperties.value =
        type === 'All'
            ? properties.value
            : properties.value.filter((p) => p.status.toLowerCase() === type.toLowerCase())
    currentPage.value = 1
}

// ✅ Paginated Properties
const paginatedProperties = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    return filteredProperties.value.slice(start, start + pageSize)
})

// ✅ Review Count
const reviewCount = computed(() => reviews.value?.data?.length || 0)
</script>
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
                                <img class="img-fluid" :src="agency.profile || defaultAvatar" alt="Agency" style="height: 300px;"
                                    @error="event => event.target.src = defaultAvatar" />
                            </div><!-- agent-image -->
                        </div><!-- col-lg-4 col-md-4 col-sm-12 -->
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <div class="agent-profile-top-wrap">
                                <div class="agent-profile-header">
                                    <h1>{{ agency.name }} 
                                        <span class="badge badge-success agent-verified-badge"><i
                                                class="houzez-icon icon-check-circle-1 mr-1"></i> Verified</span>
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
                                <button class="btn btn-secondary" data-toggle="modal"
                                    data-target="#mobile-property-form">
                                    Send Email
                                </button>
                                <button type="button" class="btn btn-call">
                                    <span class="hide-on-click">{{ $t('Call') }}</span>
                                    <span class="show-on-click">{{ agency.phone || null }}</span>
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
                            <h2 v-if="agency.about_me">{{ $t('About') }} {{ agency.name }}</h2>
                            <p>{{ agency.about_me || null }}</p>
                            <p class="mt-3" v-if="agency.languages"><i class="houzez-icon icon-messages-bubble mr-1"></i> 
                                <strong>Languages:</strong>
                                {{ agency.languages }}
                            </p>
                        </div><!-- agent-bio-wrap -->

                        <div class="agent-nav-wrap">
                            <ul class="nav nav-pills nav-justified">
                                <li class="nav-item mr-2">
                                    <a class="nav-link active" href="#tab-properties" data-toggle="pill"
                                        role="tab">{{ $t('Listings') }} ({{ agency.properties.length }})</a>
                                </li>
                                <li class="nav-item mr-2">
                                    <a class="nav-link" href="#tab-agents" data-toggle="pill" role="tab">Agents
                                        (10)</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#tab-reviews" data-toggle="pill" role="tab">Reviews
                                        ({{ reviewCount }})</a>
                                </li>
                            </ul>
                        </div><!-- agent-nav-wrap -->

                        <div class="tab-content" id="tab-content">
                            <div class="tab-pane fade show active" id="tab-properties">
                                <div class="listing-tools-wrap mb-3">
                                    <div class="d-flex align-items-center">
                                        <div class="listing-tabs flex-grow-1">
                                            <!-- <ul class="nav nav-tabs" style="justify-content: none;">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#">All</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">For Sale</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">For Rent</a>
                                                </li>
                                            </ul> -->
                                            <!-- nav-tabs -->
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
                                                    <a class="switch-btn btn-grid" :class="{ active: viewType === 'grid' }" href="#"
                                                        @click.prevent="viewType = 'grid'">
                                                        <i class="houzez-icon icon-layout-module-1"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a class="switch-btn btn-list" :class="{ active: viewType === 'list' }" href="#"
                                                        @click.prevent="viewType = 'list'">
                                                        <i class="houzez-icon icon-layout-bullets"></i>
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <!-- listing-switch-view -->
                                    </div><!-- d-flex -->
                                </div><!-- listing-tools-wrap -->
                                <div v-if="agency.properties.length > 0" class="listing-view" :class="viewType + '-view'">
                                    <PropertyCard v-for="property in agency.properties" :key="property.id" :property="property" />
                                </div><!-- listing-view -->
                               <!-- <Pagination /> -->
                            </div><!-- tab-pane -->
                            <div class="tab-pane fade" id="tab-agents">
                                there are agents
                            </div><!-- tab-pane -->
                            <div class="tab-pane fade" id="tab-reviews">
                                <AgencyReviews :reviews="agencyStore.reviews?.data || []" :agency="agency" @updateAverageRating="handleAverageRating" />
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
import { ref, onMounted, nextTick, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAgency } from '@/stores/index.js'
import { storeToRefs } from 'pinia'

import Logo from '@/assets/img/app-side/logo-houzez-color.png';
import defaultAvatar from '@/assets/img/fb-avatar.png';
import StatsPropertyTypes from '@/views/demos/components/agents/StatsPropertyTypes.vue';
import StatsPropertyStatus from '@/views/demos/components/agents/StatsPropertyStatus.vue';
import StatsPropertyCities from '@/views/demos/components/agents/StatsPropertyCities.vue';
import Contact from '@/views/demos/components/agents/AgentContact.vue';
import Pagination from '@/views/demos/components/inc/Pagination.vue';
import PropertyCard from '../../../components/home/featured-listings/ListItem.vue';
import AgencyReviews from '../../../components/agents/AgentReviews.vue';
import AgentSkeleton from '@/components/skeleton/AgentSkeleton.vue'

// Setup
const viewType = ref('grid')
const route = useRoute()
const router = useRouter()
const loading = ref(true) // ✅ Add this

const agencyStore = useAgency()
const { agency } = storeToRefs(agencyStore)
const agencyUsername = route.params.agencyUsername

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

onMounted(async () => {
    try {
        await agencyStore.getAgencyByUsername(agencyUsername)
        console.log('Agency fetched successfully:', agency.value)
        if (!agency.value || !agency.value.username) {
            router.push({ name: 'agent-not-found-404' })
        } else {
            await agencyStore.fetchReviews(agency.value.id)
            console.log('Reviews fetched successfully:', agencyStore.reviews.data)
        }
        
    } catch (error) {
        console.error('Agency fetch failed:', error)
        router.push({ name: 'agent-not-found-404' })
    } finally {
        loading.value = false

        nextTick(() => {
            $('.selectpicker').selectpicker('render')
        })
    }
    
})
const reviewCount = computed(() => agencyStore.reviews?.data?.length || 0)
</script>
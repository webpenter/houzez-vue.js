<template>
  <div class="container-fluid" id="property-details">
    <div class="row">
      <div class="col-12">
        <div class="container-fluid py-4">
          <div class="property-icon">
            <div id="breadcrumb">
              <nav>
                <RouterLink :to="{name:'app'}" class="top-nav">
                  <i class="fa-solid fa-house mr-2 text-dark"></i>
                  {{ $t("Home") }}
                </RouterLink>
                <span class="mx-2">></span>
                <RouterLink :to="{name:'app'}" class="top-nav">
                  {{ $filters.capitalize(property.type) }}
                </RouterLink>
                <span class="mx-2">></span>
                <span class="top-nav text-dark">
                  {{ $filters.capitalize(property.title) }}
                </span>
              </nav>
              <div class="icons">
                <template v-if="token">
                  <span @click="toggleFavoriteProperty"  :style="{ color: isFavorite ? 'red' : 'black', cursor: 'pointer' }"><i class="fa-solid fa-heart"></i></span>
                </template>
                <template v-else>
                  <span @click="noAuthDialog = true"  :style="{ color: isFavorite ? 'red' : 'black', cursor: 'pointer' }"><i class="fa-solid fa-heart"></i></span>
                </template>

                <span @click="openShareDialog = true" style="cursor: pointer;color: green"><i class="fa-solid fa-share"></i></span>
                <span @click="handlePrint" style="cursor: pointer;color: blue"><i class="fa-solid fa-print"></i></span>
              </div>
              <el-dialog v-model="noAuthDialog" title="Alert" width="500" align-center>
                <span>
                  You can add a property to your favorites only if you are authenticated. Please log in or sign up first to access this feature.
                </span>
                <template #footer>
                  <div class="dialog-footer">
                    <el-button @click="noAuthDialog = false">Cancel</el-button>
                    <el-button type="primary" @click="showLoginPage">
                      Login
                    </el-button>
                  </div>
                </template>
              </el-dialog>
              <el-dialog
                  v-model="openShareDialog"
                  title="Share"
                  width="250"
                  align-center
              >
                <div style="display: flex;flex-direction: column;align-items: start;gap: 10px">
                  <button @click="shareOnPlatform('whatsapp')">
                    <i class="fa-brands fa-square-whatsapp mr-1"></i>
                    WhatsApp
                  </button>
                  <button @click="shareOnPlatform('facebook')">
                    <i class="fa-brands fa-facebook mr-1"></i>
                    Facebook
                  </button>
                  <button @click="shareOnPlatform('twitter')">
                    <i class="fa-brands fa-square-x-twitter mr-1"></i>
                    Twitter
                  </button>
                  <button @click="shareOnPlatform('linkedin')">
                    <i class="fa-brands fa-linkedin mr-1"></i>
                    Linkedin
                  </button>
                  <button @click="shareOnPlatform('email')">
                    <i class="fa-solid fa-envelope mr-1"></i>
                    Email
                  </button>
                </div>
              </el-dialog>
            </div>
          </div>
          <div class="d-flex flex-lg-row flex-md-row justify-content-between flex-ms-column flex-column mt-3">
            <div class="page-title">
              <h1 class="heading">
                {{ $filters.capitalize(property.title) }}
              </h1>
            </div>
            <div class="item-price-wrap hide-on-list">
              <span class="item-price">
                {{ $filters.formatPrice(property.price) }}
              </span>
            </div>
          </div>
          <div class="property-labels-wrap mt-2">
            <span v-if="property.is_featured" class="label-status bg-success">
              featured
            </span>
            <RouterLink :to="{name:'app'}" class="label-status">
              For {{ property.status }}
            </RouterLink>
          </div>
          <div class="page-title-wrap">
            <address class="item-address">
              <i class="fa-solid fa-location"></i>
              {{ property.address }}
            </address>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {RouterLink, useRouter} from "vue-router";
import {computed, onMounted, ref} from "vue";
import {useFavoriteProperty, useNotification, useToken} from "@/stores/index.js";
import {storeToRefs} from "pinia";

const props =  defineProps(['property']);

const router = useRouter();
const token = useToken().getToken;

const propertySlug = props.property.slug;
const propertyId = ref(props.property.id);

const handlePrint = () => window.print();
const currentDomain = computed(() => window.location.origin);

const openShareDialog = ref(false)
const noAuthDialog = ref(false)

const showLoginPage = () => {
  router.push({name:'auth'});
  noAuthDialog.value = false;
}

const getShareUrl = () => `${currentDomain.value}/property/${propertySlug}`;

const shareOnPlatform = (platform) => {
  openShareDialog.value = false;

  const url = getShareUrl();

  const shareLinks = {
    whatsapp: `https://wa.me/?text=Check%20out%20this%20property:%20${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=Check%20this%20out!`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=Property%20Details`,
    email: `mailto:?subject=Check%20out%20this%20property&body=${url}`
  };
  window.open(shareLinks[platform], '_blank');
};

const favoritePropertyStore = useFavoriteProperty();
const {isFavorite} = storeToRefs(favoritePropertyStore);

const toggleFavoriteProperty = async () => {
  try {
    const res = await favoritePropertyStore.addOrRemovePropertyToFavorite(propertyId.value);

    if (res.status === 201) {
      useNotification().Success("Property added to favorites.");
      await isFavoriteProperty()
    } else if (res.status === 200) {
      useNotification().Success("Property removed from favorites.");
      await isFavoriteProperty()
    } else {
      useNotification().Error("An error occurred.");
    }
  } catch (error) {
    useNotification().Error("An error occurred while processing.");
  }
}


const isFavoriteProperty = async () => {
  if (!propertyId.value) return;
  await favoritePropertyStore.isFavoriteProperty(propertyId.value);
};

onMounted(() => {
  if (token){
    isFavoriteProperty();
  }
});
</script>
<template>
    <ul class="item-tools">
        <li class="item-tool">
            <template v-if="token">
                <span
                :style="{ color: isFavorite ? 'red' : 'black', cursor: 'pointer' }" class="item-tool-favorite p-2 p-md-0"
                 @click="toggleFavoriteProperty"
                    >
                    <i class="houzez-icon icon-love-it"></i>
                </span><!-- item-tool-favorite -->
            </template>
            <template v-else> 
                <span
                :style="{ color: isFavorite ? 'red' : 'black', cursor: 'pointer' }"
                    class="item-tool-favorite p-2 p-md-0"
                @click="noAuthDialog = true" >
                    <i class="houzez-icon icon-love-it"></i>
                </span><!-- item-tool-favorite -->
            </template>
        </li><!-- item-tool -->
        <li class="item-tool">
            <span class="item-tool-share dropdown-toggle p-2 p-md-0" data-toggle="dropdown">
                <i class="houzez-icon icon-share"></i>
            </span><!-- item-tool-favorite -->
            <div class="dropdown-menu dropdown-menu-right item-tool-dropdown-menu">
                <div class="dropdown-item" href="#">Share on:</div>
                    <a class="dropdown-item" href="#" @click.prevent="shareOnPlatform('facebook')">
                        <i class="houzez-icon icon-social-media-facebook mr-1"></i> Facebook
                    </a>
                    <a class="dropdown-item" href="#" @click.prevent="shareOnPlatform('twitter')">
                        <i class="houzez-icon icon-x-logo-twitter-logo-2 mr-1"></i> Twitter
                    </a>
                    <a class="dropdown-item" href="#" @click.prevent="shareOnPlatform('pinterest')">
                        <i class="houzez-icon icon-social-pinterest mr-1"></i> Pinterest
                    </a>
                    <a class="dropdown-item" href="#" @click.prevent="shareOnPlatform('linkedin')">
                        <i class="houzez-icon icon-professional-network-linkedin mr-1"></i> Linkedin
                    </a>
                    <a class="dropdown-item" href="#" @click.prevent="shareOnPlatform('googleplus')">
                        <i class="houzez-icon icon-social-media-google-plus-1 mr-1"></i> Google Plus
                    </a>
                    <a class="dropdown-item" href="#" @click.prevent="shareOnPlatform('email')">
                        <i class="houzez-icon icon-envelope mr-1"></i> Email
                    </a>
            </div>
        </li><!-- item-tool -->
        <li class="item-tool houzez-print">
            <span class="item-tool-compare" @click="handlePrint" >
                <i class="houzez-icon icon-print-text"></i>
            </span><!-- item-tool-compare -->
        </li><!-- item-tool -->
    </ul><!-- item-tools -->
    <el-dialog v-model="noAuthDialog" title="Alert" width="500" align-center>
        <span>
            You can add a property to your favorites only if you are authenticated. Please log in or sign up first to
            access
            this feature.
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
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useFavoriteProperty, useNotification, useToken } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps(['property']);

const router = useRouter();
const token = useToken().getToken;

const propertySlug = props.property.slug;
const propertyId = ref(props.property.id);

const handlePrint = () => window.print();
const currentDomain = computed(() => window.location.origin);

const noAuthDialog = ref(false)

const showLoginPage = () => {
    router.push({ name: 'auth' });
    noAuthDialog.value = false;
}

const favoritePropertyStore = useFavoriteProperty();
const { isFavorite } = storeToRefs(favoritePropertyStore);

// const isFavoriteProperty = async () => await favoritePropertyStore.isFavoriteProperty(propertyId.value);
const isFavoriteProperty = async () => {
  if (!propertyId.value) return;
  await favoritePropertyStore.isFavoriteProperty(propertyId.value);
};

const toggleFavoriteProperty = async () => {
    try {
        const res = await favoritePropertyStore.addOrRemovePropertyToFavorite(propertyId.value);

        if (res.status === 201) {
            useNotification().Success(t('Property added to favorites'));
            await isFavoriteProperty()
        } else if (res.status === 200) {
            useNotification().Success(t('Property removed from favorites'));
            await isFavoriteProperty()
        } else {
            useNotification().Error(t('An error occurred.'));
        }
    } catch (error) {
        useNotification().Error(t('An error occurred while processing', error));
    }
}


const shareOnPlatform = (platform) => {
  const url = `${currentDomain.value}/property-details/${propertySlug}`;
  let shareLink = '';

  switch (platform) {
    case 'facebook':
      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'twitter':
      shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Check this out!`;
      break;
    case 'pinterest':
      shareLink = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`;
      break;
    case 'linkedin':
      shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=Property Details`;
      break;
    case 'googleplus': // deprecated but you included it
      shareLink = `https://plus.google.com/share?url=${encodeURIComponent(url)}`;
      break;
    case 'email':
      shareLink = `mailto:?subject=Check out this property&body=${encodeURIComponent(url)}`;
      break;
  }

  if (shareLink) {
    window.open(shareLink, '_blank');
  }
};




onMounted(() => {
    if (token) {
        isFavoriteProperty();
    }
});

</script>


<style scoped>
span i {
    margin: 7px;
    cursor: pointer;
}

.item-tools {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
}
</style>
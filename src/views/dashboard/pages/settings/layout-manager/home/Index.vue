<template>
    <DashboardHeader heading="Layout Manager" />
    <section class="dashboard-content-wrap">
      <div class="dashboard-content-inner-wrap">
        <div class="dashboard-content-block-wrap">
          <h2>Home Layout Manager</h2>
          <div class="dashboard-content-block">
            <div class="button-grid">
              <div v-for="section in sections" :key="section" class="section-group">
                <h5 class="mb-3">{{ capitalize(section) }}</h5>
                <button 
                  :class="['btn', 'btn-lg', buttonClass(section, true), 'me-2']"
                  @click="toggleStatus(section)">
                  Enable
                </button>
                <button 
                  :class="['btn', 'btn-lg', buttonClass(section, false)]"
                  @click="toggleStatus(section)">
                  Disable
                </button>
              </div>
            </div>
          </div>
  
          <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
            <RouterLink class="btn btn-primary-outlined" :to="{ name: 'dashboard' }">
              Cancel
            </RouterLink>
            <SaveBtn />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import SaveBtn from "@/views/dashboard/components/SaveBtn.vue";
  
  export default {
    components: {
      SaveBtn
    },
    data() {
      return {
        sections: [
          'carousel',
          'search',
          'featured',
          'team',
          'banner',
          'latest Properties',
          'servies',
          'blogs',
          'newsletter',
          'get in touch',
          'useful links',
          'icons',
          'footer'
        ],
        isEnabledCarousel: false,
        isEnabledSearch: false,
        isEnabledFeatured: false,
        isEnabledTean: false,
        isEnabledBanner: false,
        isEnabledLatestProperties: false,
        isEnabledServices: false,
        isEnabledBlogs: false,
        isEnabledNewsletter: false,
        isEnabledGetInTouch: false,
        isEnabledUsefulLinks: false,
        isEnabledIcons: false,
        isEnabledFooter: false,
      };
    },
    methods: {
  toggleStatus(section) {
    const key = 'isEnabled' + this.capitalize(section);
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      this[key] = !this[key];
      console.log(`${section} ${this[key] ? 'enabled' : 'disabled'}`);
    }
  },
  buttonClass(section, enable = true) {
    const key = 'isEnabled' + this.capitalize(section);
    if (!Object.prototype.hasOwnProperty.call(this, key)) return 'btn-white';
    const isEnabled = this[key];

    if (enable) {
      return isEnabled ? 'btn-success' : 'btn-white';
    } else {
      return !isEnabled ? 'btn-danger' : 'btn-white';
    }
  },
  capitalize(str) {
    return str.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());
  }
}

  };
  </script>
  
  <style scoped>
  .button-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .section-group {
    flex: 0 0 30%;
    min-width: 200px;
  }
  
  .btn-white {
    background-color: white;
    color: #6c757d;
    border: 1px solid #6c757d;
  }
  </style>
  
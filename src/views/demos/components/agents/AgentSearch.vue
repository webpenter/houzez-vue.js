<template>
    <section class="advanced-search advanced-search-nav">
        <div class="container">
            <div class="advanced-search-v1">
                <div class="d-flex">
                    <div class="flex-search flex-grow-1">
                        <div class="form-group">
                            <div class="search-icon">
                                <input type="text" class="form-control" placeholder="Search">
                            </div><!-- search-icon -->
                        </div><!-- form-group -->
                    </div><!-- flex-search -->
                    <div class="flex-search">
                        <div class="form-group">
                            <select class="selectpicker form-control bs-select-hidden" title="Type"
                                data-live-search="false" data-selected-text-format="count" multiple
                                data-actions-box="true" >
                                <option data-subtext="Agents">Agent</option>
                                <option data-subtext="Agency">Agency</option>
                                <option data-subtext="Developer">Developer</option>
                            </select><!-- selectpicker -->
                        </div><!-- form-group -->
                    </div><!-- flex-search -->
                    <div class="flex-search">
                        <div class="form-group">
                            <select class="selectpicker form-control bs-select-hidden" title="City"
                                data-live-search="false" data-selected-text-format="count" multiple
                                data-actions-box="true" >
                                <option data-subtext="Illinois">Chicago</option>
                                <option data-subtext="Florida">Miami</option>
                                <option data-subtext="New York">New York</option>
                                <option data-subtext="California">San Francisco</option>
                            </select><!-- selectpicker -->
                        </div><!-- form-group -->
                    </div><!-- flex-search -->
                    <div class="flex-search">
                        <div class="form-group">
                            <select class="selectpicker form-control bs-select-hidden" title="Language"
                                data-live-search="false" data-selected-text-format="count" multiple
                                data-actions-box="true" >
                                <option data-subtext="English">English</option>
                                <option data-subtext="Spanish">Spanish</option>
                                <option data-subtext="German">German</option>
                            </select><!-- selectpicker -->
                        </div><!-- form-group -->
                    </div><!-- flex-search -->
                    <div class="flex-search">
                        <!-- <?php include 'inc/search/fields/submit-button.php';?> -->
                         <button type="submit" class="btn btn-search btn-secondary btn-full-width">Search</button>
                    </div><!-- flex-search -->
                </div><!-- d-flex -->
            </div><!-- advanced-search-v1 -->
            <div id="advanced-search-filters" class="collapse">
                <!-- <?php include 'inc/search/filters.php';?> -->
            </div><!-- advanced-search-filters -->
        </div><!-- container -->
    </section><!-- advanced-search -->
    <section class="advanced-search advanced-search-nav mobile-search-nav mobile-agent-search-trigger">
        <div class="container">
            <div class="advanced-search-v1">
                <div class="d-flex">
                    <div class="flex-search flex-grow-1">
                        <div class="form-group">
                            <div class="search-icon">
                                <input type="text" class="form-control" placeholder="Search" onfocus="blur();">
                            </div><!-- search-icon -->
                        </div><!-- form-group -->
                    </div><!-- flex-search -->
                </div><!-- d-flex -->
            </div><!-- advanced-search-v1 -->
        </div><!-- container -->
    </section><!-- advanced-search -->


</template><script setup>
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  nextTick(() => {
    $('.selectpicker').selectpicker('refresh')
  })
})
</script>
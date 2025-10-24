<template>
  <DashboardHeader :heading="$t('enquiry.allEnquiries')">
    <router-link :to="{name:'dashboard.create-enquiry'}" class="btn btn-primary">
      {{ $t('enquiry.createEnquiry') }}
    </router-link>
  </DashboardHeader>

  <section class="dashboard-content-wrap">
    <div class="deals-table-wrap">
      <NoDataMsg 
      v-if="enquiries.length < 1"
      :msg="$t('enquiry.noData')"/>
      <template v-else>
        <div class="deal-content-wrap p-0">
          <Table
            :enquires="enquiries"
            :loading="loading"
            @delete-enquiry="(id) => deleteEnquiry(id)"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useConfirm, useEnquiry, useMessage, useNotification } from '@/stores/index.js'
import { storeToRefs } from 'pinia'
import Table from "@/views/dashboard/pages/board/enquires/all-enquires/Table.vue"
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const enquiryStore = useEnquiry()
const { enquiries } = storeToRefs(enquiryStore)

const loading = ref(false)

const getEnquiries = async () => {
  loading.value = true
  await enquiryStore.getEnquiries()
  loading.value = false
}

const deleteEnquiry = async (id) => {
  useConfirm().Warning(t('enquiry.confirmDelete'))
    .then(async () => {
      try {
        const res = await enquiryStore.deleteEnquiry(id)

        if (res.status === 200) {
          useNotification().Success(t('enquiry.successDelete'))
          await getEnquiries()
        } else {
          useNotification().Error(t('enquiry.failedDelete'))
        }
      } catch (error) {
        useNotification().Error(`${t('enquiry.errorDelete')} ${error}`)
      }
    })
    .catch(() => {
      useMessage().Info(t('enquiry.cancelRequest'))
    })
}

onMounted(() => getEnquiries())
</script>




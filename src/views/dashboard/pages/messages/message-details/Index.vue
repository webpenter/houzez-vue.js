<template>
  <DashboardHeader heading="Message Details">
    <RouterLink class="btn btn-primary" :to="{name:'dashboard.messages'}">Back to Messages</RouterLink>
  </DashboardHeader>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">

        <div class="dashboard-content-block">
          <div class="message-list-wrap">
            <template v-if="loading">
              <el-skeleton :rows="10" animated />
            </template>
            <template v-if="!loading">
              <ul class="list-unstyled message-list">
                <li class="message-list-item">
                  <div class="d-flex">
                    <div class="message-reply-user mr-3">
                      <img
                          v-if="userMessageDetails?.from?.image"
                          class="rounded-circle mt-1"
                          :src="userMessageDetails.from.image"
                          width="40"
                          height="40"
                          alt="agent"
                      />
                      <div v-else style="width: 40px; height: 40px; background-color: #F1F3F3" class="rounded-circle"></div>
                    </div><!-- message-reply-user -->
                    <div class="message-reply-message flex-grow-1">
                      <p>
                        <strong>{{userMessageDetails?.from?.name}}</strong>
                        <br>
                        <time>
                        <span class="mr-3">
                          {{userMessageDetails?.time}} - {{userMessageDetails?.date}}
                        </span>
                        </time>
                      </p>
                      <p>{{userMessageDetails?.message}}</p>
                    </div><!-- message-reply-message -->
                  </div>
                </li>
              </ul>
            </template>

          </div><!-- message-reply-wrap -->
        </div><!-- dashboard-content-block -->

        <template v-if="!loading">
          <div class="dashboard-content-block">
            <div class="message-reply-wrap">
              <div class="d-flex">
                <div class="message-reply-user mr-3">
                  <img
                      v-if="userMessageDetails?.from?.image"
                      class="rounded-circle mt-1"
                      :src="userMessageDetails.from.image"
                      width="40"
                      height="40"
                      alt="agent"
                  />
                  <div v-else style="width: 40px; height: 40px; background-color: #F1F3F3" class="rounded-circle"></div>
                </div><!-- message-reply-user -->
                <div class="message-reply-message flex-grow-1">
                  <div class="form-group">
                    <label>Reply Message</label>
                    <textarea v-model="messageInput" class="form-control" name="message" rows="5" placeholder="Type your message here..."></textarea>
                  </div>
                  <button @click="sendReply" class="btn btn-primary">Send Message</button>
                </div><!-- message-reply-message -->
              </div>
            </div><!-- message-reply-wrap -->

            <div class="message-list-wrap">
              <ul class="list-unstyled message-list">
                <template v-for="reply in tourRequestStore.replies" :key="reply.id">
                  <li class="message-list-item">
                    <div class="d-flex">
                      <div class="message-reply-user mr-3">
                        <img
                            v-if="reply.user?.image"
                            class="rounded-circle mt-1"
                            :src="reply.user?.image"
                            width="40"
                            height="40"
                            alt="agent"
                        />
                        <div v-else style="width: 40px; height: 40px; background-color: #F1F3F3" class="rounded-circle"></div>
                      </div><!-- message-reply-user -->
                      <div class="message-reply-message flex-grow-1">
                        <p><strong>{{ reply.user?.name }}</strong><br>
                          <span class="mr-3">
                          {{reply.time}} - {{reply.date}}
                        </span>
                        </p>
                        <p>{{ reply.message }}</p>
                      </div><!-- message-reply-message -->
                    </div>
                  </li>
                </template>
              </ul>

            </div><!-- message-reply-wrap -->
          </div><!-- dashboard-content-block -->
        </template>
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>
<script setup>
import {RouterLink, useRoute, useRouter} from "vue-router";
import {useNotification, useTourRequest} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";

const route = useRoute();
const router = useRouter();
const msgId = route.params.messageId;

const messageInput = ref("");

const loading = ref(false);

const tourRequestStore = useTourRequest();
const {userMessageDetails,replies} = storeToRefs(tourRequestStore);

const showMsgDetails = async () => {
  loading.value = true;
  try {
    const res = await tourRequestStore.showUserMessageDetail(msgId);

    loading.value = false;
    if (res.status === 404 || res.status === 403) {
      router.push({ name: 'property-not-found-404' });
    }
  } catch (error) {
    console.error("Error fetching message details:", error);
    router.push({ name: 'property-not-found-404' });
  }
};

const sendReply = async () => {
  if (!messageInput.value) return;

  const res = await tourRequestStore.sendReply(msgId, messageInput.value);
  if (res.status === 201) {
    messageInput.value = "";
    useNotification().Success("Message sent successfully.");
    await tourRequestStore.fetchReplies(msgId);
  } else {
    useNotification().Error("An error occurred.");
  }
};

onMounted(() => {
  showMsgDetails();
  tourRequestStore.fetchReplies(msgId);
});
</script>
<template>
    <DashboardHeader heading="Messages">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <div class="message-top-wrap">
                            <div class="d-flex">
                                <div class="message-reply-user mr-3">
                                    <img class="rounded-circle mt-1" src="https://placehold.co/40x40" alt="agent">
                                </div><!-- message-reply-user -->
                                <div class="message-reply-user">
                                    <span class="mr-2">John Doe 
                                        <span class="text-success ml-2"><i class="houzez-icon icon-single-neutral-circle mr-1"></i></span> Online</span><br>
                                        <strong>Amazing Oceanfront Apartment</strong>
                                    
                                </div><!-- message-reply-user -->
                            </div><!-- d-flex -->
                            <!-- <span class="text-danger"><i class="houzez-icon icon-single-neutral-circle mr-1"></i></span> Offline</span> -->
                        </div><!-- message-top-wrap -->
                    </div><!-- dashboard-content-block -->

                    <div class="dashboard-content-block">
                        <div class="message-reply-wrap">
                            <div class="d-flex">
                                <div class="message-reply-user mr-3">
                                    <img class="rounded-circle mt-1" src="https://placehold.co/40x40" alt="agent">
                                </div><!-- message-reply-user -->
                                <div class="message-reply-message flex-grow-1">
                                    <div class="form-group">
                                        <label>Reply Message</label>
                                        <textarea class="form-control" name="message" rows="5" placeholder="Type your message here..."></textarea>
                                    </div>
                                    <button class="btn btn-primary">Send Message</button>
                                    <button class="btn btn-light-grey-outlined pull-right"><i class="houzez-icon icon-attachment mr-2"></i> Attachment</button>
                                </div><!-- message-reply-message -->
                            </div>
                        </div><!-- message-reply-wrap -->

                        <div class="message-list-wrap">
                            <ul class="list-unstyled message-list">
                                <li class="message-list-item">
                                    <div class="d-flex">
                                        <div class="message-reply-user mr-3">
                                            <img class="rounded-circle mt-1" src="https://placehold.co/40x40" alt="agent">
                                        </div><!-- message-reply-user -->
                                        <div class="message-reply-message flex-grow-1">
                                            <p><strong>John Doe</strong><br>
                                                <time><span class="mr-3"><i class="houzez-icon icon-time-clock-circle mr-1"></i>  4:35 PM <i class="houzez-icon icon-attachment ml-3 mr-1"></i> April 3, 2017 </span></time>
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum eros eget lorem porta tempor. Mauris ultrices, lorem ac pellentesque convallis, ex eros lacinia elit, sed dictum risus augue id orci. Vivamus efficitur, mi nec congue volutpat, erat nulla fringilla mi, in volutpat est ligula et metus.</p>
                                            <p>Ut dictum quis ipsum ut maximus. Suspendisse malesuada iaculis turpis non accumsan. Ut venenatis, neque in molestie porta, neque felis maximus tellus, ac aliquam orci ipsum quis lacus. Aliquam erat volutpat. In vulputate hendrerit erat eu vehicula. Maecenas pharetra quam quis urna convallis posuere. Phasellus a euismod eros, non luctus dolor. Pellentesque accumsan purus nec augue posuere iaculis sit amet ac purus.</p>
                                        </div><!-- message-reply-message -->
                                    </div>
                                </li>
                                <li class="message-list-item">
                                    <div class="d-flex">
                                        <div class="message-reply-user mr-3">
                                            <img class="rounded-circle mt-1" src="https://placehold.co/40x40" alt="agent">
                                        </div><!-- message-reply-user -->
                                        <div class="message-reply-message flex-grow-1">
                                            <p><strong>Agent Name</strong><br>
                                                <time><span class="mr-3"><i class="houzez-icon icon-time-clock-circle mr-1"></i>  6:21 PM <i class="houzez-icon icon-attachment ml-3 mr-1"></i> April 2, 2017 </span></time>
                                            </p>
                                            <p>Integer nec purus finibus arcu lobortis vulputate. Ut libero nunc, luctus porta maximus vel, mollis non sem. Pellentesque vitae dui id mauris malesuada pellentesque at et nibh. Vestibulum vel volutpat lectus. Morbi id tristique lectus. Aliquam tincidunt suscipit vestibulum. Vestibulum imperdiet nisi at diam iaculis, pretium porttitor purus sollicitudin. Mauris dignissim tortor sit amet luctus finibus. Nam ligula mi, auctor eget ligula id, pulvinar sagittis ex.</p>
                                            <p>Donec porttitor mauris nisi, et pretium enim tempor non. Duis quis varius risus. Nunc fringilla nulla ut commodo sodales. Pellentesque vestibulum gravida vehicula. Aliquam iaculis varius hendrerit. Nullam in nunc et nisi aliquet rutrum. Nulla ultricies tincidunt lectus vitae tempus. Morbi lacinia neque semper dui egestas, tincidunt faucibus nunc ultrices. Praesent volutpat lorem nec lectus consectetur, ut lobortis lectus bibendum. Ut ut cursus turpis. Maecenas blandit lacus ut sem gravida consectetur.</p>
                                        </div><!-- message-reply-message -->
                                    </div>
                                </li>
                            </ul>

                        </div><!-- message-reply-wrap -->
                    </div><!-- dashboard-content-block -->


                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
        <section class="dashboard-side-wrap">
            <!-- <?php include 'inc/dashboard/side-wrap.php';?> -->
            <SideWrap/>
        </section>

</template>
<script setup>
import SideWrap from '@/views/inc/dashboard/SideWrap.vue';  // Correct import using alias
import MessageTableItem from '@/views/inc/dashboard/MessageTableItem.vue';
import Pagination from '@/views/inc/listing/Pagination.vue';
</script>
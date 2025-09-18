<template>
    <div class="team-module hover-effect">
        <!-- <a href="#" class="team-mobile-link"></a> -->
<img class="img-fluid" :src="member.image" alt="team" />

        <div class="team-content-wrap team-content-wrap-before">
            <div class="team-content">
                <div class="team-name">
                    <strong>{{ member.name }}</strong>
                </div><!-- team-name -->
                <div class="team-title">
                    {{ member.designation }}
                </div><!-- team-name -->
            </div><!-- team-content -->
        </div><!-- team-content-wrap -->
        <div class="team-content-wrap team-content-wrap-after">
            <div class="team-content">
                <div class="team-name">
                    <strong>{{ member.name }}</strong>
                </div><!-- team-name -->
                <div class="team-title">
                    {{ member.designation }}
                </div><!-- team-name -->
                <div class="team-description">
                    Intelligent, ambitious, energetic and proactive perfectionist. Working with Kathryn Wallace is a
                    signature of success.
                </div><!-- team-description -->
                <div class="team-social-wrap">
                    <ul class="team-social list-unstyled list-inline">
                        <!-- <li class="list-inline-item">
                        <a href="https://www.facebook.com/" class="btn-facebook"><i class="houzez-icon icon-social-media-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-twitter"><i class="houzez-icon icon-x-logo-twitter-logo-2"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-linkedin"><i class="houzez-icon icon-professional-network-linkedin"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#" class="btn-pinterest"><i class="houzez-icon icon-social-pinterest"></i></a>
                    </li> -->
                        <!-- <li class="list-inline-item">
                        <a href="#" class="btn-google-plus"><i class="houzez-icon icon-social-media-google-plus-1"></i></a>
                    </li> -->
                    </ul>
                    <ul class="team-social list-unstyled d-flex flex-column align-items-center">
                        <!-- Phone -->
                        <li class="contact-item d-flex align-items-center">
                            <i class="houzez-icon icon-phone me-2"></i>
                            <span>{{ member.phone }}</span>
                        </li>

                        <!-- Email -->
                        <li class="contact-item d-flex align-items-center">
                            <i class="houzez-icon icon-envelope me-2"></i>
                            <span>{{ member.email }}</span>
                        </li>

                        <!-- Address -->
                        <li class="contact-item d-flex align-items-center">
                            <i class="houzez-icon icon-pin me-2"></i>
                            <span>{{ member.address }}</span>
                        </li>
                    </ul>
                </div><!-- team-social-wrap -->
            </div><!-- team-content -->
        </div><!-- team-content-wrap -->
    </div><!-- taxonomy-grids-module -->

</template>

<script setup>
defineProps({
    member: Object
});
</script>

<style scoped>
.team-social .contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    /* space between icon and text */
    margin-bottom: 8px;
}

.team-social .contact-item i {
    font-size: 16px;
    line-height: 1;
}

.team-social .contact-item span {
    display: inline-block;
    vertical-align: middle;
}
</style>
<template>
    <ul class="item-tools">
    <li class="item-tool">
        <span class="item-tool-favorite">
            <i class="houzez-icon icon-love-it"></i> <!-- use this for un-favorite <i class="houzez-icon icon-love-it-remove"></i> -->
        </span><!-- item-tool-favorite -->
    </li><!-- item-tool -->
    <li class="item-tool">
        <span class="item-tool-share dropdown-toggle" data-toggle="dropdown">
            <i class="houzez-icon icon-share"></i>
        </span><!-- item-tool-favorite -->
        <div class="dropdown-menu dropdown-menu-right item-tool-dropdown-menu">
            <div class="dropdown-item" href="#">Share on:</div>
            <a class="dropdown-item" href="#">
                <i class="houzez-icon icon-social-media-facebook mr-1"></i> Facebook
            </a>
            <a class="dropdown-item" href="#">
                <i class="houzez-icon icon-x-logo-twitter-logo-2 mr-1"></i> Twitter
            </a>
            <a class="dropdown-item" href="#">
                <i class="houzez-icon icon-social-pinterest mr-1"></i> Pinterest
            </a>
            <a class="dropdown-item" href="#">
                <i class="houzez-icon icon-professional-network-linkedin mr-1"></i> Linkedin
            </a>
            <a class="dropdown-item" href="#">
                <i class="houzez-icon icon-social-media-google-plus-1 mr-1"></i> Google Plus
            </a>
            <a class="dropdown-item" href="#">
                <i class="houzez-icon icon-envelope mr-1"></i> Email
            </a>
        </div>
    </li><!-- item-tool -->
    <li class="item-tool houzez-print">
        <span class="item-tool-compare">
            <i class="houzez-icon icon-print-text"></i>
        </span><!-- item-tool-compare -->
    </li><!-- item-tool -->
</ul><!-- item-tools -->
</template>
<script setup></script>
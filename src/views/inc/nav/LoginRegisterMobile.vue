<template>
    <nav
    id="navi-user"
    class="navi-login-register slideout-menu slideout-menu-right">
        <a class="btn btn-create-listing" href="/add-new-property-frontend-single-page-step-1.php">
            Create a Listing
        </a>
        <ul class="logged-in-nav">
            <li>
                <a href="#" data-toggle="modal" data-target="#login-register-form">
                    <i class="houzez-icon icon-lock-5 mr-1"></i> 
                    Login
                </a>
            </li><!-- .has-chil -->
            <li>
                <a href="#" data-toggle="modal" data-target="#login-register-form">
                    <i class="houzez-icon icon-single-neutral-circle mr-1"></i>
                <!-- </span> -->
                 Register
            </a>
            </li>   
            <li>
                <a href="#"><i class="houzez-icon icon-love-it mr-1"></i>
                <!-- </span>  -->
                Favorite 
                <span class="btn-bubble">25</span>
            </a>
            </li>
        </ul><!-- .main-nav -->
    </nav>
    <!-- .navi -->
</template>

<script setup></script>
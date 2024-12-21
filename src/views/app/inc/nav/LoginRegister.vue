<template>
    <div class="login-register on-hover-menu">
        <ul class="login-register-nav dropdown d-flex align-items-center">

            <!-- start with links -->
            <!-- <li class="btn-phone-number">
                <a href="tel:+18009876543"><i class="houzez-icon icon-phone-actions-ring mr-1"></i> +1 (800) 987 6543</a>
            </li>
            <li class="login-link">
                <a href="#" data-toggle="modal" data-target="#login-register-form">Login</a>
            </li>
            <li class="register-link">
                <a href="#" data-toggle="modal" data-target="#login-register-form">Register</a>
            </li>
            <li class="favorite-link">
                <a href="#">Favourites <span class="btn-bubble">25</span></a>
            </li> -->
            <!-- end with links -->

            <!-- start with dropdown -->
            <li class="nav-item">
                <a class="btn btn-icon-login-register dropdown-toggle" href="#" data-toggle="modal" data-target="#login-register-form"><i class="houzez-icon icon-single-neutral-circle"></i></a>
                <ul class="dropdown-menu">
                    <li class="nav-item">
                        <a class="dropdown-item" href="#"><i class="houzez-icon icon-love-it mr-2"></i> Favourites <span class="btn-bubble">25</span></a>
                    </li>
                </ul>
            </li>
            <!-- end with dropdown -->

            <li><a class="btn btn-create-listing hidden-xs hidden-sm" href="add-new-property-frontend-single-page-step-1.php">Create a Listing</a></li>

        </ul>
    </div>
</template>

<script setup></script>
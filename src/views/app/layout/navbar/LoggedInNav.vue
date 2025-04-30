<template>
    <nav class="logged-in-nav-wrap navi-login-register slideout-menu slideout-menu-right" id="navi-user">
    <div class="d-flex justify-content-end">
        <div class="login-register-nav">
            <span class="btn-phone-number">
                <a href="tel:+18009876543"><i class="houzez-icon icon-phone-actions-ring mr-1"></i> +1 (800) 987 6543</a>
            </span>
            <a class="btn btn-create-listing hidden-xs hidden-sm" href="add-new-property-frontend-single-page-step-1.php">Create a Listing</a>
        </div>
        <div class="navbar-logged-in-wrap navbar">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img width="42" height="42" alt="author" src="https://placehold.co/42" class="rounded">
            </a>
            <ul class="logged-in-nav dropdown-menu">
                <li>
                    <a href="crm.php"><i class="houzez-icon icon-layout-dashboard mr-2"></i> Board <span class="notification-circle"></span></a>
                </li>
                <li>
                    <a href="dashboard-agent-all-properties.php"><i class="houzez-icon icon-building-cloudy mr-2"></i> Properties</a>
                </li>
                <li>
                    <a href="dashboard-agent-add-new-property-get-package.php"><i class="houzez-icon icon-add-circle mr-2"></i> Create a Listing</a>
                </li>
                <li>
                    <a href="dashboard-agent-favorite-properties.php"><i class="houzez-icon icon-love-it mr-2"></i> Favourites</a>
                </li>
                <li>
                    <a href="dashboard-agent-saved-searches.php"><i class="houzez-icon icon-search mr-2"></i> Saved Searches</a>
                </li>
                <li>
                    <a href="dashboard-agent-messages.php"><i class="houzez-icon icon-messages-bubble mr-2"></i> Messages <span class="notification-circle"></span></a>
                </li>
                <li>
                    <a href="dashboard-agent-membership.php"><i class="houzez-icon icon-task-list-text-1 mr-2"></i> Membership</a>
                </li>
                <li>
                    <a href="dashboard-agent-invoices.php"><i class="houzez-icon icon-accounting-document mr-2"></i> Invoices</a>
                </li>
                <li>
                    <a href="dashboard-agent-my-profile.php"><i class="houzez-icon icon-single-neutral-circle mr-2"></i> My profile</a>
                </li>
                <li>
                    <a href="#"><i class="houzez-icon icon-lock-5 mr-2"></i> Log Out</a>
                </li>
            </ul><!-- logged-in-nav -->
        </div><!-- .logged-in -->
    </div>
</nav><!-- .logged-in-nav-wrap -->

</template>
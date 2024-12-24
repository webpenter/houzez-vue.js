<template>
    <ul class="side-menu list-unstyled">
	<li class="side-menu-item">
		<a href="dashboard-agent-insight.php"><i class="houzez-icon icon-house mr-2"></i> Home</a>
	</li>
	<li class="side-menu-item side-menu-parent-selected">
		<a href="crm.php"><i class="houzez-icon icon-layout-dashboard mr-2"></i> Board</a>
		<ul class="side-menu-dropdown list-unstyled">
			<li class="side-menu-item">
				<a href="crm.php" class="active"><i class="houzez-icon icon-arrow-right-1"></i> Activities</a>
			</li>
			<li class="side-menu-item">
				<a href="crm-active-deals.php"><i class="houzez-icon icon-arrow-right-1"></i> Deals</a>
			</li>
			<li class="side-menu-item">
				<a href="crm-leads.php"><i class="houzez-icon icon-arrow-right-1"></i> Leads</a>
				<span class="notification-circle"></span>
			</li>
			<li class="side-menu-item">
				<a href="crm-enquiries.php"><i class="houzez-icon icon-arrow-right-1"></i> Enquiries</a>
				<span class="notification-circle"></span>
			</li>
			<!-- <li class="side-menu-item">
				<a href="crm-tasks.php"><i class="houzez-icon icon-arrow-right-1"></i> Tasks</a>
			</li>
			<li class="side-menu-item">
				<a href="crm-calendar.php"><i class="houzez-icon icon-arrow-right-1"></i> Calendar</a>
			</li> -->
		</ul>
	</li>
	<li class="side-menu-item">
		<a href="dashboard-agent-insight.php"><i class="houzez-icon icon-analytics-bars mr-2"></i> Insight</a>
	</li>
	<li class="side-menu-item side-menu-parent-selected">
		<a href="#"><i class="houzez-icon icon-building-cloudy mr-2"></i> Properties</a>
		<ul class="side-menu-dropdown list-unstyled">
			<li class="side-menu-item">
				<a href="dashboard-agent-all-properties.php" class="active"><i class="houzez-icon icon-arrow-right-1"></i> All</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> Published</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> Pending</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> Expired</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> Draft</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> On Hold</a>
			</li>
		</ul>
	</li>
	<li class="side-menu-item">
		<a href="dashboard-agent-add-new-property-get-package.php"><i class="houzez-icon icon-add-circle mr-2"></i> Create a Listing</a>
	</li>
	<li class="side-menu-item side-menu-parent-selected">
		<a href="#"><i class="houzez-icon icon-building-cloudy mr-2"></i> Projects</a>
		<ul class="side-menu-dropdown list-unstyled">
			<li class="side-menu-item">
				<a href="dashboard-developer-all-projects.php" class="active"><i class="houzez-icon icon-arrow-right-1"></i> All</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> Published</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> Pending</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> Expired</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> Draft</a>
			</li>
			<li class="side-menu-item">
				<a href="#"><i class="houzez-icon icon-arrow-right-1"></i> On Hold</a>
			</li>
		</ul>
	</li>
	<li class="side-menu-item">
		<a href="dashboard-developer-add-new-project-step-1.php"><i class="houzez-icon icon-add-circle mr-2"></i> Create a Project</a>
	</li>
	<li class="side-menu-item side-menu-parent-selected">
		<a href="#"><i class="houzez-icon icon-single-neutral mr-2"></i> Agents</a>
		<ul class="side-menu-dropdown list-unstyled">
			<li class="side-menu-item">
				<a href="dashboard-agent-all-agents.php" class="active"><i class="houzez-icon icon-arrow-right-1"></i> All</a>
			</li>
			<li class="side-menu-item">
				<a href="dashboard-agent-add-new-agent.php"><i class="houzez-icon icon-arrow-right-1"></i> Add new</a>
			</li>
		</ul>
	</li>
	<li class="side-menu-item">
		<a href="dashboard-agent-favorite-properties.php"><i class="houzez-icon icon-love-it mr-2"></i> Favorites</a>
	</li>
	<li class="side-menu-item">
		<a href="dashboard-agent-saved-searches.php"><i class="houzez-icon icon-search mr-2"></i> Saved Searches</a>
	</li>
	<li class="side-menu-item">
		<a href="dashboard-agent-messages.php"><i class="houzez-icon icon-messages-bubble mr-2"></i> Messages</a>
		<span class="notification-circle"></span>
	</li>
	<li class="side-menu-item">
		<a href="dashboard-agent-membership.php"><i class="houzez-icon icon-task-list-text-1 mr-2"></i> Membership</a>
	</li>
	<li class="side-menu-item">
		<a href="dashboard-agent-invoices.php"><i class="houzez-icon icon-accounting-document mr-2"></i> Invoices</a>
	</li>
	<li class="side-menu-item">
		<a href="dashboard-agent-my-profile.php"><i class="houzez-icon icon-single-neutral-circle mr-2"></i> My Profile</a>
	</li>
	<li class="side-menu-item">
		<a href="gdpr-request.php"><i class="houzez-icon icon-envelope mr-2"></i> GDPR</a>
	</li>
	<li class="side-menu-item">
		<a href="#"><i class="houzez-icon icon-lock-5 mr-2"></i> Log Out</a>
	</li>
</ul>
</template>

<script setup></script>
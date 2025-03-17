<template>
    <ul class="list-unstyled activities-list">
	<li class="activitiy-item d-flex">
		<div class="activitiy-item-close-button">
			<i class="houzez-icon icon-close"></i>
		</div>
		<div class="activitiy-item-left">
			<img class="rounded-circle activities-avatar" src="@/assets/img/lead-avatar.png" width="40" height="40" alt="profile image">
		</div>
		<div class="activitiy-item-body">
			<div class="activity-time">{{$t('Just now')}}</div>
			<p><strong>{{$t('You got a new lead')}}</strong> {{$t('from')}} <a href="#"><strong>{{$t('Apartment With Ocean View')}}</strong></a></p>
			<ul class="list-unstyled mb-2">
				<li><strong>{{$t('Name:')}}</strong> {{$t('Martin Moore')}}</li>
				<li><strong>{{$t('Email')}}:</strong> <a href="#">{{$t('martin.moore@houzez.co')}}</a></li>
				<li><strong>{{$t('Phone:')}}</strong> {{$t('786-234-1928')}}</li>
				<li><strong>{{$t('Type:')}}</strong> {{$t('Buyer')}}</li>
			</ul>
			<p>{{$t('Lorem')}}</p>
			<a href="crm-lead-enquiries.php"><i class="houzez-icon icon-email-action-reply mr-2"></i> <strong>{{$t('Reply')}}</strong></a>
		</div>
	</li><!-- activitiy-item -->

	<li class="activitiy-item d-flex">
		<div class="activitiy-item-close-button">
			<i class="houzez-icon icon-close"></i>
		</div>
		<div class="activitiy-item-left">
			<img class="rounded-circle activities-avatar" src="@/assets/img/lead-avatar.png" width="40" height="40" alt="profile image">
		</div>
		<div class="activitiy-item-body">
			<div class="activity-time">{{$t('2 minutes ago')}}</div>
			<p><strong>{{$t('Someone liked your')}}</strong> <a href="#"><strong>{{$t('review')}}</strong></a></p>
		</div>
	</li><!-- activitiy-item -->

	<li class="activitiy-item d-flex">
		<div class="activitiy-item-close-button">
			<i class="houzez-icon icon-close"></i>
		</div>
		<div class="activitiy-item-left">
			<img class="rounded-circle activities-avatar" src="@/assets/img/lead-avatar.png" width="40" height="40" alt="profile image">
		</div>
		<div class="activitiy-item-body">
			<div class="activity-time">{{$t('3 minutes ago')}}</div>
			<p><strong>{{$t('Someone disliked your')}}</strong> <a href="#"><strong>{{$t('review')}}</strong></a></p>
		</div>
	</li><!-- activitiy-item -->

	<li class="activitiy-item d-flex">
		<div class="activitiy-item-close-button">
			<i class="houzez-icon icon-close"></i>
		</div>
		<div class="activitiy-item-left">
			<img class="rounded-circle activities-avatar" src="@/assets/img/lead-avatar.png" width="40" height="40" alt="profile image">
		</div>
		<div class="activitiy-item-body">
			<div class="activity-time">{{$t('4 minutes ago')}}</div>
			<p><strong>{{$t('Someone favorites')}}</strong> <a href="#"><strong>{{$t('Apartment With Ocean View')}}</strong></a></p>
		</div>
	</li><!-- activitiy-item -->
	<li class="activitiy-item d-flex">
		<div class="activitiy-item-close-button">
			<i class="houzez-icon icon-close"></i>
		</div>
		<div class="activitiy-item-left">
			<img class="rounded-circle activities-avatar" src="@/assets/img/lead-avatar.png" width="40" height="40" alt="profile image">
		</div>
		<div class="activitiy-item-body">
			<div class="activity-time">{{$t('6 minutes ago')}}</div>
			<p><strong>{{$t('You received a new message')}}</strong> {{$t('from')}} <a href="#"><strong>{{$t('Martin Moore')}}</strong></a></p>
			<p>{{$t('Lorem')}}</p>
			<a href="crm-lead-enquiries.php"><i class="houzez-icon icon-email-action-reply mr-2"></i> <strong>{{$t('Reply')}}</strong></a>
		</div>
	</li><!-- activitiy-item -->
	<li class="activitiy-item d-flex">
		<div class="activitiy-item-close-button">
			<i class="houzez-icon icon-close"></i>
		</div>
		<div class="activitiy-item-left">
			<img class="rounded-circle activities-avatar" src="@/assets/img/lead-avatar.png" width="40" height="40" alt="profile image">
		</div>
		<div class="activitiy-item-body">
			<div class="activity-time">{{$t('1 hour ago')}}</div>
			<p><strong>{{$t('You received property tour request')}}</strong> {{$t('from')}} <a href="#"><strong>{{$t('Apartment With Ocean View')}}</strong></a></p>
			<ul class="list-unstyled mb-2">
				<li><strong>{{$t('Name:')}}</strong> {{$t('Martin Moore')}}</li>
				<li><strong>{{$t('Email:')}}</strong> <a href="#">{{$t('martin.moore@houzez.co')}}</a></li>
				<li><strong>{{$t('Phone:')}}</strong> {{$t('786-234-1928')}}</li>
				<li><strong>{{$t('Type:')}}</strong> {{$t('Buyer')}}</li>
			</ul>
			<ul class="list-unstyled mb-2">
				<li><strong>{{$t('Desired tour date:')}}</strong></li>
				<li><em>{{$t('July 16, 2019 at 4:00 PM')}}</em></li>
			</ul>
			<p>{{$t('Lorem')}}</p>
			<a href="crm-lead-enquiries.php"><i class="houzez-icon icon-email-action-reply mr-2"></i> <strong>{{$t('Reply')}}</strong></a>
		</div>
	</li><!-- activitiy-item -->
	<li class="activitiy-item d-flex">
		<div class="activitiy-item-close-button">
			<i class="houzez-icon icon-close"></i>
		</div>
		<div class="activitiy-item-left">
			<img class="rounded-circle activities-avatar" src="@/assets/img/lead-avatar.png" width="40" height="40" alt="profile image">
		</div>
		<div class="activitiy-item-body">
			<div class="activity-time">{{$t('1 day ago')}}</div>
			<p>
				<strong>{{$t('You received a new rating')}}</strong> {{$t('from')}} <a href="#"><strong>{{$t('Martin Moore')}}</strong></a>
				<span class="rating-score-wrap">
					<span class="star">
						<span class="icon-rating full-star"></span>
						<span class="icon-rating full-star"></span>
						<span class="icon-rating full-star"></span>
						<span class="icon-rating half-star"></span>
						<span class="icon-rating empty-star"></span>
					</span><!-- star -->
				</span>
			</p>
			<p><strong>{{$t('Review Title Goes Here')}}</strong><br>
			{{$t('Lorem')}}</p>

			<a href="#"><i class="houzez-icon icon-arrow-button-circle-right mr-2"></i> <strong>{{$t('View')}}</strong></a>
		</div>
	</li><!-- activitiy-item -->
</ul><!-- activities-list -->
<div class="spinner">
	<div class="bounce1"></div>
	<div class="bounce2"></div>
	<div class="bounce3"></div>
</div>



</template>
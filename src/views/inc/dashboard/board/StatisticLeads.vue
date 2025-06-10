<template>
    <div class="dashboard-content-block dashboard-statistic-block">
	<h3><i class="houzez-icon icon-sign-badge-circle mr-2 primary-text"></i> {{$t('Leads')}}</h3>
	<div class="row">
		<div class="col-md-4 col-sm-4 col-4">
			<div class="views-data-wrap">
				<div class="views-data">
					{{$t('36')}}
				</div><!-- views-data -->
				<div class="views-percentage text-danger">
					<i class="houzez-icon icon-arrow-button-down-2"></i> {{$t('-1.5%')}}
				</div><!-- views-percentage -->
				<div class="views-text">
					{{$t('Last 24 Hours')}}
				</div><!-- views-text -->
			</div><!-- views-data-wrap -->
		</div><!-- col-md-4 col-sm-12 -->
		<div class="col-md-4 col-sm-4 col-4">
			<div class="views-data-wrap">
				<div class="views-data">
					{{$t('283')}}
				</div><!-- views-data -->
				<div class="views-percentage text-success">
					<i class="houzez-icon icon-arrow-button-up-2"></i> {{$t('2.8%')}}
				</div><!-- views-percentage -->
				<div class="views-text">
					{{$t('Last 7 Days')}}
				</div><!-- views-text -->
			</div><!-- views-data-wrap -->
		</div><!-- col-md-4 col-sm-12 -->
		<div class="col-md-4 col-sm-4 col-4">
			<div class="views-data-wrap">
				<div class="views-data">
					{{$t('1,9K')}}
				</div><!-- views-data -->
				<div class="views-percentage text-danger">
					<i class="houzez-icon icon-arrow-button-up-2"></i> {{$t('6.9%')}}
				</div><!-- views-percentage -->
				<div class="views-text">
					{{$t('Last 30 Days')}}
				</div><!-- views-text -->
			</div><!-- views-data-wrap -->
		</div><!-- col-md-4 col-sm-12 -->
	</div>
</div><!-- dashboard-statistic-block -->
</template>
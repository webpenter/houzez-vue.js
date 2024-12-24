<template>
    <div class="dashboard-content-block-wrap">
	<h2>Do you have an account?</h2>
	<div class="dashboard-content-block">
		<p>If you don't have an account you can create one below by entering your email address. Your account details will be confirmed via email. Otherwise you can <a href="#" data-toggle="modal" data-target="#login-register-form"><strong>login here</strong></a>.</p>
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Username</label>
					<input class="form-control is-valid" name="name" placeholder="Username" type="text">
				</div>
			</div><!-- col-md-3 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Email</label>
					<input class="form-control" name="name" placeholder="Email" type="text">
				</div>
			</div><!-- col-md-3 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Password</label>
					<input class="form-control" name="name" placeholder="Password" type="text">
				</div>
			</div><!-- col-md-3 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Confirm password</label>
					<input class="form-control" name="name" placeholder="Confirm password" type="text">
				</div>
			</div><!-- col-md-3 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<label>Select your account type</label>
				<select class="selectpicker form-control bs-select-hidden" title="Select your account type" data-live-search="false">
					<option>Agent</option>
					<option>Agency</option>
					<option>Owner</option>
					<option>Buyer</option>
					<option>Seller</option>
					<option>Manager</option>
				</select><!-- selectpicker -->
			</div><!-- col-md-3 col-sm-12 -->
		</div><!-- row -->
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->

</template>
<template>
  <div class="alert alert-success" role="alert">
    <i class="houzez-icon icon-check-circle-1 mr-1"></i> The message goes here
</div>
<div class="alert alert-danger" role="alert">
    <i class="houzez-icon icon-remove-circle mr-1"></i> The message goes here
</div>

<div class="register-form-wrap">
    <div class="form-group">
        <div class="form-group-field username-field">
            <input type="text" class="form-control" placeholder="Username">
        </div><!-- input-group -->
    </div><!-- form-group -->
    <div class="form-group">
        <div class="form-group-field email-field">
            <input type="text" class="form-control" placeholder="Email">
        </div><!-- input-group -->
    </div><!-- form-group -->
    <div class="form-group">
        <div class="form-group-field password-field">
            <input type="text" class="form-control" placeholder="Password">
        </div><!-- input-group -->
    </div><!-- form-group -->
    <div class="form-group">
        <div class="form-group-field password-field">
            <input type="text" class="form-control" placeholder="Confirm password">
        </div><!-- input-group -->
    </div><!-- form-group -->
</div><!-- login-form-wrap -->
<div class="form-group mt-10">
    <select class="selectpicker form-control bs-select-hidden" title="Select your account type" data-live-search="false">
        <option>Agent</option>
        <option>Agency</option>
        <option>Owner</option>
        <option>Buyer</option>
        <option>Seller</option>
        <option>Manager</option>
    </select><!-- selectpicker -->
</div><!-- form-group -->

<div class="form-tools">
    <label class="control control--checkbox">
        <input type="checkbox" name="air-conditioning">I agree with the <a href="#">Terms &amp; Conditions</a>
        <span class="control__indicator"></span>
    </label>
</div><!-- form-tools -->

<button type="button" class="btn btn-primary btn-full-width">Register</button>
</template>
<script setup>
</script>
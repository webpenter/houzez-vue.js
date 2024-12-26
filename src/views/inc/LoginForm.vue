<template>
    <div class="alert alert-success" role="alert">
    <i class="houzez-icon icon-check-circle-1 mr-1"></i> The message goes here
</div><!-- alert-success -->
<div class="alert alert-danger" role="alert">
    <i class="houzez-icon icon-remove-circle mr-1"></i> The message goes here
</div><!-- alert-danger -->

<div class="login-form-wrap">
    <div class="form-group">
        <div class="form-group-field username-field">
            <input type="text" class="form-control" placeholder="Username">
        </div><!-- input-group -->
    </div><!-- form-group -->
    <div class="form-group">
        <div class="form-group-field password-field">
            <input type="text" class="form-control" placeholder="Password">
        </div><!-- input-group -->
    </div><!-- form-group -->
</div><!-- login-form-wrap -->

<div class="form-tools">
    <div class="d-flex">
        <label class="control control--checkbox flex-grow-1">
            <input type="checkbox" name="air-conditioning">Remeber me
            <span class="control__indicator"></span>
        </label>
        <a href="#" data-toggle="modal" data-target="#reset-password-form" data-dismiss="modal">Forgot passoword?</a>
    </div><!-- d-flex -->    
</div><!-- form-tools -->

<button type="button" class="btn btn-primary btn-full-width">Login</button>

<div class="social-login-wrap">
    <button type="button" class="btn btn-facebook-login btn-full-width"> Continue with Facebook</button>
    <button type="button" class="btn btn-google-plus-lined btn-full-width"><img class="google-icon" src="/img/Google__G__Logo.svg"/> Sign in with google</button>
</div><!-- social-login-wrap -->
</template>
<script setup>

</script>
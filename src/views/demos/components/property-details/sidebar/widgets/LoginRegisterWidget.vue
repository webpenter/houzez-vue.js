<template>
    <div class="widget widget-wrap widget-login-register">
        <div class="widget-header">
            <h3 class="widget-title">
                Login / Register
            </h3><!-- widget-title -->
        </div><!-- widget-header -->
        <div class="widget-body">
            <div class="login-register-tabs">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#widget-login-form-tab" role="tab">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#widget-register-form-tab" role="tab">Register</a>
                    </li>
                </ul>
            </div><!-- login-register-tabs -->
            <div class="tab-content">
                <div class="tab-pane fade show active" id="widget-login-form-tab" role="tabpanel">
                    <LoginForm />
                </div><!-- login-form-tab -->
                <div class="tab-pane fade" id="widget-register-form-tab" role="tabpanel">
                    <RegisterForm />
                </div><!-- register-form-tab -->
            </div><!-- tab-content -->
        </div><!-- widget-body -->
    </div><!-- widget-about-site -->
</template>

<script setup>
import LoginForm from '../LoginForm.vue';
import RegisterForm from '../RegisterForm.vue';
</script>
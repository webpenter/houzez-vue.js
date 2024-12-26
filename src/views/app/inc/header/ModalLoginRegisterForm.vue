<template>

<div class="modal fade login-register-form" id="login-register-form" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="login-register-tabs">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="modal-toggle-1 nav-link" data-toggle="tab" href="#login-form-tab" role="tab">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="modal-toggle-2 nav-link" data-toggle="tab" href="#register-form-tab" role="tab">Register</a>
                        </li>
                    </ul>    
                </div><!-- login-register-tabs -->
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div><!-- modal-header -->
            <div class="modal-body">
                <div class="tab-content">
                    <div class="tab-pane fade login-form-tab" id="login-form-tab" role="tabpanel">
                       <LoginForm/>
                    </div><!-- login-form-tab -->
                    <div class="tab-pane fade register-form-tab" id="register-form-tab" role="tabpanel">
                        <RegisterForm/>
                    </div><!-- register-form-tab -->
                </div><!-- tab-content -->
            </div><!-- modal-body -->
        </div><!-- modal-content -->
    </div><!-- modal-dialog -->
</div><!-- login-register-form -->
</template>
<script setup>

import LoginForm from '../LoginForm.vue';
import RegisterForm from '../RegisterForm.vue';
</script>
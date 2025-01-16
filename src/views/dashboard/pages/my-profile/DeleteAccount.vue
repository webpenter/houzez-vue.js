<template>
    <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <h2>Delete account</h2>
                            </div><!-- col-md-3 col-sm-12 -->

                            <div class="col-md-9 col-sm-12">
                                <div class="row">
                                    <div class="col-md-4 col-sm-12">
                                        <button @click="deleteAccount" class="btn btn-danger">Delete My Account</button>
                                    </div><!-- col-md-12 col-sm-12 -->
                                </div><!-- row -->
                            </div><!-- col-md-9 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->
</template>

<script setup>
import {useAuth} from "@/stores/index.js";
import router from "@/router/index.js";

const deleteAccount = async () => {
  if (!confirm("Are you sure you want to delete this account?")){
    return;
  }
  
  try {
    const res = await useAuth().deleteAccount();

    if (res.status === 200) {
      router.push({name: "unauthorized-401"});
    }
  } catch (error) {
    console.log(error);
  }
}
</script>
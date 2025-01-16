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
  <el-button plain @click="open1"> Closes automatically </el-button>
  <el-button plain @click="open2"> Won't close automatically </el-button>
</template>

<script setup>
import {useAuth} from "@/stores/index.js";
import router from "@/router/index.js";
import { h } from 'vue'
import { ElNotification } from 'element-plus'

const open1 = () => {
  ElNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  ElNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}

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
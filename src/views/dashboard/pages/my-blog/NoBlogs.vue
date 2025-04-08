<template>
    <table class="dashboard-table dashboard-table-blogs table-lined responsive-table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Date</th>
                <th>Time</th>
                <th>Title</th>
                <th>Blog</th>
                <th class="action-col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <!-- ✅ اگر ڈیٹا لوڈ ہو رہا ہے تو Skeleton دکھاؤ -->
            <template v-if="loading">
                <tr>
                    <td colspan="6">
                        <el-skeleton :rows="5" animated />
                    </td>
                </tr>
            </template>

            <!-- ✅ اگر کوئی Blog نہیں ہے -->
            <template v-else-if="blogs.length === 0">
                <tr>
                    <td colspan="6">No blogs found.</td>
                </tr>
            </template>

            <!-- ✅ اگر Blogs موجود ہیں تو Render کرو -->
            <template v-else>
                <tr v-for="blog in blogs" :key="blog.id">
                    <td>
                        
                        <img v-if="blog.image" :src="blog.image" alt="Blog Image" class="blog-img" />
                        <span v-else>No Image</span>
                    </td>
                    <td>{{ blog.date }}</td>
                    <td>{{ blog.time }}</td>
                    <td>{{ blog.title }}</td>
                    <td>{{ blog.blog }}...</td>
                    <td class="property-table-actions" data-label="Actions">
		<div class="dropdown property-action-menu">
			<button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Actions
			</button>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" href="#">Details</a>
				<a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
			</div>
		</div>
	</td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script setup>
import { onMounted } from 'vue';
import { useBlogStore } from '@/stores/blog/useBlogStore';

// ✅ Store کو Call کرو
const { blogs, loading, fetchBlogs } = useBlogStore();

// ✅ Image URL کو Complete URL میں Convert کرنے کا Function
const getImageUrl = (imagePath) => {
    return `http://localhost:8000/storage/${imagePath}`;
};

onMounted(() => {
  fetchBlogs();
});
</script>

<style scoped>
.blog-img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
}
</style>

<template>
    <DashboardHeader heading="All Post">
        <a class="btn btn-primary" href="#">View Public Profile</a>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="posts-page">
                    <h1>Posts</h1>

                    <!-- Top Notices or Alerts (like in WP admin) -->
                    <div class="notice">
                        <p>Create your first folder for media library now. <button
                            style="    border: 1px solid;
    border-color: #dce0e0;">Get Started</button></p>
                        <p>There are updates available for the following plugins: <strong>MailChimp For WP</strong>,
                            <strong>One Click Demo Import</strong> and <strong>Redux Framework</strong>.
                            <button style="    border: 1px solid;
    border-color: #dce0e0;">Begin updating plugins</button> <button
                                style="border: 1px solid #000306;">Dismiss this notice</button>
                        </p>
                        <p><strong>Reahnya MLS Sync</strong>: Could not set a Target Product to Sync with the MLS.
                            <button style="    border: 1px solid;
    border-color: #dce0e0;">Run Setup Wizard</button>
                        </p>
                    </div>

                    <!-- Bulk Actions and Filters -->
                    <div class="posts-toolbar">
                        <div class="bulk-actions">
                            <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
                            <select v-model="bulkAction">
                                <option value="">Bulk actions</option>
                                <option value="edit">Edit</option>
                                <option value="move_to_trash">Move to Trash</option>
                            </select>
                            <button @click="applyBulkAction"
                            style="    border: 1px solid;
    border-color: #dce0e0;">Apply</button>
                        </div>

                        <div class="view-links">
                            <button :class="{ active: currentView === 'all' }" @click="setView('all')">
                                All <span>({{ posts.length }})</span>
                            </button>
                            <button :class="{ active: currentView === 'published' }" @click="setView('published')">
                                Published <span>({{ publishedPosts.length }})</span>
                            </button>
                            <button :class="{ active: currentView === 'draft' }" @click="setView('draft')">
                                Draft <span>({{ draftPosts.length }})</span>
                            </button>
                        </div>

                        <div class="categories-filter">
                            <select v-model="selectedCategory" @change="filterByCategory">
                                <option value="">All Categories</option>
                                <option v-for="cat in allCategories" :key="cat" :value="cat">
                                    {{ cat }}
                                </option>
                            </select>
                            <button @click="clearCategoryFilter" style="border: 1px solid #000306;">Filter</button>
                        </div>
                    </div>

                    <!-- Posts Table -->
                    <table class="wp-posts-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" v-model="selectAll" @change="toggleSelectAll" /></th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Categories</th>
                                <th>Tags</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="post in filteredPosts" :key="post.id">
                                <td><input type="checkbox" v-model="selectedPosts" :value="post.id" /></td>
                                <td>{{ post.title }}</td>
                                <td>{{ post.author }}</td>
                                <td>{{ post.categories.join(', ') }}</td>
                                <td>{{ post.tags.join(', ') }}</td>
                                <td>{{ post.date }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Pagination or other controls could go here -->

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Sample data
const posts = ref([
    {
        id: 1,
        title: 'Hello world!',
        author: 'Admin',
        categories: ['Uncategorized'],
        tags: [],
        status: 'published',
        date: '2022/08/04',
    },
    {
        id: 2,
        title: 'Skills That You Can Learn In The Real Estate Market',
        author: 'Admin',
        categories: ['Business', 'Development', 'House'],
        tags: ['Families', 'Houzez', 'Luxury'],
        status: 'published',
        date: '2022/08/07',
    },
    {
        id: 3,
        title: 'Learn The Truth About Real Estate Industry',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 4,
        title: '10 Quick Tips About Business Development',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 5,
        title: '14 Common Misconceptions About Business Development',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 6,
        title: '10 Things Your Competitors Can Teach You About Real Estate',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 7,
        title: 'Why We Love Real Estate',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 8,
        title: ' The Ultimate Guide to Real Estate',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 9,
        title: '15 Best Blogs To Follow About Real Estate',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 10,
        title: '5 Tools Everyone In The Real Estate Industry',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 11,
        title: 'Understand The Real Estate Market',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 12,
        title: 'Real Estate Industry and Competitors',
        author: 'Editor',
        categories: ['Business'],
        tags: ['Draft'],
        status: 'draft',
        date: '2022/09/01',
    },
    {
        id: 13,
        title: 'Title',
        author: 'Author',
        categories: ['	Categories'],
        tags: ['Vue', 'JavaScript'],
        commentsCount: 3,
        status: 'Published',
        date: 'Date',
    },


])

// State for selection and filtering
const selectedPosts = ref([])
const selectAll = ref(false)
const bulkAction = ref('')
const currentView = ref('all') // all | published | draft
const selectedCategory = ref('')


// Computed categories for the dropdown
const allCategories = computed(() => {
    const categorySet = new Set()
    posts.value.forEach(post => {
        post.categories.forEach(cat => categorySet.add(cat))
    })
    return Array.from(categorySet)
})

// Toggle all checkboxes
function toggleSelectAll() {
    if (selectAll.value) {
        // select all
        selectedPosts.value = posts.value.map(p => p.id)
    } else {
        // deselect all
        selectedPosts.value = []
    }
}

// Bulk action (example only)
function applyBulkAction() {
    if (!bulkAction.value) return
    if (bulkAction.value === 'move_to_trash') {
        // In a real app, you might remove them from the array or mark them as 'trash'
        alert(`Moving posts ${selectedPosts.value.join(', ')} to Trash`)
    } else if (bulkAction.value === 'edit') {
        alert(`Editing posts ${selectedPosts.value.join(', ')}`)
    }
    // Clear selection and bulk action
    selectedPosts.value = []
    selectAll.value = false
    bulkAction.value = ''

}

// Filtering by category
function filterByCategory() {
    // We don’t need to do anything immediately here if we’re using a computed property
    // that checks selectedCategory. However, you could fetch data from an API.
}

function clearCategoryFilter() {
    // In WordPress, “Filter” usually applies the selection.
    // If you want to clear it, you can reset the selectedCategory.
    // For demonstration, we’ll just leave it as is.
    console.log(`Filter applied for category: ${selectedCategory.value}`)
}

// View toggles
function setView(view) {
    currentView.value = view
}

// Computed subsets
const publishedPosts = computed(() => posts.value.filter(p => p.status === 'published'))
const draftPosts = computed(() => posts.value.filter(p => p.status === 'draft'))


// Filter the posts based on currentView and selectedCategory
const filteredPosts = computed(() => {
    let result = posts.value

    if (currentView.value === 'published') {
        result = result.filter(p => p.status === 'published')
    } else if (currentView.value === 'draft') {
        result = result.filter(p => p.status === 'draft')
    }

    if (selectedCategory.value) {
        result = result.filter(p => p.categories.includes(selectedCategory.value))
    }

    return result
})
</script>

<style scoped>
.posts-page {
    margin: 20px;
    font-family: Arial, sans-serif;
}

/* Notices styling */
.notice {
    background-color: #fff;
    border: 1px solid #ccd0d4;
    padding: 10px;
    margin-bottom: 20px;
}

/* Toolbar styling */
.posts-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.bulk-actions select,
.categories-filter select {
    margin: 0 5px;
    padding: 5px;
}

/* Bulk actions container */
.bulk-actions {
    display: flex;
    align-items: center;
}

/* View links (All, Published, Draft) */
.view-links button {
    margin-right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: #0073aa;
}

.view-links button.active {
    font-weight: bold;
    text-decoration: underline;
}

/* Table styling */
.wp-posts-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.wp-posts-table thead {
    background-color: #f1f1f1;
}

.wp-posts-table th,
.wp-posts-table td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
}

.wp-posts-table th input[type="checkbox"] {
    margin: 0;
}
</style>

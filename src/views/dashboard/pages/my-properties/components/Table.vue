<template>
    <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
        <thead>
            <tr>
                <th>Thumbnail</th>
                <th>Address</th>
                <th></th>
                <th>Type</th>
                <th>Status</th>
                <th>Price</th>
                <th class="action-col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table><!-- dashboard-table -->
</template>

<script setup>
</script>

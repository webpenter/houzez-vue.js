<template>
    <DashboardHeader heading="Admin">

    </DashboardHeader>

        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    

                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>


<script setup>
</script>


<style>
    /* Main Content */
    .main-content {
        padding: 10px 20px;
        width: calc(100% - 250px);
    }

    /* Header */
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .search-profile {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .search-profile input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    /* Stats Section */
    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .card h3 {
        margin-bottom: 10px;
    }
</style>
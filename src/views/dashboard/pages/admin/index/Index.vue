<template>
    <DashboardHeader heading="Houzez Admin">

    </DashboardHeader>

        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <!-- Main Content -->
                    <div class="main-content">
                        <header>
                            <h2>Admin Overview</h2>
                            <div class="search-profile">
                                <input type="text" placeholder="Search...">
                                <i class="fas fa-user-circle"></i>
                            </div>
                        </header>

                        <!-- Dashboard Stats -->
                        <section class="stats">
                            <div class="card">
                                <h3>Total Users</h3>
                                <p>1,250</p>
                            </div>
                            <div class="card">
                                <h3>Revenue</h3>
                                <p>$12,500</p>
                            </div>
                            <div class="card">
                                <h3>New Orders</h3>
                                <p>320</p>
                            </div>
                            <div class="card">
                                <h3>Performance</h3>
                                <p>89%</p>
                            </div>
                        </section>
                    </div>

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
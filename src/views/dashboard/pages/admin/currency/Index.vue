<template>
    <DashboardHeader heading="Currencies">
        <RouterLink class="btn btn-primary" to="/dashboard/admin/addnew/currency">Add New</RouterLink>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="currencies-container">
                    <h2 class="title">Currencies </h2>
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Code</th>
                                    <th>Symbol</th>
                                    <th>Position</th>
                                    <th>N. of Decimal Point</th>
                                    <th>Decimal Point Separator</th>
                                    <th>Thousands Separator</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Rows will be dynamically added here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
.currencies-container {
    padding: 20px;
}

.title {
    font-size: 20px;
    font-weight: bold;
}

.add-new {
    color: blue;
    text-decoration: none;
    margin-left: 10px;
}

.table-wrapper {
    margin-top: 10px;
    border: 1px solid #ddd;
}

table {
    width: 100%;
    border-collapse: collapse;
    background: white;
}

th,
td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

th {
    font-weight: bold;
}
</style>
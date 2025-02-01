<template>
    <DashboardHeader heading="Custom Post Type">

    </DashboardHeader>

        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">

                    <form>
                        <div class="form-group">
                            <label>Agents</label>
                            <select>
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Agencies</label>
                            <select>
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Houzez Packages</label>
                            <select>
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Houzez Invoices</label>
                            <select>
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Partners</label>
                            <select>
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Testimonials</label>
                            <select>
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>User Packages Info</label>
                            <select>
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>

                        <button type="submit">Update Settings</button>
                    </form>

                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>

</script>
<style>
    .container {
        max-width: 600px;
        background: white;
        padding: 20px;
        margin: auto;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-size: 22px;
    }

    p {
        color: #555;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }

    select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
<template>
    <DashboardHeader heading="Permalinks">

    </DashboardHeader>

        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">

                    <div class="container">
                        <form>
                            <div class="form-group">
                                <label class="form-label">Property Slug</label>
                                <div class="input-group">
                                    <span>https://houzez.webpenter.com/</span>
                                    <input type="text" value="property">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Property Type Slug</label>
                                <div class="input-group">
                                    <span>https://houzez.webpenter.com/</span>
                                    <input type="text" value="property-type">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Property Feature Slug</label>
                                <div class="input-group">
                                    <span>https://houzez.webpenter.com/</span>
                                    <input type="text" value="feature">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Property Status Slug</label>
                                <div class="input-group">
                                    <span>https://houzez.webpenter.com/</span>
                                    <input type="text" value="status">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Property Country Slug</label>
                                <div class="input-group">
                                    <span>https://houzez.webpenter.com/</span>
                                    <input type="text" value="country">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Property State Slug</label>
                                <div class="input-group">
                                    <span>https://houzez.webpenter.com/</span>
                                    <input type="text" value="state">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Property City Slug</label>
                                <div class="input-group">
                                    <span>https://houzez.webpenter.com/</span>
                                    <input type="text" value="city">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Property Area Slug</label>
                                <div class="input-group">
                                    <span>https://houzez.webpenter.com/</span>
                                    <input type="text" value="area">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Property Label Slug</label>
                                <div class="input-group">
                                    <span>https://houzez.webpenter.com/</span>
                                    <input type="text" value="label">
                                </div>
                            </div>

                            <button type="submit">Update Settings</button>

                        </form>
                    </div>

                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>

</script>


<style>
/* Sidebar Styling */
.sidebar {
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #0b2748;
    color: white;
    padding: 20px;
}

.sidebar a {
    display: block;
    color: white;
    padding: 10px;
    text-decoration: none;
}

.sidebar a:hover {
    background: #1a3b5d;
}

/* Main Content Container */
.container {
    
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}

/* Typography */
h2 {
    font-size: 22px;
}

p {
    color: #555;
}

/* Form Styles */
.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

/* Input & Select Fields */
.input-group {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
}

.input-group span {
    background: #f4f4f4;
    padding: 10px;
    font-size: 14px;
    white-space: nowrap;
}

.input-group input,
select {
    flex: 1;
    border: none;
    padding: 8px;
    font-size: 14px;
    outline: none;
}

/* Button Styles */
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
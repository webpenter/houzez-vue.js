<template>
    <DashboardHeader heading="Add New Currency">
        <RouterLink class="btn btn-primary" to="/dashboard/admin/addnew/currency">Add New</RouterLink>

    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <form @submit.prevent="submitForm">
                        <div class="mb-4">
                            <label class="block font-medium first">Currency Name</label>
                            <input v-model="currency.name" type="text"
                                placeholder="Enter currency name (ie: United States Dollar)"
                                class="w-full p-2 border rounded">
                        </div>
                        <div class="mb-4">
                            <label class="block font-medium">Currency Code</label>
                            <input v-model="currency.code" type="text" placeholder="Enter currency code (ie: USD)"
                                class="w-full p-2 border rounded">
                        </div>
                        <div class="mb-4">
                            <label class="block font-medium">Currency Symbol</label>
                            <input v-model="currency.symbol" type="text" placeholder="Enter currency symbol (ie: $)"
                                class="w-full p-2 border rounded">
                        </div>
                        <div class="mb-4">
                            <label class="block font-medium">Currency Position</label>
                            <select v-model="currency.position" class="w-full p-2 border rounded">
                                <option value="before">Before</option>
                                <option value="after">After</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="block font-medium">Number of Decimal Points?</label>
                            <select v-model="currency.decimalPoints" class="w-full p-2 border rounded">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="block font-medium">Decimal Point Separator (eg: .)</label>
                            <input v-model="currency.decimalSeparator" type="text" class="w-full p-2 border rounded">
                        </div>
                        <div class="mb-4">
                            <label class="block font-medium">Thousands Separator (eg: .)</label>
                            <input v-model="currency.thousandsSeparator" type="text" class="w-full p-2 border rounded">
                        </div>
                        <button type="submit" class="px-4 py-0 bg-blue-500 text-white rounded btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currency: {
                name: '',
                code: '',
                symbol: '',
                position: 'before',
                decimalPoints: '0',
                decimalSeparator: '',
                thousandsSeparator: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log("Form Submitted", this.currency);
        }
    }
};
</script>

<style scoped>
input,
select {
    border: 1px solid #ccc;
    padding: 8px;
    width: 40rem;
    margin-left: 2rem;

}

label {
    padding-left: 30px;
    display: block;
    
}
button{
    margin-left: 33px;
}
form{
    height: 49rem;
}
.first{
    padding-top: 20px;
}
</style>
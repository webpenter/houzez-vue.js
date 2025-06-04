<template>
    <div class="property-schedule-tour-wrap property-schedule-tour-wrap-v2 property-section-wrap"
        id="property-schedule-tour-wrap-v2">
        <div class="block-wrap">
            <div class="block-content-wrap">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="property-schedule-tour-image"
                            :style="{ backgroundImage: `url(${property.thumbnail || 'img/apt.jpg'})` }"></div>
                    </div>
                    <!-- col-md-6 col-sm-12 -->

                    <div class="col-md-6 col-sm-12">
                        <div class="property-schedule-tour-form-wrap">
                            <h2>Schedule a Tour</h2>

                            <!-- Alerts -->
                            <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
                                {{ errorMessage }}
                                <button type="button" class="close" @click="errorMessage = ''" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div v-if="successMessage" class="alert alert-success alert-dismissible fade show"
                                role="alert">
                                {{ successMessage }}
                                <button type="button" class="close" @click="successMessage = ''" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <!-- Days selector -->
                            <div class="property-schedule-tour-day-form">
                                <div class="tour-day-form-slide-arrow prev" @click="prevDays"
                                    :class="{ disabled: startIndex === 0 }">
                                    <i class="houzez-icon icon-arrow-left-1"></i>
                                </div>

                                <div class="property-schedule-tour-day-form-slide-wrap" style="overflow: hidden;">
                                    <div class="property-schedule-tour-day-form-slide start" :style="slideStyle">
                                        <div class="form-group" v-for="(day, index) in days"
                                            :key="day.fullDate.toISOString()">
                                            <label class="control control--radio">
                                                <input type="radio" :checked="selectedDate.toDateString() ===
                                                    day.fullDate.toDateString()
                                                    " @change="selectedDate = day.fullDate" />
                                                <span class="control__indicator">
                                                    {{ day.dayName }}<br />
                                                    <span class="control__indicator_day">
                                                        {{ day.dayNumber }}
                                                    </span><br />
                                                    {{ day.monthName }}
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="tour-day-form-slide-arrow next" @click="nextDays"
                                    :class="{ disabled: startIndex >= maxIndex }">
                                    <i class="houzez-icon icon-arrow-right-1"></i>
                                </div>
                            </div>

                            <!-- Tour Type -->
                            <div class="property-schedule-tour-form-title">Tour type</div>

                            <div class="property-schedule-tour-type-form d-flex justify-content-between">
                                <div class="form-group">
                                    <label class="control control--radio">
                                        <input type="radio" value="In Person" v-model="form.tour_type" checked />
                                        <span class="control__indicator">In Person</span>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="control control--radio">
                                        <input type="radio" value="Video Call" v-model="form.tour_type" />
                                        <span class="control__indicator">Video Call</span>
                                    </label>
                                </div>
                            </div>

                            <!-- Time input -->
                            <div class="form-group">
                                <input type="time" class="form-control" v-model="form.time"
                                    placeholder="Choose a time" />
                                <!-- <small v-if="errors.time" class="text-danger">{{ errors.time }}</small> -->
                            </div>

                            <!-- Name -->
                            <div class="form-group">
                                <input class="form-control" v-model="form.name" placeholder="Name" type="text" />
                                <!-- <small v-if="errors.name" class="text-danger">{{ errors.name }}</small> -->
                            </div>

                            <!-- Phone -->
                            <div class="form-group">
                                <input class="form-control" v-model="form.phone" placeholder="Phone" type="text" />
                                <!-- <small v-if="errors.phone" class="text-danger">{{ errors.phone }}</small> -->
                            </div>

                            <!-- Email -->
                            <div class="form-group">
                                <input class="form-control" v-model="form.email" placeholder="Email" type="email" />
                                <!-- <small v-if="errors.email" class="text-danger">{{ errors.email }}</small> -->
                            </div>

                            <!-- Message -->
                            <div class="form-group form-group-textarea">
                                <textarea class="form-control" v-model="form.message" rows="5"
                                    placeholder="Message"></textarea>
                            </div>

                            <!-- Terms -->
                            <div class="form-group form-group-terms">
                                <label class="control control--checkbox">
                                    <input type="checkbox" v-model="form.agreeTerms" />
                                    By submitting this form I agree to
                                    <a href="#">Terms of Use</a>
                                    <span class="control__indicator"></span>
                                </label>
                                <small v-if="errors.agreeTerms" class="text-danger">{{
                                    errors.agreeTerms
                                }}</small>
                            </div>

                            <button class="btn btn-secondary btn-full-width" @click.prevent="submitForm"
                                :disabled="loading">
                                {{ loading ? "Submitting..." : "Submit a Tour Request" }}
                            </button>
                        </div>
                        <!-- property-schedule-tour-wrap -->
                    </div>
                </div>
                <!-- row -->
            </div>
            <!-- block-content-wrap -->
        </div>
        <!-- block-wrap -->
    </div>
    <!-- property-schedule-tour-wrap -->
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useTourRequest } from "@/stores/index"; // Adjust path accordingly

const props = defineProps({
    property: Object,
});

const tourRequestStore = useTourRequest();

const days = ref([]);
const selectedDate = ref(null);
const startIndex = ref(0);
const visibleCount = 4;
const itemWidth = 90;

const slideStyle = computed(() => ({
    transform: `translateX(${-startIndex.value * itemWidth}px)`,
    transition: "transform 0.3s ease",
    display: "flex",
}));

const maxIndex = computed(() => Math.max(0, days.value.length - visibleCount));

function prevDays() {
    if (startIndex.value > 0) {
        startIndex.value -= 1;
    }
}

function nextDays() {
    if (startIndex.value < maxIndex.value) {
        startIndex.value += 1;
    }
}

function getNext8Days() {
    const generated = [];
    for (let i = 0; i < 8; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        generated.push({
            fullDate: new Date(date),
            dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
            dayNumber: date.getDate(),
            monthName: date.toLocaleDateString("en-US", { month: "short" }),
        });
    }
    return generated;
}

onMounted(() => {
    days.value = getNext8Days();
    selectedDate.value = days.value[0].fullDate;
});

// Form data
const form = ref({
    property_id: props.property?.id || null,
    tour_type: "In Person",
    time: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    agreeTerms: false,
});

const errors = ref({});
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

function validate() {
    errors.value = {};
    const fieldsWithError = [];

    if (!form.value.name) {
        errors.value.name = "Name is required.";
        fieldsWithError.push("Name");
    }
    if (!form.value.phone) {
        errors.value.phone = "Phone is required.";
        fieldsWithError.push("Phone");
    }
    if (!form.value.email) {
        errors.value.email = "Email is required.";
        fieldsWithError.push("Email");
    } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.value.email = "Email is invalid.";
        fieldsWithError.push("Email");
    }
    if (!form.value.time) {
        errors.value.time = "Time is required.";
        fieldsWithError.push("Time");
    }
    if (!form.value.agreeTerms) {
        errors.value.agreeTerms = "You must agree to the Terms of Use.";
        fieldsWithError.push("Terms");
    }

    return fieldsWithError;
}


async function submitForm() {
    errorMessage.value = "";
    successMessage.value = "";
    const invalidFields = validate();

    if (invalidFields.length > 0) {
        const fieldList = invalidFields.join(", ");
        errorMessage.value = `The field${invalidFields.length > 1 ? 's' : ''} ${fieldList} ${invalidFields.length > 1 ? 'are' : 'is'} empty.`;
        return;
    }

    loading.value = true;

    // Combine selected date and time into tour_date_time (ISO string)
    const [hours, minutes] = form.value.time.split(":");
    const dateTime = new Date(selectedDate.value);
    dateTime.setHours(parseInt(hours));
    dateTime.setMinutes(parseInt(minutes));
    dateTime.setSeconds(0);
    dateTime.setMilliseconds(0);

    const formData = {
        property_id: form.value.property_id,
        tour_type: form.value.tour_type,
        name: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        tour_date_time: dateTime.toISOString(),
        message: form.value.message,
    };

    try {
        await tourRequestStore.sendRequest(formData);
        successMessage.value =
            "Your request has been submitted. An agent will get in touch with you.";
        // Clear form after success if needed:
        form.value.time = "";
        form.value.name = "";
        form.value.phone = "";
        form.value.email = "";
        form.value.message = "";
        form.value.agreeTerms = false;
    } catch (err) {
        errorMessage.value =
            err?.data?.message || "Failed to send tour request. Please try again.";
    } finally {
        loading.value = false;
    }
}
</script>


<style scoped>
.tour-day-form-slide-arrow {
    cursor: pointer;
    user-select: none;
}

.tour-day-form-slide-arrow.disabled {
    opacity: 0.3;
    pointer-events: none;
    cursor: default;
}

.property-schedule-tour-day-form-slide {
    display: flex;
}

.property-schedule-tour-day-form-slide .form-group {
    min-width: 90px;
    margin-right: 10px;
}

.text-danger {
    font-size: 0.85em;
}
</style>

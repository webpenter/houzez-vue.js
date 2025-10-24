<template>
	<div
  id="property-schedule-tour-wrap"
  class="property-schedule-tour-wrap property-section-wrap" >
		<div class="block-wrap">
			<div class="block-title-wrap d-flex justify-content-between align-items-center">
				<h2>{{ $t('Schedule a Tour') }}</h2>
			</div>

			<div class="block-content-wrap">
				<div class="row">
					<!-- Tour Type -->
					<div class="col-md-4 col-sm-12">
						<div class="form-group">
							<label>{{ $t('Tour Type') }}</label>
							<select v-model="form.tour_type" class="form-control">
								<option>{{ $t('In Person') }}</option>
								<option>{{ $t('Video Chat') }}</option>
							</select>
						</div>
					</div>

					<!-- Date Picker -->
					<div class="col-md-4 col-sm-12">
						<div class="form-group">
							<label>{{ $t('Date') }}</label>
							<input 
              v-model="selectedDateInput"
              type="date" class="form-control" />
							<div v-if="errors.date" class="text-danger">{{ errors.date }}</div>
						</div>
					</div>

					<!-- Time -->
					<div class="col-md-4 col-sm-12">
						<div class="form-group">
							<label>{{ $t('Time') }}*</label>
							<input v-model="form.time" type="time" class="form-control" placeholder="Select a Time" />
							<div v-if="errors.time" class="text-danger">{{ errors.time }}</div>
						</div>
					</div>
				</div>

				<!-- Your Information -->
				<div class="block-title-wrap">
					<h3>{{ $t('Your Information') }}</h3>
				</div>

				<div class="row">
					<!-- Name -->
					<div class="col-md-6 col-sm-12">
						<div class="form-group">
							<label>{{ $t('Name') }}*</label>
							<input 
              v-model="form.name"
              class="form-control" :placeholder="$t('Enter your name')" type="text" />
							<div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
						</div>
					</div>

					<!-- Phone -->
					<div class="col-md-6 col-sm-12">
						<div class="form-group">
							<label>{{ $t('Phone') }}*</label>
							<input 
              v-model="form.phone"
              class="form-control" :placeholder="$t('Enter your phone number')"
								type="text" />
							<div v-if="errors.phone" class="text-danger">{{ errors.phone }}</div>
						</div>
					</div>

					<!-- Email -->
					<div class="col-md-6 col-sm-12">
						<div class="form-group">
							<label>{{ $t('Email') }}*</label>
							<input 
              v-model="form.email"
              class="form-control" :placeholder="$t('Enter your email address')"
								type="email" />
							<div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
						</div>
					</div>

					<!-- Message -->
					<div class="col-sm-12 col-xs-12">
						<div class="form-group form-group-textarea">
							<label>{{ $t('Message') }}</label>
							<textarea
              v-model="form.message"
              class="form-control" rows="5"
								:placeholder="$t('Message')"></textarea>
						</div>
					</div>

					<!-- Terms Checkbox -->
					<div class="col-sm-12 col-xs-12">
						<div class="form-check mb-3">
							<input
              id="agreeTerms"
              v-model="form.agreeTerms"
              class="form-check-input" type="checkbox" 
								 />
							<label class="form-check-label ml-4" for="agreeTerms">
								{{ $t('I agree to the Terms of Use') }}
							</label>
							<div v-if="errors.agreeTerms" class="text-danger">{{ errors.agreeTerms }}</div>
						</div>
					</div>

					<!-- Submit Button -->
					<div class="col-sm-12 col-xs-12">
						<button class="btn btn-secondary btn-sm-full-width" @click="submitForm" :disabled="loading">
							{{ loading ? $t('Submitting')+"..." : $t('Submit a Tour Request') }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTourRequest, useNotification } from "@/stores/index"; // Adjust path accordingly

const props = defineProps({
  propertyId: {
    type: [Number, String],
    required: true
  }
});

const tourRequestStore = useTourRequest();
const notificationStore = useNotification();

const days = ref([]);
const selectedDate = ref(null);
// const startIndex = ref(0);
// const visibleCount = 4;
// const itemWidth = 90;

// const slideStyle = computed(() => ({
// 	transform: `translateX(${-startIndex.value * itemWidth}px)`,
// 	transition: "transform 0.3s ease",
// 	display: "flex",
// }));

// const maxIndex = computed(() => Math.max(0, days.value.length - visibleCount));

// function prevDays() {
// 	if (startIndex.value > 0) {
// 		startIndex.value -= 1;
// 	}
// }

// function nextDays() {
// 	if (startIndex.value < maxIndex.value) {
// 		startIndex.value += 1;
// 	}
// }

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
	selectedDateInput.value = selectedDate.value.toISOString().split('T')[0];
});

// Form data
const form = ref({
	property_id: props.propertyId || null,
	tour_type: "In Person",
	time: "",
	name: "",
	phone: "",
	email: "",
	message: "",
	agreeTerms: false,
});

const selectedDateInput = ref('');

const errors = ref({});
const loading = ref(false);

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
	if (!selectedDateInput.value) {
		errors.value.date = "Date is required.";
		fieldsWithError.push("Date");
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
	const invalidFields = validate();

	if (invalidFields.length > 0) {
		const fieldList = invalidFields.join(", ");
		notificationStore.Error(`Please correct the following fields: ${fieldList}`);
		return;
	}

	loading.value = true;

	// Combine selected date and time into tour_date_time (ISO string)
	const [hours, minutes] = form.value.time.split(":");
	const dateTime = new Date(selectedDateInput.value);
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
		notificationStore.Success("Your request has been submitted. An agent will get in touch with you.");
		// Clear form after success if needed:
		form.value.time = "";
		form.value.name = "";
		form.value.phone = "";
		form.value.email = "";
		form.value.message = "";
		form.value.agreeTerms = false;
		selectedDateInput.value = "";
	} catch (err) {
		notificationStore.Error(err?.data?.message || "Failed to send tour request. Please try again.");
	} finally {
		loading.value = false;
	}
}
</script>
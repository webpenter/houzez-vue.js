<template>
  <div class="property-schedule-tour-wrap property-section-wrap" id="property-schedule-tour-wrap">
    <div class="block-wrap">
      <div class="block-title-wrap d-flex justify-content-between align-items-center">
        <h2>Schedule a Tour</h2>
      </div>

      <div class="block-content-wrap">
        <div class="row">
          <!-- Tour Type -->
          <div class="col-md-4 col-sm-12">
            <div class="form-group">
              <label>Tour Type</label>
              <select v-model="form.tour_type" class="form-control">
                <option>In Person</option>
                <option>Video Chat</option>
              </select>
            </div>
          </div>

          <!-- Date Picker -->
          <div class="col-md-4 col-sm-12">
            <div class="form-group">
              <label>Date</label>
              <input type="date" v-model="selectedDateInput" class="form-control" />
            </div>
          </div>

          <!-- Time -->
          <div class="col-md-4 col-sm-12">
            <div class="form-group">
			<label>Time</label>
			<input
				v-model="form.time"
				type="time"
				class="form-control"
				placeholder="Select a Time"
			/>
			<div v-if="errors.time" class="text-danger">{{ errors.time }}</div>
			</div>
          </div>
        </div>

        <!-- Alerts -->
        <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
          {{ errorMessage }}
          <button type="button" class="close" @click="errorMessage = ''">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div v-if="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
          {{ successMessage }}
          <button type="button" class="close" @click="successMessage = ''">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- Your Information -->
        <div class="block-title-wrap">
          <h3>Your Information</h3>
        </div>

        <div class="row">
          <!-- Name -->
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>Name</label>
              <input class="form-control" v-model="form.name" placeholder="Enter your name" type="text" />
            </div>
          </div>

          <!-- Phone -->
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>Phone</label>
              <input class="form-control" v-model="form.phone" placeholder="Enter your phone number" type="text" />
            </div>
          </div>

          <!-- Email -->
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" v-model="form.email" placeholder="Enter your email address" type="email" />
            </div>
          </div>

          <!-- Message -->
          <div class="col-sm-12 col-xs-12">
            <div class="form-group form-group-textarea">
              <label>Message</label>
              <textarea class="form-control" v-model="form.message" rows="5" placeholder="Message"></textarea>
            </div>
          </div>

          <!-- Terms Checkbox (optional) -->
          <div class="col-sm-12 col-xs-12">
            <div class="form-check mb-3">
              <input class="form-check-input " type="checkbox" v-model="form.agreeTerms" id="agreeTerms" />
              <label class="form-check-label ml-4" for="agreeTerms">
                I agree to the Terms of Use
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="col-sm-12 col-xs-12">
            <button class="btn btn-secondary btn-sm-full-width" @click="submitForm" :disabled="loading">
              {{ loading ? "Submitting..." : "Submit a Tour Request" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
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

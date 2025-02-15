<template>
  <div class="container">
    <div class="form-wrapper">
      <h2 class="title">Feedback</h2>
      <div class="form-container">
        <div class="header">
          <span class="icon">📢</span>
          <h3 class="header-title">Send your feedback</h3>
        </div>
        <p class="description">
          Your feedback and comments have played a major role in determining the features incorporated into Houzez. 
          We'd like to hear your thoughts and ideas on what we should consider for future updates.
        </p>

        <form @submit.prevent="submitFeedback">
          <div class="form-group">
            <label >Email *</label>
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
              class="input"
              required
            />
          </div>

          <div class="form-group">
            <label >Subject *</label>
            <select v-model="subject" class="input" required>
              <option disabled value="">Select</option>
              <option>Feature Request</option>
              <option>Bug Report</option>
              <option>General Feedback</option>
            </select>
          </div>

          <div class="form-group">
            <label >Message *</label>
            <textarea
              v-model="message"
              rows="4"
              placeholder="Enter your message"
              class="textarea"
              required
            ></textarea>
          </div>

          <p class="note">
            Any data submitted through this form is not stored on our servers but just sent to our 
            support email address, so that we can process your request.
          </p>

          <button type="submit" class="submit-btn">Send Feedback</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "wearewebpenter@gmail.com",
      subject: "",
      message: "",
    };
  },
  methods: {
    submitFeedback() {
      alert("Feedback sent successfully!");
      // Handle submission logic (API request or other actions)
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.form-wrapper {
  position: relative;
  left: 110px;
  width: 90%; /* Increase width */
  max-width: 900px; /* Extend maximum width */
  background: white;
  padding: 30px; /* Add more padding */
  border-radius: 10px;
  border: 1px solid #ddd;
}


.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
}

.form-container {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
}

.header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.icon {
  font-size: 20px;
  color: black; /* Speaker icon color changed to black */
}

.header-title {
  font-size: 18px;
  font-weight: bold;
}

.description {
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

.label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input,
.textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  background: transparent; /* Remove background color */
  color: black; /* Text color changed to black */
}

.textarea {
  resize: none;
}

.note {
  font-size: 12px;
  color: #777;
  margin-bottom: 16px;
}

.submit-btn {
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #0056b3;
}
</style>
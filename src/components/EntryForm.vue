<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="formData.name" type="text" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="formData.email" type="email" id="email" required />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input v-model="formData.phone" type="tel" id="phone" required />
        </div>
        <div class="form-group">
          <label for="job-title">Job Title:</label>
          <input v-model="formData.jobTitle" type="text" id="job-title" required />
        </div>
      </div>

      <div class="form-group">
        <label for="job-type">Types of Jobs:</label>
        <select v-model="formData.jobType" id="job-type" required>
          <option value="All Jobs">All Jobs</option>
          <option value="Full Time">Full Time</option>
          <option value="Half Time">Half Time</option>
          <option value="Remote">Remote</option>
          <option value="In Office">In Office</option>
        </select>
      </div>

      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea v-model="formData.comment" id="comment" rows="4"></textarea>
      </div>

      <div class="form-group">
        <label for="file-upload">Upload File :</label>
        <input type="file" id="file-upload" @change="handleFileChange" />
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        jobTitle: '',
        jobType: 'All Jobs',
        comment: '',
        file: null,
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form data:', this.formData);
    },
    handleFileChange(event) {
      this.formData.file = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
}

.form-row {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.form-group {
  flex: 1;
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select {
  width: 90%;
  max-width: 275px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

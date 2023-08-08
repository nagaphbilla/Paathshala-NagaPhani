<template>
    <div class="form">
        <h2>Application Form</h2>
        <form @submit.prevent="submitForm" class="form-container">
            <div class="form-row">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input
                        v-model="formData.name"
                        type="text"
                        id="name"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                        v-model="formData.email"
                        type="email"
                        id="email"
                        required
                    />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="phone">Phone: (+91)</label>
                    <input
                        v-model="formData.phone"
                        type="tel"
                        id="phone"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="job-title">Job Title:</label>
                    <input
                        v-model="formData.jobTitle"
                        type="text"
                        id="job-title"
                        required
                    />
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
                <textarea
                    v-model="formData.comment"
                    id="comment"
                    rows="4"
                ></textarea>
            </div>

            <button type="submit">Send Message</button>
        </form>
    </div>
</template>

<script>
import { DataStore } from "aws-amplify";
import { Applications } from "../models/index.js";
export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                phone: "",
                jobTitle: "",
                jobType: "All Jobs",
                comment: "",
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                if (this.formData.phone.length !== 10) {
                    return alert("Invalid Phone Number");
                }
                const itemData = {
                    name: this.formData.name,
                    email: this.formData.email,
                    phone_number: `+91${this.formData.phone}`,
                    job_title: this.formData.jobTitle,
                    job_type: this.formData.jobType,
                    comment: this.formData.comment,
                };

                await DataStore.save(new Applications(itemData));
                console.log("Form data:", this.formData);
                alert("Item added successfully");
                for (const key in this.formData) {
                    if (key === "jobType") {
                        this.formData[key] = "All Jobs";
                    } else {
                        this.formData[key] = "";
                    }
                }
            } catch (error) {
                console.log("error : ", error);
            }
        },
    },
};
</script>

<style scoped>
.form {
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
body {
    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
.form-container {
    background-color: white;
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

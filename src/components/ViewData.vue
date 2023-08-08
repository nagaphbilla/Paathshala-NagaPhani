<template>
    <div class="data-container">
        <h2>Applications</h2>
        <div class="data-card-container">
            <div
                v-for="(data, index) in details"
                :key="index"
                class="card"
                style="width: 18rem"
            >
                <div class="headings">
                    <label class="card-title">{{ data.name }}</label>
                    <label class="title">{{ data.job_title }}</label>
                    <label class="title">{{ data.job_type }}</label>
                </div>
                <div class="data-card">
                    <div>
                        <label class="title">Email</label>
                        <label>{{ data.email }}</label>
                    </div>
                    <div>
                        <label class="title">Phone</label>
                        <label>{{ data.phone_number }}</label>
                    </div>
                </div>
                <label>{{ data.comment }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import { DataStore } from "aws-amplify";
import { Applications } from "../models/index.js";
export default {
    data() {
        return {
            details: [],
        };
    },
    mounted() {
        this.fetch();
    },
    methods: {
        async fetch() {
            try {
                const data = await DataStore.query(Applications);
                console.log("Data : ", data);
                this.details = data;
            } catch (error) {
                console.log("error : ", error);
            }
        },
    },
};
</script>

<style scoped>
.data-container {
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

.data-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.data-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

.data-card > div {
    display: flex;
    flex: 30%;
    flex-direction: column;
    gap: 10px;
}

.card {
    display: flex;
    background-color: white;
    flex-direction: column;
    gap: 30px;
    flex: 30%;
    padding: 1.5em 0.5em 0.5em;
    text-align: center;
    border-radius: 2em;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.card-title {
    font-weight: bold;
    font-size: 2rem;
}
.title {
    font-weight: 600;
    font-size: 1rem;
}

.headings {
    display: flex;
    gap: 10px;
    flex-direction: column;
}
</style>

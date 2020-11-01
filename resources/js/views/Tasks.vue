<template>
    <div class="tasks">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <ul v-if="tasks">
            <li v-for="{ title, description, priority, type } in tasks">
                <div class="row">
                    <div class="col s12">
                    <div class="card-panel">
                        <strong>Title:</strong> {{ title }} <br>
                        <strong>Description:</strong> {{ description }} <br>
                        <strong>Priority:</strong> {{ priority }} <br>
                        <strong>Type:</strong> {{ type }}
                    </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            loading: false,
            tasks: null,
            error: null
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.error = this.tasks = null;
            this.loading = true;
            axios
                .get("/api/tasks")
                .then(response => {
                    this.tasks = console.log();
                    this.loading = false;
                    this.tasks = response.data;
                })
                .catch(error => {
                    this.loading = false;
                    this.error = error.response.data.message || error.message;
                });
        }
    }
};
</script>

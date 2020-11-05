<template>
    <div class="tasks">
        <div class="container">
            <div class="mb-5 card has-background-info-light">
                <div class="card-content level">
                    Add Tasks with Title, Description, Priority and its type
                    <button
                        @click="addNewTaskModal = true"
                        class="button is-primary"
                    >
                        + Add Task
                    </button>
                </div>
            </div>

            <div class="loading" v-if="loading">
                Loading...
            </div>

            <div v-if="error" class="error">
                {{ error }}
            </div>

            <!-- Create New Task Modal  -->
            <b-modal v-model="addNewTaskModal">
                <div class="card column is-half" style="margin: auto">
                    <div class="card-header">
                        <div class="card-header-title">
                            Create New Task
                        </div>
                    </div>
                    <div class="card-content">
                        <form @submit.prevent="addNewTask()">
                        <div class="field">
                            <label class="label">Title</label>
                            <input
                                class="input"
                                type="text"
                                name="title"
                                placeholder="Enter the title"
                                v-model="title"
                            />
                        </div>
                        <div class="field">
                            <label class="label">Description</label>
                            <input
                                class="input"
                                type="text"
                                name="description"
                                placeholder="Enter the description"
                                v-model="description"
                            />
                        </div>
                        <hr>
                    <div class="level">
                        <b-button
                            class="button is-outlined is-dark"
                            @click="addNewTaskModal = false"
                            >Cancel</b-button
                        >
                        <button type="submit" class="button is-success">Save</button>
                    </div>
                    </form>
                    </div>
                </div>
            </b-modal>

            <!-- PAGINATED TASK LIST -->
            <div class="card mb-5" v-for="task in tasks.data" :key="task.id">
                <div class="card-header">
                    <div class="card-header-title">
                        {{ task.title }}
                    </div>
                </div>
                <div class="card-content">
                    <strong>Description:</strong>
                    {{ task.description }}<br />
                    <strong>Time:</strong>
                    {{ task.created_at | formatDate }}
                </div>
                <footer class="p-2 card-footer level">
                    <div class="ml-5 level-left">
                        <b-button
                            icon-left="pen"
                            class="level-item button is-primary is-light"
                            >Edit</b-button
                        >
                        <b-button
                            icon-left="delete"
                            @click="deleteTask(task.id)"
                            class="level-item button is-danger is-light"
                            >Delete</b-button
                        >
                    </div>
                </footer>
            </div>

            <pagination
                :data="tasks"
                @pagination-change-page="fetchData"
            ></pagination>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            loading: false,
            error: null,
            isActive: true,
            addNewTaskModal: false,
            title: '',
            description: ''
        };  
    },

    created() {
        this.fetchData();
    },

    methods: {
        fetchData(page = 1) {
            this.error = this.tasks = null;
            this.loading = true;
            axios
                .get("/api/tasks?page=" + page)
                .then(response => {
                    this.tasks = console.log();
                    this.loading = false;
                    this.tasks = response.data;
                })
                .catch(error => {
                    this.loading = false;
                    this.error = error.response.data.message || error.message;
                });
        },

        addNewTask() {
            axios
            .post("/api/tasks", {
                title:this.title,
                description:this.description
            })
            .then(response => {
                this.fetchData();
            })
            this.title = null;
            this.description = null;
            this.addNewTaskModal = false;
        },

        deleteTask(id) {
            axios
            .delete('/api/tasks/' + id)
            .then(response => {
                this.fetchData();
            })
        }
    }
};
</script>

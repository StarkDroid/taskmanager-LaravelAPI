<template>
    <div class="tasks">
        <!-- Create Task Modal -->
        <div class="modal" v-bind:class="{ 'is-active': isToggle }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Create New Task</p>
                </header>
                <section class="modal-card-body">
                    <form>
                        <div class="field">
                            <label class="label">Title</label>
                            <div class="control">
                                <input
                                    class="input"
                                    type="text"
                                    placeholder="Enter your task"
                                />
                            </div>
                            <div class="field mt-4">
                                <label class="label">Description</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        placeholder="Enter the description"
                                    />
                                </div>
                            </div>
                            <div class="field mt-4">
                                <label class="label">Priority</label>
                                <div class="control">
                                    <div class="select">
                                        <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                        <option>With options</option>
                                        </select>
                                    </div>
                                </div>
                                <label class="label">Type</label>
                                <div class="control">
                                    <div class="select">
                                        <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                        <option>With options</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button" v-on:click="toggle">Cancel</button>
                </footer>
            </div>
        </div>

        <!-- NAVBAR CONTENT -->
        <section class="hero is-info">
            <div class="hero-body">
                <div class="tabs is-toggle is-fullwidth is-centered">
                    <ul>
                        <li>
                            <a href="/">
                                <span class="icon is-small"
                                    ><i class="fas fa-chart-line"></i
                                ></span>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li v-bind:class="{ 'is-active': isActive }">
                            <a href="tasks">
                                <span class="icon is-small"
                                    ><i
                                        class="fas fa-tasks"
                                        aria-hidden="true"
                                    ></i
                                ></span>
                                <span>Tasks</span>
                            </a>
                        </li>
                        <li>
                            <a href="users">
                                <span class="icon is-small"
                                    ><i
                                        class="fas fa-users"
                                        aria-hidden="true"
                                    ></i
                                ></span>
                                <span>Users</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="card mb-5">
                <div class="card-content level">
                    <h5>
                        Add Tasks with Title, Description, Priority and its type
                    </h5>
                    <div class="level-right">
                        <button class="button is-primary" v-on:click="toggle">
                            + Add Task
                        </button>
                    </div>
                </div>
            </div>

            <div class="loading" v-if="loading">
                Loading...
            </div>

            <div v-if="error" class="error">
                {{ error }}
            </div>

            <ul v-if="tasks">
                <li class="mb-5" v-for="task in tasks.data" :key="task.id">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                {{ task.title }}
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <strong>Description:</strong>
                                {{ task.description }}<br />
                                <strong>Time:</strong
                                ><time datetime="2016-1-1">
                                    {{ task.created_at | formatDate }}</time
                                >
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="#" class="card-footer-item">Edit</a>
                            <a href="#" class="card-footer-item">Delete</a>
                        </footer>
                    </div>
                </li>
            </ul>
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
            tasks: {},
            error: null,
            isActive: true,
            isToggle: null
        };
    },
    created() {
        this.fetchData();
        this.addTask();
    },
    methods: {
        toggle: function() {
            this.isToggle = !this.isToggle;
        },

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

        addTask() {
            
        }
    }
};
</script>

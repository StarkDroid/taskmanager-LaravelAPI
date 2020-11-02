<template>
    <div class="tasks">
        <!-- Create Modal -->
        <div class="modal" v-bind:class="{'is-active':isToggle}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close" v-on:click="toggle"></button>
                </header>
                <section class="modal-card-body">
                    <!-- Content ... -->
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button" v-on:click="toggle">Cancel</button>
                </footer>
            </div>
        </div>

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
                            ><i class="fas fa-tasks" aria-hidden="true"></i
                        ></span>
                        <span>Tasks</span>
                    </a>
                </li>
                <li>
                    <a href="users">
                        <span class="icon is-small"
                            ><i class="fas fa-users" aria-hidden="true"></i
                        ></span>
                        <span>Users</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="card mb-5">
            <div class="card-content level">
                <h5>Add Tasks with Title, Description, Priority and its type</h5>
                <div class="level-right">
                    <button class="button is-primary" v-on:click="toggle">+ Add Task</button>
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
            <li class="mb-5"
                v-for="{
                    title,
                    description,
                    priority,
                    type,
                    created_at
                } in tasks.data"
            >
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                         {{ title }}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                         <strong>Description:</strong> {{ description }}<br/>
                         <strong>Time:</strong><time datetime="2016-1-1"> {{ created_at | formatDate }}</time>
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
            isToggle: null,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        toggle: function(){
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
        }
    }
};
</script>

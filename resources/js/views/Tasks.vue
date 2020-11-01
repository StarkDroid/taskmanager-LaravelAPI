<template>
<div class="tabs is-toggle is-fullwidth is-centered">
            <ul>
                <li>
                    <a href="/">
                        <span class="icon is-small"
                            ><i class="fas fa-chart-line" ></i
                        ></span>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li v-bind:class="{ 'is-active':isActive }">
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
    <div class="tasks">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>
    
        <ul v-if="tasks">
            <li v-for="{ title, description, priority, type, created_at } in tasks.data">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    {{ title }}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    {{ description }} <br>
                    <time datetime="2016-1-1">{{ created_at }}</time>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
        </li>
        </ul>
        <pagination :data="tasks" @pagination-change-page="fetchData"></pagination>

        <!-- <ul v-if="tasks">
            <li v-for="{ title, description, priority, type } in tasks">
                
                        <strong>Title:</strong> {{ title }} <br>
                        <strong>Description:</strong> {{ description }} <br>
                        <strong>Priority:</strong> {{ priority }} <br>
                        <strong>Type:</strong> {{ type }}
                    
            </li>
        </ul> -->
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
            isActive:true
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
                .get('/api/tasks?page=' + page)
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

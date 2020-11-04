<template>
    <div class="tasks">
        <div class="container">
            <div class="mb-5 card">
                <div class="card-content">
                        Add Tasks with Title, Description, Priority and its type
                        <button @click="addNewTask = true" class="button is-primary is-pulled-right">
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
            <b-modal v-model="addNewTask">
                <form @submit.prevent="addTask">
                <div class="card">
                <div class="card-header">
                  <div class="card-header-title">  
                      Create New Task
                  </div>
                </div>
                    <div class="card-content">        
                        <div class="field">
                            <label class="label">Title</label>
                            <input class="input" type="text" value="title" placeholder="Enter the title" v-model="tasks.title">
                        </div>
                        <div class="field">
                            <label class="label">Description</label>
                            <input class="input" type="text" value="description" placeholder="Enter the description" v-model="tasks.description">
                        </div>
                    </div>
                <footer class="p-2 card-footer level">
                    <b-button class="ml-3 button is-outlined is-dark">Cancel</b-button>
                    <b-button type="submit" value="submit" class="mr-3 button is-success">Save</b-button>
                </footer>
                </div>
                </form>
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
                            <b-button icon-left="pen" class="level-item button is-primary is-light">Edit</b-button>
                            <b-button  icon-left="delete" class="level-item button is-danger is-light">Delete</b-button>
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
            isToggle: null,
            addNewTask: false

        };

        tasks: {
            id = null,
            title = '',
            description = ''
        }
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
            axios
            .post("/api/tasks", tasks)
            .catch(function (error) {
                console.log(error);
            });
        }
    }
};
</script>

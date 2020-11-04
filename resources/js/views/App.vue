<template>
    <div>
        <b-navbar :centered="true" :shadow="true" class="is-info">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/StarkDroid/taskmanager-LaravelAPI/master/public/imi-logo.png"
                >
                 <strong class="ml-1">IMI-Clone</strong>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Dashboard
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/projects' }">
                Projects
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/tasks' }">
                Tasks
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a href="users" class="button is-light">
                        <strong>Users</strong>
                    </a>
                    <a href="profile" class="button is-warning">
                        <strong>Profile</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            shadow: true
        }
    }
};
</script>

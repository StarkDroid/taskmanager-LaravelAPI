<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="/">IMI-Clone</b-navbar-brand>
        <b-navbar-toggle target="mobile-view" is-nav></b-navbar-toggle>
        <b-collapse id="mobile-view" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/" exact exact-active-class="active">Dashboard</b-nav-item>
                <b-nav-item to="projects" exact exact-active-class="active">Projects</b-nav-item> 
                <b-nav-item to="tasks" exact exact-active-class="active">Tasks</b-nav-item> 
                <b-nav-item to="users" exact exact-active-class="active">Users</b-nav-item> 
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
};
</script>

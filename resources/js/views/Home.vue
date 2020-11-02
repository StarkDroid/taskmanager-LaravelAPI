<template>
<div class="dashboard">
        <div class="tabs is-toggle is-fullwidth is-centered">
            <ul>
                <li v-bind:class="{ 'is-active':isActive }">
                    <a href="/">
                        <span class="icon is-small"
                            ><i class="fas fa-chart-line" ></i
                        ></span>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
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
  <p>This is the homepage</p>
</div>
</template>
<script>
export default {
  data(){
    return {
      isActive: true
    }
  }
}
</script>
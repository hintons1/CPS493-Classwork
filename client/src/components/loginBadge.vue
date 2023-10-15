<script setup lang="ts">
    import { getSession, login } from '@/model/session'
    const session = getSession()

    let user: any = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
    }
    //user = null
</script>

<template>
    <div class="has-text-right" v-if="session.user">
        Welcome, {{ session.user.firstName }} {{ session.user.lastName }} <br>
        <email>
            {{ session.user.email }}
            <a class="button is-small is-light is-warning" @click.prevent = "session.user = null">
                <span class="icon">
                    <i class="fas fa-sign-out-alt"></i>
                </span>
            </a>
        </email>
    </div>
    <div class="buttons" v-else>
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <a class="button is-light" @click.prevent="login">
            Log in
        </a>
    </div>
</template>


<style scoped>

</style>
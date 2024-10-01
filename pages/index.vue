<template>
  <main
    class="flex flex-col h-svh w-svh bg-primary-white text-black font-primary justify-center dark:bg-dark-backgroundPrimary"
  >
    <!-- login form -->
    <section
      class="max-w-screen-sm w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Card>
        <TitleText :text='signup ? "Sign Up" : "Login" '  />
        <form class="flex flex-col gap-5 w-full" @submit.prevent="login">
          <FormControl type="text" placeholder="Username" v-model="username" />
          <FormControl
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <div class="flex justify-center items-center w-full">
            <Button href="/home" variant="primary" :text="signup ? 'Sign up' : 'Login'" />
          </div>
        </form>
        <p>{{ signup ? "Don't" : "Do you"}} have an account? <span @click="() => signup = !signup" class="font-bold underline cursor-pointer">{{ signup ? "Login" : "Sign up" }}</span></p>
      </Card>
    </section>
  </main>
</template>

<script setup lang="ts">

interface User {
  username: string;
  password: string;
}

function logger() {
  console.log("login");
}

const username = ref("");
const password = ref("");
const signup = ref(false); // false for login, true for signup

const login = () => {};

class User implements User {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

function toDarkMode() {
  const HTML = document.querySelector("html");
  if (HTML!.classList.contains("dark")) {
    HTML!.classList.remove("dark");
  } else {
    HTML!.classList.add("dark");
  }
}

const user = new User(username.value, password.value);
</script>

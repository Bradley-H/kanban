<template>
    <!-- login form -->
     <Main>

    <section
      class="max-w-screen-sm w-full absolute p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Card>
        <TitleText class="text-center" :text="signup ? 'Sign Up' : 'Login'" />
        <form class="flex flex-col gap-5 w-full" @submit.prevent="login">
          <FormControl type="text" placeholder="Username" v-model="username" />
          <FormControl
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <div class="flex justify-center items-center w-full">
            <Button
              href="/home"
              variant="primary"
              :text="signup ? 'Sign up' : 'Login'"
            />
          </div>
        </form>
        <p class="text-center">
          {{ signup ? "Don't" : "Do you" }} have an account?
          <span
            @click="() => (signup = !signup)"
            class="font-bold underline cursor-pointer"
            >{{ signup ? "Login" : "Sign up" }}</span
          >
        </p>

        <div class="flex items-center justify-center">
          <ButtonToggleDarkModeButton />
        </div>
      </Card>
    </section>
          
  </Main>
</template>

<script setup lang="ts">


const username = ref("");
const password = ref("");
const signup = ref(false); // false for login, true for signup

const login = () => {};

interface User {
  username: string;
  password: string;
}
class User implements User {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
function makeNewUser() {
  const user = new User(username.value, password.value);
}
</script>

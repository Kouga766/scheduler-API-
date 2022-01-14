<template>
  <v-app>
    <v-card>
    <v-card-title>
      <h1 class="display-1">ログイン</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="ユーザ名" />
        <v-text-field label="パスワード" />
      </v-form>
    </v-card-text>
  </v-card>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

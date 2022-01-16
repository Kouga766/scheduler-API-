<template>
  <v-app>
  <v-card width="400px" class="mx-auto mt-5">
    <v-img
                :src="require('./assets/favicon.png')"
                class="my-3"
                contain
                height="200"
    />
   <v-tabs fixed-tabs
      background-color="#cd853f"
      dark>
     <v-tab>
          <v-icon left>
            mdi-login
          </v-icon>
          ログイン
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-account-plus
          </v-icon>
          新規登録
        </v-tab>
      <v-tab-item>


          <v-card-title>
            <h1 class="display-1">ログイン</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" />
              <v-text-field prepend-icon="mdi-lock" append-icon="mdi-eye-off" label="パスワード" />
              <v-card-actions class="justify-center">
                <v-btn class="info">ログイン</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>

      </v-tab-item>

      <v-tab-item>


          <v-card-title>
            <h1 class="display-1">新規登録</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" />
              <v-text-field prepend-icon="mdi-email" label="メールアドレス" />
              <v-text-field prepend-icon="mdi-lock" append-icon="mdi-eye-off" label="パスワード" />
              <v-text-field prepend-icon="mdi-lock" append-icon="mdi-eye-off" label="パスワード（再）" />
              <v-card-actions class="justify-center">
                <v-btn class="info">ログイン</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>

      </v-tab-item>
    </v-tabs>
  </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

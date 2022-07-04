<template>
  <v-container>
    <div class="mainColumn">
      <v-card :loading="loading" class="mx-auto" >
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <v-img class="white--text align-end" height="200px"
          src="https://cdn.vox-cdn.com/thumbor/8KxJUDwQsz5Qy-_HzZjtCTRR5PU=/0x164:1440x884/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/22310830/NmJgg.jpg">
          <v-card-title>2 btc in usd</v-card-title>
        </v-img>
        <v-card-title>Please enter</v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="model" :rules="get_number" label="BTC" clearable></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" type="submit" :disabled="!valid" @click="count">
            Расчитать
          </v-btn>
          <v-spacer></v-spacer>
          <v-card-title>Курс: {{ $store.getters.GET_BTC }} $</v-card-title>
        </v-card-actions>
        <v-divider class="mx-4"></v-divider>

        <v-card-title>Итого</v-card-title>

        <div class="couterSum">{{ total.toFixed(2) || 0 }} $</div>


      </v-card>
      <router-link to="/list" tag="div">
        <v-btn color="orange" class="my-4" rounded dark>
          Top 10 Coins
          <v-icon right>
            mdi-arrow-up-bold
          </v-icon>
        </v-btn>
      </router-link>
    </div>


  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    model: 0,
    total: 0,
    valid: true,
    get_number: [
      (v) => !!v || "Обязательно поле!",
      (v) => /^\d+$/.test(v) || "Только цифры!",
    ],
  }),

  methods: {
    count() {
      this.$refs.form.validate();
      this.total = this.$store.getters.GET_BTC * this.model
    },
  },
}
</script>
<style lang="scss">
.couterSum {
  font-size: 30px;
  text-align: center;
  padding: 40px 0;
}

</style>
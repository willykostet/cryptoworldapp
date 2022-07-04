<template>
  <v-app>
    <v-app-bar app color="orange" dark>
      <router-link to="/" tag="div" class="toHome">
        Crypto Converter
      </router-link>

      <v-spacer></v-spacer>
      <router-link to="/list">
        <v-btn icon>
          <v-icon>mdi-bitcoin</v-icon>
        </v-btn>
      </router-link>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  created() {
    this.initialize();
  },
  data: () => ({
    currRub: ''
  }),
  methods: {
    async initialize() {
      await axios.get('https://www.blockchain.com/ru/ticker').then((el) => {
        let data = el.data
        this.currRub = data['RUB'].last / data['USD'].last
        this.$store.commit("SET_BTC", data['USD'].last);
      })
      this.$store.commit("SET_CURRUB", +this.currRub.toFixed(2));
    },
  },
};
</script>
<style lang="scss">
a:link {
  text-decoration: none;
  color: white;
}
.toHome{
  cursor: pointer;
}
.mainColumn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
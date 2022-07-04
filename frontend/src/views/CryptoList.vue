<template>
  <v-container class="about">
    <div class="mainColumn">
      <v-card class="mx-auto my-12" max-width="774">
        <v-card-title>
          Coin List
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
          </v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" hide-default-footer align-center :items="coinList" :search="search">
          <template v-slot:[`item.id`]="{ item }">
            {{ item.id + 1 }}
          </template>
          <template v-slot:[`item.coin`]="{ item }">
            <v-chip pill>
              <v-avatar left>
                <v-img :src="imageLink(item.icon)"></v-img>
              </v-avatar>
              {{ item.coin }}
            </v-chip>
          </template>
          <template v-slot:[`item.usd`]="{ item }">
            <v-chip class="ma-2" color="green" text-color="white">
              <v-icon left>
                mdi-currency-usd
              </v-icon>
              <span>{{ shoter(item.usd) }}</span>
            </v-chip>

          </template>
          <template v-slot:[`item.rub`]="{ item }">
            <v-chip class="ma-2" color="orange" text-color="white">
              {{ shoter(item.rub + (item.usd * $store.getters.GET_CURRUB)) }}
              <v-icon right small>
                mdi-currency-rub
              </v-icon>
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
      <router-link to="/" tag="div">
        <v-btn color="red" rounded dark>
          Converter
          <v-icon right>
            mdi-currency-btc
          </v-icon>
        </v-btn>
      </router-link>
    </div>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: '#',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        { text: 'Coin', value: 'coin' },
        { text: 'USD', value: 'usd' },
        { text: 'Rub', value: 'rub' },
      ],
      coinList: [

      ],
      arrCon: [
        {
          name: 'bitcoin',
          img: 'bitcoin.webp'
        },
        {
          name: 'ethereum',
          img: 'ethereum.webp'
        }, {
          name: 'cardano',
          img: 'cardano.webp'
        }, {
          name: 'ripple',
          img: 'ripple.webp'
        }, {
          name: 'solana',
          img: 'solana.webp'
        }, {
          name: 'dogecoin',
          img: 'dogecoin.webp'
        }, {
          name: 'polkadot',
          img: 'polkadot.webp'
        }, {
          name: 'shiba-inu',
          img: 'shiba.webp'
        }, {
          name: 'matic-network',
          img: 'matic.webp'
        }, {
          name: 'litecoin',
          img: 'litecoin.webp'
        },
      ],
    }
  },
  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      await this.arrCon.forEach((element, id) => {
        let data = {
          icon: element.img,
          id: id,
          coin: 0,
          usd: 0,
          rub: 0,
        }
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${element.name}&vs_currencies=usd`).then((el) => {
          let obj = Object.keys(el.data)
          data.coin = obj[0]
          data.usd = el.data[obj[0]].usd
        })
        this.coinList.push(data)
      });

    },
    imageLink(url) {
      return require(`@/assets/${url}`)
    },
    shoter(str) {
      let st = str.toFixed(2);
      return st
    }
  },
}
</script>
<style lang="scss">
.upperCase {
  text-transform: capitalize;
}
</style>
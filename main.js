const app = Vue.createApp({
  data: () => ({
    list: [
      'ダンス',
      'カジノ',
      'ラップ',
    ],
    generatedName: '',
    randomNum_2:4,
    val: '',
  }),
  computed: {
    randomNum_1: function() {
      return Math.floor(Math.random() * this.list.length)
    },
    // num: Math.floor(Math.random() * this.list.length),
    // generate: function() {
        // generatedName = `${this.list[num]}, ${this.list[num]}`
      // }
    },
  methods: {
    generate: function() {
      let x = Math.floor(Math.random() * this.list.length);
      let y = Math.floor(Math.random() * this.list.length);
      this.val = this.list[x] + this.list[y]},
  },
}).mount('#app')
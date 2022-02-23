Vue.createApp({
    data() {
        return {
            title: 'Carrinho Vazio',
            message: 'Hello Vue!',
            number: 0,
            products: [
                {
                    title: "Filme 1",
                    desc: "Filme 1 descrição",
                    image: './assets/filme01.jpg',
                    stars: 5
                },
                {
                    title: "Filme 12",
                    desc: "Filme 2 descrição",
                    image: './assets/filme02.jpg',
                    stars: 5
                }
            ],
            cart: []
        }
    },
    methods:{
        addCart(product){
            this.cart.push(product)
        },
        inCart(product) {
            return this.cart.indexOf(product) != -1
        },
        removeCart(product){
            this.cart = this.cart.filter((prod, index) => product != prod)
        }
    }
}).mount('#app')

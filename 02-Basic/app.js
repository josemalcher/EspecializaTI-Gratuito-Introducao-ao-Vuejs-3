const myApp = {
    data() {
        return {
            // bgColor: '#fff',
            // textColor: '#000',
            title: 'carrinho vazio',
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
            cart: [],
            styles: {
                backgroundColor: '#000',
                color: '#fff'
            },
            themeBlack: true

        }
    },
    computed:{
        titleUp(){
            return this.title.toUpperCase()
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
        },
        thogleTheme(){
            this.themeBlack = !this.themeBlack
            if (this.themeBlack) {
                this.styles.backgroundColor = '#000'
                this.styles.color = '#fff'
            }else{
                this.styles.backgroundColor = '#fff'
                this.styles.color = '#000'
            }
        }
    }
}

const app = Vue.createApp(myApp)

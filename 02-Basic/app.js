Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            product: {
                title: "Filme 1",
                desc: "Filme 1 descrição",
                image: './assets/filme01.jpg',
                stars: 5
            },
            product2: {
                title: "Filme 12",
                desc: "Filme 2 descrição",
                image: './assets/filme02.jpg',
                stars: 5
            },
            number: 0
        }
    }
}).mount('#app')

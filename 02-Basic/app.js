Vue.createApp({
    data() {
        return {
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
            ]
        }
    }
}).mount('#app')

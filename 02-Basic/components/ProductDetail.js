const productDetail = {
    template:`
        <p>{{product.title}}</p>
        <img style="height: 200px" v-bind:src="product.image">
        <p><strong v-if="product.stars >= 5">{{product.stars}}</strong></p>
        <button
            @click.prevent="addCart(product)"
            :disabled="productInCart"
            :class="['color',{'button-disabled' : productInCart}]"
            >
            Adicionar
        </button>
    `,
    // props: ['product', 'productInCart'],
    props: {
        product: {
            type: Object,
            required: true
        },
        productInCart:{
            type: Boolean,
            required: true
        }
    },
    data(){
        return{
            exemple: 123
        }
    },
    methods: {
        addCart(product) {
            console.log('add cart in components')
        },
    }
}

app.component('product-detail', productDetail)

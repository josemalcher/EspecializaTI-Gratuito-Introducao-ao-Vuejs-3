const exempleForm = {
    template: `
    <form action="#" method="post" @submit.prevent="saveData">
    <div>
        <label for="name">Nome:</label>
        <input v-model="name" type="text" id="name" />
    </div>
    <div>
        <label for="mail">E-mail:</label>
        <input v-model="email" type="email" id="mail" />
    </div>
    <div>
        <label for="msg">Mensagem:</label>
        <textarea id="msg">{{mensagem}}</textarea>
    </div>
    <div class="button">
        <button type="submit">Enviar sua mensagem</button>
    </div>
</form>
    `,

    data(){
        return{
            name: "Jose",
            email: 'contato@email.com',
            mensagem: 'Mensagem de teste',
        }
    },
    methods:{
        saveData(){
            console.log(this.name)
            console.log(this.email)
            console.log(this.mensagem)
        }
    }
}
app.component('example-form', exempleForm)
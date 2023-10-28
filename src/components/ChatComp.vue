<template>
    <div class="container">
        <div v-if="username">
            <div class="chat_text">
                <h1>чат</h1>
            </div>
            <div class="chat">
                <div class="text" v-for="message in messages" :key="message.id">
                    <p> {{ message.user }}: {{ message.text }}</p>
                    <button v-show="message.user == username" @click="deleteMessage(message.id)" class="borders">Удалить</button>
                </div>
                <div v-show="emptyMsg" class="empty">
                    Сообщений пока нет
                </div>
            </div>
            <div class="inputs">
                <input v-model="newMessage" placeholder="сообщение" @keyup.enter="sendMessage" class="borders">
                <button @click="sendMessage" class="borders">Отправить</button>
            </div>
        </div>
        <div v-else class="alert">
            <div class="inputs">
                <h5>Требуется авторизация: <router-link :to="{name: 'Home'}" class="link">Войти</router-link></h5>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'ChatPage',
    data() {
        return{
            messages: [],
            newMessage: '',
            emptyInput: false,
            emptyMsg: true,
            deleteBtn: false,
            disabled: ref(false),
            username: localStorage.getItem('username')
        }
    },
    computed() {
        localStorage.setItem('username', this.$route.query.username)
    },
    methods: {
        sendMessage() {
            if (!this.username) {
                this.username = '?'
            }
            if(this.newMessage !== '') {
                this.emptyMsg = false
                console.log('you entered message: ', this.newMessage)
                this.messages.push({
                    id: new Date().getTime(),
                    text: this.newMessage,
                    user: this.username,
                })
                this.saveChatRecords()
                this.newMessage = ''
                this.deleteBtn = true
                this.emptyInput = false
            } else {
                this.emptyInput = true
            }
        },
        deleteMessage(id) {
            const records = JSON.parse(localStorage.getItem('messages'))
            const filterRecords = records.filter((el) =>el.id !== id)
            localStorage.setItem('messages', JSON.stringify(filterRecords))
            this.loadChatRecords()
        },
        saveChatRecords() {
            localStorage.setItem('messages', JSON.stringify(this.messages))
        },
        loadChatRecords() {
            this.emptyMsg = true
            let records = JSON.parse(localStorage.getItem('messages'))
            if (records) {
                this.messages = records
                this.emptyMsg = false
            }
        },
        scrollToEnd() {
            const chat = document.querySelector('.chat')
            const scrollHeight = chat.scrollHeight;
            chat.scrollTop = scrollHeight
        },
        warnDisabled() {
            this.disabled.value = true
            setTimeout(() => {
                this.disabled.value = false
            }, 1500)
        }
    },
    created() {
        this.loadChatRecords()
    },
    updated() {
        this.scrollToEnd()
    }
}


</script>

<style scoped>
h1{
    color: rgba(255, 255, 255, 0.8);
    width: 100%;
    text-align: center;
    margin-top: 6px;
}
.text, .link, h5{
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
    font-style: normal;
}
.text{
    display: flex;
    align-items: center;
    justify-content: left;
    min-height: 18px;
    margin: 8px;
}
.text > p{
    width: 70%;
}
.link{
    text-decoration: underline;
}
.chat{
    width: 400px;
    height: 550px;
    box-shadow: 0 0 10px black;

    border-radius: 50px;
    background-color: rgba(0,0,0, .3);
    color: black;
    font-weight: 20px;
    padding: 16px;
    overflow-y: scroll;
    overflow-wrap: anywhere;
}
.chat_text {
    width: 400px;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 50px;
    
    background-color: rgba(0,0,0, .3);
    color: black;
    font-weight: 20px;
    padding: 16px;
}
.chat::-webkit-scrollbar{
    display: none;
}
.empty{
    color: rgba(255, 255, 255, 0.8);
    font-style: italic;
    text-align: center;
    margin: auto;
}
input {
    color: rgba(255, 255, 255, 0.8);
    height: 24px;
    padding: 0 10px 0 10px;
    font-size: 15px;
    transition: all 0.4s ease;
    font-weight: 400;
    box-sizing:content-box;
    border-radius: 12px 12px;
    background: transparent;
    font-family: Comfortaa, Avenir, Helvetica, Arial, sans-serif;
    outline: none;
}
input:focus{
    border: 1px solid rgba(0,0,0, .3);
    outline: none;
}
input::placeholder{
    color: rgba(255, 255, 255, 0.6);
}
.borders{
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.8);
}
button{
    font-family: Comfortaa;
    margin-left: 6px;
    font-size: 14.5px;
    height: 24px;
    padding: 0 10px 0 10px;
    transition: all 0.5s ease;
    box-sizing: border-box;
    border-radius: 12px 12px;
    cursor: pointer;
    width: 30%;
    background: transparent;
}
.alert{
    padding: 30px;
}
.container{
    height: 500px;
    width: 500px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inputs{
    padding: 16px;
    margin-top: 14px;
    width: 400px;
    height: 40px;
    box-shadow: 0 0 10px black;

    border-radius: 50px;
    background-color: rgba(0,0,0, .3);
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>
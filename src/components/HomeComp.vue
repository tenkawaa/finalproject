<template>
    <div class="container">
        <div v-if="isAuthenticated" class="signup">
            <div>Добро пожаловать, {{ username }}!</div>
            <router-link :to="{name: 'Chat'}" class="link"><button class="borders logout">Перейти в чат</button></router-link>
            <button @click="logout" class="borders logout">Выйти</button>
        </div>
        <div v-else class="signup">
            <h3>Авторизация</h3>

            <label>Введите имя</label>
            <div>
                <input v-model="username" type="text" @keyup.enter="login" class="borders"/>
                <button @click="login" class="borders">Войти</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
        return {
            isAuthenticated: false,
            username: '',
        }
    },
    methods: {
        login() {
            if(this.username != '') {
                console.log('You entered as', this.username)
                this.isAuthenticated = true
                localStorage.setItem('username', this.username)
                localStorage.setItem('isAuthenticated', this.isAuthenticated)
                this.$router.push({
                    name: 'Chat',
                    query: {username: this.username}
                })
            } else {
                console.log('please, enter your name')
            }
        },
        logout() {
            this.isAuthenticated = false
            this.username = ''
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('username')
        }
    },
    created() {
        if(localStorage.getItem('isAuthenticated')) {
            this.isAuthenticated = true
            this.username = localStorage.getItem('username')
        }
    }
}
</script>

<style scoped>
.container{
    box-shadow: 0 0 10px black;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    border-radius: 60px;
    height: 160px;
    width: 360px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, .3);
}
label {
    margin-right: 4px;
}
button {
    font-family: Comfortaa;
    margin-left: 6px;
    font-size: 15px;
    height: 24px;
    padding: 0 10px 0 10px;
    transition: all 0.5s ease;
    box-sizing: border-box;
    border-radius: 12px 12px;
    cursor: pointer;
    background: transparent;
}
input{
    height: 24px;
    padding: 0 10px 0 10px;
    margin-top: 6px;
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
.signup{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.logout{
    margin-top: 16px;
}
.borders{
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.8);
}
h3{
    margin: 10px;
    font-weight: 400;
}
hr{
    width: 90%;
}
</style>
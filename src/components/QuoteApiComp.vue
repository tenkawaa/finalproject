<template>
    <div class="container">
        <h1 v-if="result">Я думаю {{ result }}</h1>
        <div class="input">
            <input placeholder="вопрос" class="borders">
        </div>

        <div class="button">
            <button @click="getQuote">Да или нет?</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuoteApi',
    data() {
        return{
            result: 0,
        }
    },
    methods: {
        getQuote () {
            const url = "https://yesno.wtf/api"
            const options = {
                method: "GET",
            }
            fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                if (res.answer == "yes") {
                    this.result = "да"                    
                }

                else if (res.answer == "no") {
                    this.result = "нет"
                }

                else {
                    this.result = res.answer
                }

            })
        }
        
    },
}
</script>

<style scoped>

button{
    color: rgba(255, 255, 255, 0.8);
    font-family: Comfortaa;
    margin-left: 6px;
    font-size: 14.5px;
    height: 24px;
    
    padding: 0 10px 0 10px;
    transition: all 0.5s ease;
    box-sizing: border-box;
    border-radius: 12px 12px;
    cursor: pointer;
    width: 75%;
    background: transparent;
}
.container{
    height: 240px;
    width: 300px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px black;

    border-radius: 50px;
    background-color: rgba(0,0,0, .3);
    color: rgba(255, 255, 255, 0.8);
}
.input{
    padding: 16px;
    margin-top: 14px;
    width: 200px;
    height: 20px;
    border-radius: 50px;

    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

}


.button{
    padding: 16px;
    margin-top: 14px;
    width: 200px;
    height: 10px;
    border-radius: 50px;

    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

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

</style>
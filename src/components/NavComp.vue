<template>
    <div class="container">
        <nav>
            <router-link to="/" class="link">Главная страница</router-link>
            <router-link to="/chat" class="link">Чат</router-link>
            <router-link to="/quote" class="link">Api</router-link>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'NavComp',
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    box-shadow: 0 1px 5px black;
}
nav {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.link{
    color: rgba(255, 255, 255, 0.7);
    font-style: normal;
    text-decoration: none;
    width: 15%;
    font-size: 18px;
    transition: all 0.4s ease;
}
.link:hover{
    color: rgba(255, 255, 255, 1);
}
</style>
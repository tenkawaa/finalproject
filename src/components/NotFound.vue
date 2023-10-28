<template>
    <div class="container">
        <h3>Ошибка 404</h3>
        <p>страница не найдена :/</p>
    </div>
</template>

<script>
export default{
    name: 'NotFoundPage',
}
</script>

<style scoped>
p {
    font-size: 24px;
}
.container{
    margin: auto;
    box-shadow: 0 0 10px black;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    border-radius: 50px;
    height: 200px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0, .3);
}
</style>
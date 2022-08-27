<template>
<div class="my_div">
<img src="https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg" alt="">
  <p @click="changeColor" :style="{backgroundColor:color}">这是一只孤独的狗狗</p>
</div>
  
</template>

<script>
export default {
data(){
    return{
        colorArr:["red","green","blue","yellow","pink","purple"],
        color:""
    
    }
},
methods:{
    changeColor(){
        this.color= this.colorArr[Math.floor(Math.random()*this.colorArr.length)]
    }
}
}
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
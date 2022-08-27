<template>
  <div class="my_div">
      <img :src="dogImgUrl">
       <p  @click="changeColor" :style="{backgroundColor:color}">{{dogName}}</p>
  </div>
</template>

<script>

export default {
props:["dogImgUrl","dogName"],
data(){
    return{
         colorArr:["red","green","blue","yellow","pink","purple"],
         color:"",
    }
},
methods:{
    changeColor(){
        this.color= this.colorArr[Math.floor(Math.random()*this.colorArr.length)]
        this.$emit("likedogs",this.dogName)
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
<template>
  <div>
      <span>{{obj['shopName']}}</span>
      <span><button @click="add">+</button>{{obj['count']}}<button @click="sub">-</button></span>
  </div>
</template>

<script>
export default {
    props:["obj"],

methods:{
    add(){
        
       this.obj['count']++
    },
    sub(){
        
       this.obj['count']= this.obj['count']<=0?0:--this.obj['count']
    }
},

}
</script>

<style>

</style>
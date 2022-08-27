<template>
  <div>
          <input type="number" v-model.number="obj['count']">
          <span>{{obj['goodsName']}}</span>
          <span>{{obj['count']===0 ?'卖光了':''}}</span>
  </div>
</template>

<script>
export default {
props:["obj"],

}
</script>

<style>
span{
   padding:5px;
}
</style>
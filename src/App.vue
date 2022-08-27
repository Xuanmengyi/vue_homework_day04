<template>
  <div>
    <!-- <my-dog /> -->
    <!-- <my-dogs v-for="(item,index) in num" :key="index"></my-dogs> -->
    <!-- <sale-dogs
      v-for="(item, index) in list"
      :key="index"
      :dogImgUrl="item.dogImgUrl"
      :dogName="item.dogName"
      @likedogs="fn"
    ></sale-dogs>
    <div>您喜欢的狗如下:
    <ul>
      <li v-for="(item,index) in dogs" :key="index">{{item}}</li>
    </ul>
    </div> -->

    <!-- 卖完了 -->
    <!-- <table>
    <tr v-for="(item,index) in goodsArr" 
  :key="index" >
<sale-fruit 
:obj="item"
  :index="index"
  :goodsName="item.goodsName"></sale-fruit>
    </tr>
  </table>
  <div>All Number:{{sum}}</div> -->
 <p>商品清单如下:</p>
 <div v-for="(item,index) in foods" :key="index">
   <span>{{item.shopName}}</span>
   <span>{{item.price}}元/份</span>
 </div>
 <p>请选择购买的数量</p>
  <buyDelious v-for="(item,index) in foods" :key="index" 
  :obj="item" 
  :index="index"
  :shopName="item.shopName"
  :price="item.price"
  :count="item.count"
  ></buyDelious>
  <p>总价为:{{sum}}</p>
  </div>
</template>

<script>
//import myDog from '@/components/孤独的小狗狗.vue'
//import myDogs from '@/components/点击文字变色.vue'
//import saleDogs from "@/components/卖狗.vue";
//import saleFruit from '@/components/卖完了.vue'
import buyDelious from '@/components/买点好吃的.vue'
export default {
  data() {
    return {
      // num:6,

      //喜欢的小狗
      // list: [
      //   {
      //     dogImgUrl:
      //       "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
      //     dogName: "博美",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1224576619,1307855467&fm=26&gp=0.jpg",
      //     dogName: "泰迪",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2967740259,1518632757&fm=26&gp=0.jpg",
      //     dogName: "金毛",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
      //     dogName: "哈士奇",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563813435580&di=946902d419c3643e33a0c9113fc8d780&imgtype=0&src=http%3A%2F%2Fvpic.video.qq.com%2F3388556%2Fd0522aynh3x_ori_3.jpg",
      //     dogName: "阿拉斯加",
      //   },
      //   {
      //     dogImgUrl:
      //       "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563813454815&di=ecdd2ebf479568453d704dffacdfa12c&imgtype=0&src=http%3A%2F%2Fwww.officedoyen.com%2Fuploads%2Fallimg%2F150408%2F1-15040Q10J5B0.jpg",
      //     dogName: "萨摩耶",
      //   },
      // ],
      // dogs:[],

      //       goodsArr: [
      //     {
      //         count: 0,
      //         goodsName: "Watermelon"
      //     }, {
      //         count: 0,
      //         goodsName: "Banana"
      //     }, {
      //         count: 0,
      //         goodsName: "Orange"
      //     }, {
      //         count: 0,
      //         goodsName: "Pineapple"
      //     }, {
      //         count: 0,
      //         goodsName: "Strawberry"
      //     }
      // ],

      foods: [
        {
          shopName: "可比克薯片",
          price: 5.5,
          count: 0,
        },
        {
          shopName: "草莓酱",
          price: 3.5,
          count: 0,
        },
        {
          shopName: "红烧肉",
          price: 55,
          count: 0,
        },
        {
          shopName: "方便面",
          price: 12,
          count: 0,
        },
      ],
    };
  },
  components: {
    //myDog,
    //myDogs,
    //saleDogs,
    //saleFruit,
    buyDelious
  },
  methods: {
    // fn(dogName){
    //  this.dogs.push(dogName)
    // }
  },
  computed: {
    //卖完了
    // sum(){
    //   return this.goodsArr.reduce((prev,cur)=>prev+=cur.count,0)
    // }

    //买点好吃的
    sum(){
      return this.foods.reduce((prev,cur)=>prev+=cur.count*cur.price,0)
    }
  },
};
</script>

<style>
div {
  width: 800px;
}
</style>
<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="gender">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addOrEdit">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
      name: "",
      age: 0,
      gender: "",
      //状态0是添加，1是修改
      status: 0,
      nowIndex: -1,
    };
  },
  methods: {
    addOrEdit() {
      if (this.name === "" || this.age == "" || this.gender === "") {
        return alert("不能输入空信息");
      }
      if (this.status === 0) {
        this.arr.push({
          name: this.name,
          age: this.age,
          gender: this.gender,
        });
        (this.name = ""), (this.age = 0), (this.gender = "");
      } else if (this.status === 1) {
        this.arr[this.nowIndex].name = this.name;
        this.arr[this.nowIndex].age = this.age;
        this.arr[this.nowIndex].gender = this.gender;
        (this.name = ""), (this.age = 0), (this.gender = "");
        this.status = 0;
      }
    },
    edit(index) {
      this.status = 1;
      this.name = this.arr[index].name;
      this.age = this.arr[index].age;
      this.gender = this.arr[index].gender;
      this.nowIndex = index;
    },
    del(index){
      this.arr.splice(index,1)
    }
  },
};
</script>

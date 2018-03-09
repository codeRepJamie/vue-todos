<template>
  <div class="list-todos">  <!--菜单容器-->
    <a v-for="item in items"
       class="list-todo activeListClass list"
       :class="{'active': item.id === selectedItemId}"
       @click="selectMenus(item.id)"
    > <!--单个菜单容器-->
      <span v-if="item.locked" class="icon-lock"></span>  <!--锁的图标-->
      <span class="count-list">{{item.record.length}}</span><!--数字-->
      {{item.title}} <!--菜单内容-->
    </a>
    <a class="link-list-new"
       @click="addTodo"
    > <!--新增菜单-->
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>
<script>
  import {getTodoList, addTodo} from '../api/api'

  export default {
    created() {
      getTodoList().then(res => {
        this.items = res.data.todos;
        this.selectedItemId = this.items[0].id;
      });
    },
    data() {
      //data函数
      return {
        items: [],
        selectedItemId: ''
      };
    },
    methods: {
      selectMenus(id) {
        this.selectedItemId = id;
      },
      addTodo() {
        addTodo().then(rsp => {
          getTodoList().then(res => {
            this.items = res.data.todos;
            this.selectedItemId = this.items[this.items.length - 1].id;
            console.log(this.items);
          });
        });
      }
    }
  };
</script>

<style lang="less">
  @import '../common/style/menu.less';
</style>


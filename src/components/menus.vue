<template>
  <!--绑定点击事件goList),并且判断当todoId 时候 item.id时,文字高亮度-->
  <div class="list-todos">
    <!-- 绑定class，当items循环中的id等于我们设置的选中todoId时候,就会加上active这个calss,这样样式就会发生变化。-->
    <a class="list-todo list activeListClass"
       v-for="item in items"
       :class="{active:item.id === todoId}"
       @click="selectItem(item.id)"
    >
      <!-- 把以前的item换成todoList -->
      <span class="icon-lock"></span>
      {{item.title}}
      <span class="count-list">1</span>
    </a>
    <a class="link-list-new" @click="addItem">
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>
<script>
  import {getTodoList} from '../api/api.js';

  export default {
    data() {
      return {
        items: [], // 菜单数据
        todoId: '', // 默认选中id,
        todoNum: 0 // 新增一个状态来判断代办事项的数据
      };
    },
    watch: {},
    computed: {},
    created() {
      let _this = this;
      getTodoList({}).then(res => {
        let todos = res.data.todos;
        if (todos.length > 0) {
          todos.forEach((item, index) => {
            if (index === 0) {
              _this.todoId = item.id;
            }
            _this.items.push(item);
          });
        }
        console.log(_this.items);
      });
    },
    methods: {
      selectItem(id) {
        this.todoId = id;
      },
      addItem() {
        //this.$store.get
      }
    }
  };
</script>

<style lang="less">
  @import '../common/style/menu.less';
</style>


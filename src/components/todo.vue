<template>
  <div v-if="isShowTodo" class="page lists-show">
    <nav>

      <h1 class="title-page">
        <div class="title-wrapper">{{todo.title}}</div>
        <span v-if="todo.count > 0" class="count-list">{{todo.count}}</span>
      </h1>

      <div class="nav-group right">
        <div class="options-web">
          <div class="nav-item">
            <span v-if="todo.locked" class="icon-lock"></span>
            <span v-else="todo.locked" class="icon-unlock"></span>
          </div>
          <div class="nav-item">
            <span class="icon-trash"></span>
          </div>
        </div>
      </div>

      <div class="form todo-new input-symbol">
        <input
          type="text"
          placeholder="请输入"
          v-model="text"
          @keyup.enter="onAdd"
          :disabled="todo.locked"
        >
        <span class="icon-add"></span>
      </div>

    </nav>

    <div v-if="isShowTodoItems" class="content-scrollable list-items">
      <item :key="index" v-for="(item,index) in items" :item="item"/>
    </div>
    <div v-else="isShowTodoItems" class="content-scrollable list-items list-empty">
      <p class="list-empty-word">未找到任何数据</p>
    </div>
  </div>
  <div v-else="isShowTodo" class="page list-empty">
    <p class="list-empty-word">未找到任何数据</p>
  </div>
</template>

<script>
  import item from './Item.vue'
  import {getTodo, addRecord} from '../api/api.js'

  export default {
    computed: {
      isShowTodo() {
        return Object.keys(this.todo).length !== 0
      },
      isShowTodoItems() {
        return this.items.length !== 0
      }
    },
    watch: {
      '$route.params.id'() {
        this.selectedItemId = this.$route.params.id;
        if (this.selectedItemId) {
          this.init();
        }
      }
    },
    created() {
      if (this.selectedItemId) {
        this.init();
      }
    },
    data() {
      return {
        selectedItemId: this.$route.params.id,
        todo: {},
        items: [],
        text: '' //新增代办单项绑定的值
      }
    },
    methods: {
      init() {
        getTodo({id: this.selectedItemId}).then(res => {
          if (res.data.todo && res.data.todo.id) {
            let {id, title, isDelete, locked, count, record} = res.data.todo;
            this.todo = {id, title, isDelete, locked, count};
            this.items = record;
          } else {
            this.selectedItemId = null;
            this.$router.push({name: 'Layouts'});
          }
        });
      },
      onAdd() {
        addRecord({id: this.selectedItemId, text: this.text}).then(res => {
          getTodo({id: this.selectedItemId}).then(res => {
            this.items = res.data.todo.record;
          });
          this.text = '';
        });
      }
    },
    components: {
      item
    }
  }
</script>

<style lang="less">
  @import '../common/style/nav.less';
  @import '../common/style/form.less';
  @import '../common/style/todo.less';
</style>

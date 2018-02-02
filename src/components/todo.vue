<template>
  <div class="page lists-show">
    <nav>

      <h1 class="title-page">
        <div class="title-wrapper">{{todo.title}}</div>
        <span class="count-list">{{todo.count}}</span>
      </h1>

      <div class="nav-group right">
        <div class="options-web">
          <div class="nav-item">
            <span v-if="todo.locked" class="icon-unlock"></span>
            <span v-else="todo.locked" class="icon-lock"></span>
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

    <div class="content-scrollable list-items">
      <item :key="index" v-for="(item,index) in items" :item="item"></item>
    </div>
  </div>
</template>

<script>
  import item from './Item.vue'

  export default {
    data () {
      return {
        todo: { //详情内容
          title: '星期一',
          count: 12,
          locked: false
        },
        items: [ //代办单项列表
          {checked: false, text: '新的一天', isDelete: false},
          {checked: false, text: '新的一天', isDelete: false},
          {checked: false, text: '新的一天', isDelete: false}
        ],
        text: '' //新增代办单项绑定的值
      }
    },
    methods: {
      onAdd () {
        this.items.push({checked: false, text: this.text, isDelete: false})
        this.text = ''
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

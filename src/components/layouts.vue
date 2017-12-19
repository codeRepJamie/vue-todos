<template>
  <div>
    <section class="menu"> <!--左边的容器 里面加上组件 menus-->
      <menus></menus> <!-- * -->
    </section>
    <section class="content-container">
      <todo></todo>
    </section>
  </div>
</template>

<script>
  import menus from './menus'; // * 导入刚才我们创建的 menus组件
  import todo from './todo'; // * 导入刚才我们创建的 menus组件

  export default {
    components: {
      menus,
      todo
    }
  }
</script>

<style lang="less">
  @import '../common/style/layouts.less';
</style>

<template>
    <div class="main-side">
        <div class="main-side-top">
            <div v-for="item in mainSideList" :key="item.id">
                <Button class="home-page" @click="getMainSideType(item)">{{ item.name }}</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'main-side',
  data () {
    return {
      mainSideList: [
        {
          id: '1',
          type: 'home',
          name: '首页',
          routerName: ''
        },
        {
          id: '2',
          type: 'internet',
          name: '物联网',
          routerName: ''
        },
        {
          id: '3',
          type: 'fireRescue',
          name: '灭火救援',
          routerName: ''
        },
        {
          id: '4',
          type: 'emergency',
          name: '应急指挥',
          routerName: ''
        },
        {
          id: '5',
          type: 'back',
          name: '后台管理',
          routerName: 'home'
        }
      ]
    }
  },
  methods: {
    getMainSideType (item) {
      this.$emit('mainSideType', item.type)
      this.$router.push({
        name: item.routerName
      })
    }
  }
}
</script>

<style scoped>
    .home-page {
        background: url("../../assets/images/img/left-box.png") no-repeat;
        width: 185px;
        border: 0;
        height: 130px;
        cursor: pointer;
        color: #ffffff;
        font-size: 18px;
    }

    .home-page:hover {
        background: url("../../assets/images/img/left-box-hover.png") no-repeat;
        width: 185px;
        border: 0;
        height: 130px;
        cursor: pointer;
        color: #ffffff;
    }

    .main-side {
        background: url("../../assets/images/img/left-menu.png") no-repeat;
        position: absolute;
        z-index: 100;
        width: 20%;
        height: 100%;
    }

    .main-side-top {
        margin: 45% 0 0 20%;
    }
</style>

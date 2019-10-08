<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" :active-name="activeName" @on-select="changeMenu">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <template v-for="(item, index) in menuList">
                            <MenuItem :key="index" :name="item.name">
                                <Icon :key="index" type="ios-navigate"></Icon>
                                <span :key="index">{{ item.title }}</span>
                            </MenuItem>
                        </template>
                    </div>
                </Menu>
            </Header>
            <Content class="single-page-con" :style="{padding: '10px 50px'}">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">音乐网站</Footer>
        </Layout>
    </div>
</template>

<script>
import './index.less'

export default {
  name: 'music-top',
  data () {
    return {
      activeName: ''
    }
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    }
  },
  mounted () {
    this.activeName = this.$route.fullPath.split('/')[1]
  },
  methods: {
    changeMenu (name) {
      let list = []
      this.menuList.forEach(function (e) {
        if (name === e.name) {
          list = e.children
        }
      })
      this.$router.push({ name: list[0].name })
    }
  }
}
</script>

<style less>

</style>

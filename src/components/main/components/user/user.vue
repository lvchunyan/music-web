<template>
    <div class="user-avator-dropdown">
        <Tooltip content="大屏" placement="bottom">
            <Icon type="ios-map" size="26" class="margin-right-20" @click.native="goToBigScreen()"></Icon>
        </Tooltip>
        <Dropdown @on-click="handleClick">
            <span class="user-name">{{ userName }}</span>
            <Icon :size="18" type="md-arrow-dropdown"></Icon>
            <DropdownMenu slot="list">
                <DropdownItem name="message">
                    消息中心
                    <Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
                </DropdownItem>
                <DropdownItem name="logout">退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Avatar :src="userAvator"/>
    </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'

export default {
  name: 'User',
  props: {
    userName: {
      type: String,
      default: ''
    },
    userAvator: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    logout () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    message () {
      this.$router.push({
        name: 'message_page'
      })
    },
    goToBigScreen () {
      this.$router.push({
        name: 'main-page'
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout':
          this.logout()
          break
        case 'message':
          this.message()
          break
      }
    }
  }
}
</script>

<template>
    <Row>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper"/>
                首页
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people"/>
                歌单
            </MenuItem>
        </Menu>
    </Row>
</template>

<script>
export default {
  name: 'music-top'
}
</script>

<style scoped>

</style>

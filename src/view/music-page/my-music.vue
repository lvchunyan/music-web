<template>
    <div class="swipe">

    </div>
</template>

<script>
export default {
  name: 'my-music'
}
</script>
<style>
    .swipe{
        width: 90%;
        margin: 40px auto;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>

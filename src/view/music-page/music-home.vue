<template>
    <Row>
        <Card>
            <music-top></music-top>
            <Carousel autoplay v-model="value2" loop>
                <template v-for="(item, index) in imgList">
                    <CarouselItem :key="index">
                        <img :src="item.url" width="100%" height="300px">
                    </CarouselItem>
                </template>
            </Carousel>
        </Card>
    </Row>
</template>

<script>
import musicTop from './music-top'
import { getVolumeList } from '@/api/music'
export default {
  name: 'music-home',
  components: {
    musicTop
  },
  data () {
    return {
      value2: 0,
      imgList: ''
    }
  },
  mounted () {
    this.getVolumeList()
  },
  methods: {
    getVolumeList () {
      var data = {
        'code': 1,
        'message': 'success',
        'data': {
          'records': [
            {
              'id': 1,
              'title': '散漫的夏天',
              'caption': null,
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/4d5d7b6481b89d5bb97bd73a158c2017/00.jpg',
              'releaseTime': '2009-06-05',
              'author': '落在低处',
              'star': 20244,
              'remark': 1626,
              'thank': 69,
              'number': 11
            },
            {
              'id': 2,
              'title': '记忆中的碎片',
              'caption': '我们都拥有一个不平凡的人生。',
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/4d69e17a8171aeba9a1a88593413fe02/00.jpg',
              'releaseTime': '2009-06-06',
              'author': '落在低处',
              'star': 19106,
              'remark': 322,
              'thank': 25,
              'number': 13
            },
            {
              'id': 3,
              'title': '未选择的路',
              'caption': null,
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/276c58a6549e8fd66f2d273ccd3dde0e/00.jpg',
              'releaseTime': '2009-06-08',
              'author': '落在低处',
              'star': 18341,
              'remark': 217,
              'thank': 16,
              'number': 13
            },
            {
              'id': 4,
              'title': '悄然涌动的夜晚',
              'caption': null,
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/f40c4496cb22bb0b8c18cc38ab5bf335/00.jpg',
              'releaseTime': '2009-06-09',
              'author': '落在低处',
              'star': 17840,
              'remark': 150,
              'thank': 13,
              'number': 16
            },
            {
              'id': 5,
              'title': 'A New Beginning',
              'caption': null,
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/e35b3fba1bf45fb915313e743283ec66/00.jpg',
              'releaseTime': '2009-06-10',
              'author': '落在低处',
              'star': 18089,
              'remark': 133,
              'thank': 14,
              'number': 13
            },
            {
              'id': 6,
              'title': 'Time',
              'caption': null,
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/72c3e3cb1b6c4180f78879848037e904/00.jpg',
              'releaseTime': '2009-06-11',
              'author': '落在低处',
              'star': 18089,
              'remark': 132,
              'thank': 6,
              'number': 13
            },
            {
              'id': 7,
              'title': '行走于城市',
              'caption': '01.让我们随着纹子的这首开始一段行走于城市的旅程,想象一下,随着古朴的琴声和自然的倾诉,掩盖在城市之下是荒芜的尘埃.我们游走于城市,游走于每个不能安然入睡的夜晚,每个有独立思想的人们都不愿意这样的被埋葬,相对于大多数人,纹子只是在默默才歌唱,唱出真实的自己,唱出这个城市的尘埃!\n02.简单随意的吉他是否让你的心随之跳动?漫无目的的继续游离之后是对生活的坦然,我们寄予真实的生活太多的奢望,当希望破碎后只留有沉默,如果是一切还能从前把如果能再说一遍,我仍愿意再许下心愿陪着你直到永远。时光不再的苦痛，幸福不再的苦痛，你又能够如何?\n03.追光黯去。回忆真是一件累人的事，它会让你想起你自己的一些事，那些人，那些时光，都已经离你远去了。青春真的无悔么？我不知道，我只知道，青春，不应该有太多的悔恨。\n04.一首大家都很熟悉的曲子,辞去了原唱激昂的离别,却带来了悲怆的诉说.Anita\nLane演唱的这个版本太沉了,让我总是想起网上的一位朋友对我说他朋友和他离别时的场景:因为即将失去的宿舍兄弟而痛苦，因为苦苦恋了很久的恋人却不能在一个城市心里清楚结局一定是分手而难过，因为想要宣泄压抑了四年的情感而放纵。于是，长醉，痛哭，彻夜的歌唱，在火车站里忍饥挨饿呆了整整一天最后才发现的送走的人中还有别的学校的哥们，那个哥们感动不已，在火车门关上的一刹那，高声的哭诉：我爱这个城市所有的人……\n05.第一次听到张楚《姐姐》的时候，前奏中的笛子和吉他交织着，让我愕然呆滞。总觉得张楚的歌声是一种倾诉，是一种表白，我听到这种倾诉，这种表白的时候，总是忍不住想哭.而抑郁CD乐队的这首让我们的内心更加极为脆弱，痛苦和自恋，但又不忍心承受寂寞。抑郁CD通过音乐把自己内心最脆弱最痛苦的东西传播给大众，把普通人内心中的迷梦痛苦也挖掘出来，从而让大家象宠物一样去溺爱他们。\n06.人都是生活在两个世界的,一个是理想世界,一个是现实的世界.黑阳只是把两种世界自然的融合在了一起.因为我们还都年轻，对生活更多是种迷茫，痛苦的音乐就象是美丽的茵粟花一样，已经是种戒不掉的美丽。\n07.You are my Sun shine,唱到这一句的时候心都碎了. 对待爱情总是忐忑不安的我们,是否能够勇敢大声的唱:You are my\nsunshine, my only sunshine …\n08.这样的夜晚，幽幽的音乐和着清冷而潮湿的岁末气息，静静地面对着屏幕上的一些文字，那些渐行渐远的记忆就这样在指尖散开.不过一些都已经远去了\n09.在歌曲一分连六秒之前,沉闷的等待着爆发,一分连六秒之后终于迎来了期待已久的畅快.理查德戈尔德斯坦说过的:\\"摇滚最重要的特点是对青春活力的肆无忌惮的挥霍.\\"看到这句话,我突然对自己现在的生活找到了某种不太完美且很牵强的注脚.\n10.我想，听摇滚长大的孩子都是理想主义者加完美主义者。当他们从摇滚乐中一脚踏进现实的世界里，发现生活并不像表面上那么光鲜时，都会有强烈的落差感。于是选择堕落、懒散、或是无厘头的姿态去对待生活的无聊和理想的虚无。这首暴烈的曲子正是我们内心的写照,很喜欢这首双主唱的搭配起来的曲子,平缓加上黑腔就象在诉说我们内心的矛盾.\n11.毫无疑问,我们的内心总是那么狂热.青春让我们的内心隐藏了太多压抑.岁月里的音乐，相同的是青春的乌托邦梦想和生命的激情，它们也总在某个角落、某个心灵的某个时刻迸发。\n12.这首纯曲子一直找了很久,当初只是看过MV但是一直不知道曲子的名字.现场永远是摇滚的第一生命力,只有在音乐现场中,才能真正感受到音乐的爆发力和让人充满幻想.夜愿的还有一首曲子叫',
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/21ff3ee2fd4ceb597f55796a51ba07fd/00.jpg',
              'releaseTime': '2009-06-12',
              'author': '落在低处',
              'star': 18862,
              'remark': 167,
              'thank': 7,
              'number': 14
            },
            {
              'id': 8,
              'title': '路过昨天',
              'caption': '本期线上音乐比较安静,适合一个人驻足聆听',
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/05e78bb7fd9abe2e912ff67f98506dae/00.jpg',
              'releaseTime': '2009-06-13',
              'author': '落在低处',
              'star': 18592,
              'remark': 121,
              'thank': 9,
              'number': 11
            },
            {
              'id': 9,
              'title': 'Good Morning',
              'caption': null,
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/aa03ecdb39a9fd4ce7d586d8f2599903/00.jpg',
              'releaseTime': '2009-06-14',
              'author': '落在低处',
              'star': 17858,
              'remark': 74,
              'thank': 8,
              'number': 9
            },
            {
              'id': 10,
              'title': '简单生活',
              'caption': null,
              'url': 'https://riverluooo.oss-cn-beijing.aliyuncs.com/luoo/f0837400f76b03bd872e4279ec02fe80/00.jpg',
              'releaseTime': '2009-06-15',
              'author': '左岸以西',
              'star': 17958,
              'remark': 93,
              'thank': 8,
              'number': 10
            }
          ],
          'total': 1000,
          'size': 10,
          'current': 1,
          'searchCount': true,
          'pages': 100
        }
      }
      this.imgList = data.data.records.slice(0, 3)
      getVolumeList({ pageIndex: 1, pageSize: 1000 }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <Card>
            <template v-for="(item, index) in volumeList">
                <Button :key="index" class="volume-btn" @click="changeTag(item)">第{{item.number}}期</Button>
            </template>
            <Divider />
            <template v-for="(item, index) in musicList">
                <aplayer :key="index" autoplay :music="item"></aplayer>
            </template>
        </Card>
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
  name: 'music-sheet',
  components: {
    Aplayer
  },
  data () {
    return {
      volumeList: [
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
        }
      ],
      musicList: []
    }
  },
  mounted () {
    this.getVolumeList()
  },
  methods: {
    getVolumeList () {
      var data = [
        {
          'id': 124,
          'volumeId': 11,
          'sequence': 1,
          'album': 'Erwachen',
          'title': 'Letzter blick zurück',
          'author': 'Illuminate',
          'lyric': "Und nun wieder auf dem Weg  \ndurch Asche die längst kalt und grau  \nMir heuchelt, es wär' nie gescheh'n.  \nUnd viel zu lange wachte ich  \nIn den Ruinen, die einst groß und schön  \nWie uns're Festung waren.  \n  \nDu bist blind,  \nWeil Du mich nicht siehst!  \nDu bist taub,  \nWeil Du mich nicht hörst,  \nDu bist schwach,  \nWeil Du mich nicht ählst!  \nDu bist alt,  \nIch hab' Dich überlebt!  \n  \nDoch Du bist schön,  \nSchöner als jeder Stern!  \nUnd Du bist frei,  \nKeiner Dich halten kann!  \nUnd Du bist Licht,  \nWo sonst nur Dunkel ist!  \nUnd Du bist mein  \nLetzter Blick zurück!",
          'time': 357.998,
          'music': null,
          'url': null
        },
        {
          'id': 125,
          'volumeId': 11,
          'sequence': 2,
          'album': 'Kauan',
          'title': 'Morrow',
          'author': 'Tenhi',
          'lyric': 'Kuulaina öinä syksyn  \nKajo täyttää taivaan hohtoon  \nSarasteen koittaessa  \nTaivaanlaki ylle kumartuu  \nHuomenen tervehdyksen  \nKaikuessa aamuruskoon  \nPimeän selänteen kääntyessä  \nTakaisin suo meille yön tummuus  \nLoisteeton päivyt',
          'time': 406.1155,
          'music': null,
          'url': null
        },
        {
          'id': 126,
          'volumeId': 11,
          'sequence': 3,
          'album': 'E Miele dal Salice',
          'title': 'A Venere',
          'author': 'Dismal',
          'lyric': null,
          'time': 483.9604,
          'music': null,
          'url': null
        },
        {
          'id': 127,
          'volumeId': 11,
          'sequence': 4,
          'album': 'titles of Moors & Misty Fields',
          'title': 'The Ensemble of Silence',
          'author': 'Empyrium',
          'lyric': "And again the moon is on the wave, gliding gently into me,  \non silent wings the night comes from there,  \nas my heart longs to thee...  \n  \n...for in my hand I still hold the rose that froze long times ago,  \nits leafs have withered, it ceased to grow - left in me is woe.  \n  \nThe wine of love, is o so sweet, but bitter is regret,  \nI knew at sunset I would meet the ascending veils of dread.  \n  \nBefore my eyes nocturnal curtains fall,  \nThe dark and gentle haze of the night, greedily devours all.  \n  \nThe Night:  \n\"Woe to him whose heart is filled with bitter rue and who drowns in grief\"  \n  \nIn the silence of the night I loose myself,  \nit makes me drunken with its sweet blue sound.  \n  \nIn the drunk'ness of solitude  \nI fear no more the solemn realms of death  \nNo single sigh from my lips as I drink the wine of bitterness  \nMy heart is aching nevermore  \nfor I know that all may end  \nJust I and the poetry of the night  \nNow forever one....  \n  \nJust I and the poetry of the night, now forever one,  \nThe ensemble of silence plays so beautiful for me...",
          'time': 592.0029,
          'music': null,
          'url': null
        },
        {
          'id': 128,
          'volumeId': 11,
          'sequence': 5,
          'album': 'Veronika Decides To Die',
          'title': 'All Alone',
          'author': 'Saturnus',
          'lyric': "I'm standing here  \nWatcing the clouds float by  \nWondering why the pain never deserted me  \nThe sadness, sorrow, bewilderness that never left  \n(...the moments of joy I never kept)  \n  \nI'm flying away  \n  \nHolding hands with myself  \nSharing life with myself  \nReaping the loneliness I've sown  \nIn these fields I've always grown  \nDigging the blackness from my mind  \nI will die all alone",
          'time': 378.1123,
          'music': null,
          'url': null
        },
        {
          'id': 129,
          'volumeId': 11,
          'sequence': 6,
          'album': 'Sombre Dance',
          'title': 'Chapter V',
          'author': 'Estatic Fear',
          'lyric': "Many a weary night endured  \nSince the utter charm of joy has pured  \nMy unquiet dreams, my misery  \nHow sweat if I could share with thee  \nUnable to endure it's smile  \nWhich kindly eased my sombre veil  \nI frightened turned my burdened head  \nAnd hid in slumbers shade instead  \n  \nBut lifted from my mournful rest  \nWas I by thee nocturnal guest  \nWhen though did vow to suffocate  \nMy tranquil dreams in thrones bed  \nYou spoke to me with loathed glow  \nAnd thus have though not kept thy vow  \nFor when thy shadow sprang on me  \nI closed my eyes in ecstasy",
          'time': 291.5164,
          'music': null,
          'url': null
        },
        {
          'id': 130,
          'volumeId': 11,
          'sequence': 7,
          'album': "Widow's Weeds",
          'title': 'My lost Lenore',
          'author': 'Tristania',
          'lyric': "For thy promise bewailed  \nBy her raveneyes  \nBy her beauty and a scarlet sunrise  \nMay thy river bury her silvertears  \nA fallen angel... enshrined in moonlit seas  \n  \n[whispering:]  \nDancing heart I mourn  \nMy lost desire  \nDancing heart I mourn  \nRape the soul forever  \n  \nLeaving vitality  \nSo serene breeds my darkness  \nEntreating winterwinds  \nThough I leave... I embrace thee  \n  \nWinternight  \nConceal thy precious angellore  \nI secrete my soul  \nUnder thy wings of sorrow  \nDark I embrace thy eyes  \nWander lost on life's narrow path  \nI reveal my heart  \nTo this beauty dressed in dark  \n  \n[whispering:]  \nWhen my shadows devotedly cast  \nMy moon will rise with lost  \n  \nGrieving raveneyes  \nFalls asleep with the sunrise  \nDelightful midsummer breeze  \nThough I leave... I await thee  \n  \nWinternight  \nConceal thy precious angellore  \nI secrete my soul  \nUnder thy wings of sorrow  \nDark I embrace thy eyes  \nWander lost on life's narrow path  \nI reveal my heart  \nTo this beauty dressed in dark  \n  \nGrant me thy last midsummer breeze  \nMay thou ascend from endless sleep  \n... my desire  \nDance me above thy moonlit seas  \nGlance yearningly into the deep  \nA cold and weary night  \n  \nWidwinternight  \nDescending me like flakes of snow  \nI embrace the cold  \nFor a life that morrows  \nDark I embrace thy heart  \nWanderer lost beyond veils of dawn  \nI conceal thy loss  \nEnthralled in life yet still I mourn  \nMy lost Lenore...",
          'time': 380.8029,
          'music': null,
          'url': null
        },
        {
          'id': 131,
          'volumeId': 11,
          'sequence': 8,
          'album': 'Where Dreams Turn To Dust',
          'title': 'Wish',
          'author': 'Forest Of Shadows',
          'lyric': "Awakened this dying season such a beauty to behold  \nOh autumn hath arrived a tragedy painted dead  \nFallen am I without thee I am lost  \nIn a region of doleful shades I am withering away  \nI dwell in the shadows of life  \nA dismal state of mind I'm in pain  \nOh sun I hate thy beams  \nLeave me here to sleep and dream  \nIn the midst of falling leaves  \nIn a garden of endless grief  \nI yearn for thee my precious one  \nBeneath a pale grey sky I dream of your embrace  \nHow I wish I had yo near in this oh so dolorous life  \nWhere dreams turn to dust I have lost all my hope  \nOf lasting pain and unpresent bliss  \nThis soul of mine I welcome thee  \nEternal sleep  \nSilent advent of white death  \nI feel so cold  \nSilent advent of white death  \nI feel so cold  \nCrystallized tears falling still  \nOh autumn hath died  \nEnshrouded am I in thy mist of endless gloom  \nEnthralled am I by thy beauty  \nHow I wish how I wish  \nIn the midst of falling snow  \nIn a garden of endless grief  \nMy forlorn soul of misery  \nWhere peace and rest can never dwell  \nHope never comes  \nI see no point in going on  \nStill I dream but now I know  \nI dream a lie so I close my eyes and I sigh  \nA life of shattered dreams I can no longer bear  \nI enter thee eternal sleep",
          'time': 504.6755,
          'music': null,
          'url': null
        },
        {
          'id': 132,
          'volumeId': 11,
          'sequence': 9,
          'album': 'Victory title',
          'title': 'Victory title',
          'author': 'Ensiferum',
          'lyric': "The plan of invasion  \nan Evil deception  \nWas made in the halls of the dark kingdom  \nTo steal their riches  \nTo slave them all  \nTo make them kneel for a new God  \n  \nThe Guard woke up the sleeping men  \nWith the sound of a bronze horn  \nThe enemy is getting closer  \nSo brace yourselves for assault!  \n  \nSwords in their hands they killed each and every man  \nWho dared to invade their sacred land  \nVictory titles are raising in the night  \nTelling all of their undying strength and might  \n  \nArrows are raining from the sky  \nAs brothers fight side by side  \nWe're outnumbered  \nBut our destiny is to win  \n  \nFIGHT!  \nFight with the rage of a bear!  \nDEFEND!  \nOur homeland!  \nCRUSH!  \nCrush every enemy!  \nAND SEAL!  \nOur victory!  \n  \nSwords in their hands they killed each and every man  \nWho dared to invade their sacred land  \nVictory titles are raising in the night  \nTelling all of their undying strength and might  \n  \nEi urhot kaukaisen Pohjolan  \nUhan eessä taipuneet  \nJälleen pauhaa kansi taivahan  \nVeri valuu maahan lumiseen  \nMoni nähdä ei saa enää huomista  \nMoni jää heitä kaipaamaan  \nJälkipolville jää maa rauhaisa  \nVoiton laulut soi ainiaan  \nVoiton laulut soi ainiaan!  \n  \nSwords in their hands they killed each and every man  \nWho dared to invade their sacred land  \nVictory titles are raising in the night  \nTelling all of their undying strength and might  \n  \nSwords in their hands they killed each and every man  \nWho dared to invade their sacred land  \nVictory titles are raising in the night  \nTelling all of their undying strength and might",
          'time': 638.4486,
          'music': null,
          'url': null
        }
      ]
      this.musicList = data
    },
    changeTag (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>
.volume-btn{
    margin: 0 10px;
}
</style>

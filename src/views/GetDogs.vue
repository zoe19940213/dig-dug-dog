<template>
  <div class="getdogs">
    <div class="getdogs__give">
      <SimpleBoard :topics="giveHot"/>
    </div>
    <div class="getdogs__get">
      <SimpleBoard :topics="getHot"/>
    </div>
    <div class="getdogs__buy">
      <div
        v-for="house in buy" :key="house.id" 
        class="getdogs__buy__card">
        <p class="getdogs__buy__card__breed">{{house.breed}}</p>
        <img :src="house.image" alt="" class="getdogs__buy__card__image">
        <p class="getdogs__buy__card__name">{{house.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleBoard from "../components/SimpleBoard";

const dummyData = {
  giveHot:[
    {
      id: 41,
      title: "政法政刻、得些電不性，健倒任見國價？",
      category: {
        id: "4-1",
        board: "getdogs",
      },
    },
    {
      id: 42,
      title: "感遊指比館生因思兒、業在意。藝兒間兒口是物！",
      category: {
        id: "4-1",
        board: "getdogs",
      },
    },
    {
      id: 43,
      title: "下度時賽這的下不，有食之年！",
      category: {
        id: "4-1",
        board: "getdogs",
      },
    },
    {
      id: 44,
      title: "馬一資似；人來那來知！",
      category: {
        id: "4-1",
        board: "getdogs",
      },
    },
    {
      id: 45,
      title: "色者國？野包機史的任不，作世？",
      category: {
        id: "4-1",
        board: "getdogs",
      },
    },
  ],
  getHot:[
    {
      id: 46,
      title: "現在類量人信帶味師切著，知生生國。",
      category: {
        id: "4-2",
        board: "getdogs",
      },
    },
    {
      id: 47,
      title: "變度上強一全出年背不也德溫樣；作有？",
      category: {
        id: "4-2",
        board: "getdogs",
      },
    },
    {
      id: 48,
      title: "請金了那光出很心！",
      category: {
        id: "4-2",
        board: "getdogs",
      },
    },
    {
      id: 49,
      title: "有上理，公體利懷香值選聯？",
      category: {
        id: "4-2",
        board: "getdogs",
      },
    },
    {
      id: 50,
      title: "作獲學前你情音友一自子以斯推會象清來他、立無細",
      category: {
        id: "4-2",
        board: "getdogs",
      },
    },
  ],
  buy:[
    {
      id:1,
      name:'熱狗寶寶犬舍',
      breed: '臘腸',
      image: 'https://imgpile.com/images/RVNyU8.jpg',
    },
    {
      id:2,
      name:'陽光活力犬舍',
      breed: '傑克羅素',
      image: 'https://imgpile.com/images/RVUInl.jpg',
    },
    {
      id:3,
      name:'好運旺旺犬舍',
      breed: '柴犬',
      image: 'https://imgpile.com/images/RVU4ib.jpg',
    },
    {
      id:4,
      name:'天才衝衝犬舍',
      breed: '邊境牧羊犬',
      image: 'https://imgpile.com/images/RVUNZi.jpg',
    },
    {
      id:5,
      name:'小乖乖犬舍',
      breed: '貴賓',
      image: 'https://imgpile.com/images/RVU7oF.jpg',
    },
    {
      id:6,
      name:'毛毛叫犬舍',
      breed: '博美',
      image: 'https://imgpile.com/images/RVUnk3.jpg',
    },
    {
      id:7,
      name:'憨憨寶貝犬舍',
      breed: '拉布拉多',
      image: 'https://imgpile.com/images/RVUuxw.jpg',
    },
    {
      id:8,
      name:'史努比犬舍',
      breed: '米格魯',
      image: 'https://imgpile.com/images/RVNegS.jpg',
    },
  ]
}

export default {
  name: "GetDogs",
  components:{
    SimpleBoard,
  },
  data(){
    return{
      giveHot: {},
      getHot: {},
      buy: []
    }
  },
  methods:{
    fetchGiveHot(){
      // api here
      this.giveHot = {
        category: '送養狗狗',
        topicList: dummyData.giveHot
      }
    },
    fetchGetHot(){
      // api here
      this.getHot = {
        category: '領養狗狗',
        topicList: dummyData.getHot
      }
    },
    fecthBuy(){
      // api here
      this.buy = dummyData.buy
    }
  },
  created(){
    this.fetchGiveHot()
    this.fetchGetHot()
    this.fecthBuy()
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/board.scss";
.getdogs {
  @extend %board-continaer;
  display: grid;
  grid-template-areas: 'give get'
                       'buy buy';
  gap: 1rem;
  &__give {
    grid-area: give;
    height: 300px;
  }
  &__get {
    grid-area: get;
    height: 300px;
  }
  &__buy {
    grid-area: buy;
    margin: auto;
    width: 100%;
    overflow: auto;
    display: flex;
    &__card{
        position: relative;
        margin-right: 1rem;
        text-align: center;
        &:hover{
          cursor: pointer;
          & img{
            opacity: 0.5;
          }
          & .getdogs__buy__card__breed{
            transform: translate(-50%, 0) scale(1,1);
          }
        }
      &__breed{
        position: absolute;
        z-index: 2;
        top: 1rem;
        left: 50%;
        padding: 5px;
        border-radius: 5px;
        background: $support-pink;
        transform: translate(-50%, 0) scale(0, 1);
        transition: transform 0.3s;
      }
      &__image{
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        border: 2px solid $support-pink;
      }
      &__name{
        margin-top: 0.6rem;

      }
    }
    
  }
}
</style> scoped>


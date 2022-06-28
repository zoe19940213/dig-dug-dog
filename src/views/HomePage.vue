<template>
  <div class="home">
    <div class="home__latest">
      <h2 class="home__latest__title">最新活動</h2>
      <div class="home__latest__dm">
        <img src="https://imgpile.com/images/RzA4Gc.jpg" alt="" />
      </div>
    </div>
    <div class="home__hot-topic">
      <h2 class="home__hot-topic__title">發燒話題</h2>
      <div class="home__hot-topic__board">
        <SimpleBoard 
          v-for="topics in hotTopics" :key="topics.id"
          :topics = "topics"/>
      </div>
    </div>
    <div class="home__top-ten">
      <h2 class="homt__top-ten__title">Top 10 推薦商品</h2>
      <CarouselPart :products = "topTen" />
    </div>
    <div class="home__collaborated">
      <h2 class="home__collaborated__title">合作品牌</h2>
      <div class="home__collaborated__brands">
        <div 
          v-for="brand in brands" :key="brand.id"
          class="home__collaborated__brand">
          <img :src="brand.image" alt="" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleBoard from "../components/SimpleBoard";
import CarouselPart from "../components/CarouselPart";

const dummyData = {
  hotTopics:[
    {
      category: "零食點心",
      topics:[
        {
          id: 1,
          description: "政法政刻、得些電不性，健倒任見國價？",
        },
        {
          id: 2,
          description: "感遊指比館生因思兒、業在意。藝兒間兒口是物！",
        },
        {
          id: 3,
          description: "下度時賽這的下不，有食之年！",
        }
      ]
    },
    {
      category: "北北基動物醫院",
      topics:[
        {
          id: 1,
          description: "面子不為童不有節……父來馬人育不北代知隨",
        },
        {
          id: 2,
          description: "必解而不統說的紅教文！",
        },
        {
          id: 3,
          description: "備半金著是，給和面兒小外母轉其件進那機時",
        }
      ]
    },
    {
      category: "幼犬行為",
      topics:[
        {
          id: 1,
          description: "政法政刻、得些電不性，健倒任見國價？",
        },
        {
          id: 2,
          description: "那不想無、法生如跑，減人破不個",
        },
        {
          id: 3,
          description: "應飯有舞調府仍，所城調的的康建球本將。",
        }
      ]
    },
    {
      category: "領養狗狗",
      topics:[
        {
          id: 1,
          description: "未面時的行動市們小弟就是老計交開待！",
        },
        {
          id: 2,
          description: "愛地數團根推情那不想無、法生如跑，減人破不個",
        },
        {
          id: 3,
          description: "般色完落防狀子的未師整孩於，你是還我？",
        }
      ]
    }
  ],
  topTen:[
    {
      id: 1,
      description: '黃色雨衣',
      image: 'https://imgpile.com/images/RzL11u.jpg',
    },
    {
      id: 2,
      description: '黃色高筒雨鞋',
      image: 'https://imgpile.com/images/RzL40i.jpg',
    },
    {
      id: 3,
      description: '骨頭睡窩',
      image: 'https://imgpile.com/images/RzAyiF.jpg',
    },
    {
      id: 4,
      description: '陪伴鴨鴨玩偶',
      image: 'https://imgpile.com/images/RzAjww.jpg',
    },
    {
      id: 5,
      description: '紅黑格紋領巾',
      image: 'https://imgpile.com/images/RzAavl.jpg',
    },
     {
      id: 6,
      description: '兔寶寶頭巾',
      image: 'https://imgpile.com/images/RzAZr3.jpg',
    },
    {
      id: 7,
      description: '飛行墨鏡(L)',
      image: 'https://imgpile.com/images/RzAShb.jpg',
    },
    {
      id: 8,
      description: '毛絨獅子頭',
      image: 'https://imgpile.com/images/RzAEZ8.jpg',
    },
    {
      id: 9,
      description: '陶瓷食物碗',
      image: 'https://imgpile.com/images/RzA6oS.jpg',
    },
    {
      id: 10,
      description: '舒適沙發窩',
      image: 'https://imgpile.com/images/RzA3xC.jpg',
    }

  ],
  brands:[
    {
      id: 1,
      brand: 'Pets Moment',
      image: 'https://imgpile.com/images/Rz3Kyl.jpg'
    },
    {
      id:2,
      brand: 'Double D',
      image: 'https://imgpile.com/images/Rz3xL3.jpg'
    },
    {
      id:3,
      brand: 'Flowering',
      image: 'https://imgpile.com/images/Rz3tPb.jpg'
    },
    {
      id:4,
      brand: 'Sweet Diamond',
      image: 'https://imgpile.com/images/Rz3G78.jpg'
    },
     {
      id:5,
      brand: 'goody doogy',
      image: 'https://imgpile.com/images/Rz3CFS.jpg'
    },
    {
      id:6,
      brand: 'Luxury Doggy',
      image: 'https://imgpile.com/images/Rz39lC.jpg'
    },
    {
      id:7,
      brand: 'Another Half',
      image: 'https://imgpile.com/images/Rz3bEj.jpg'
    },
    {
      id:8,
      brand: 'Camp with Pets',
      image: 'https://imgpile.com/images/Rz3TXx.jpg'
    },
    {
      id:9,
      brand: 'Lovely You',
      image:'https://imgpile.com/images/Rz3RDL.jpg'
    },
    {
      id: 10,
      brand: 'Rock and Dog',
      image: 'https://imgpile.com/images/Rz3wy1.jpg'
    }
  ]
}

export default {
  name: "HomePage",
  components: {
    SimpleBoard,
    CarouselPart,
  },
  data() {
    return {
      hotTopics: [],
      topTen:[],
      brands: []
    };
  },
  methods:{
    fetchHotTopics(){
      this.hotTopics = [...dummyData.hotTopics]
    },
    fetchTopTen(){
      this.topTen = [...dummyData.topTen]
    },
    fetchBrand(){
      this.brands = [...dummyData.brands]
    }
  },
  created(){
    this.fetchHotTopics()
    this.fetchTopTen()
    this.fetchBrand()
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 40px auto 0;
  width: 85%;
  @extend %scroll-part;
  overflow: auto;
  &__latest {
    margin-bottom: 3rem;
    &__title {
      margin-bottom: 2rem;
    }
    &__dm {
      border: 2px solid $theme-orange;
      img {
        width: 100%;
      }
    }
  }
  &__hot-topic {
    &__title {
      margin-bottom: 2rem;
    }
    &__board {
      margin-bottom: 3rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }
  &__collaborated{
    &__title{
      margin-bottom: 2rem;
    }
    &__brands{
      display: flex;
      flex-flow: row wrap
    }
    &__brand{
      padding: 30px;
      img{
        height: 100px;
      }
    }
  }
}
</style>
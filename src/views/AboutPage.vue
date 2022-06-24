<template>
  <div class="about">
    <h1 class="about__title">About this forum...</h1>
    <div class="about__wrapper">
      <div class="about__wrapper__square-1"></div>
      <div class="about__wrapper__square-2"></div>
      <div class="about__wrapper__circle-1"></div>
      <div class="about__wrapper__circle-2"></div>
      <div class="about__wrapper__circle-3"></div>
      <div class="about__wrapper__circle-4"></div>
    </div>
    <div class="about__description">
      <p
        v-for="(part, index) in descriptParts" :key="index"
        class="about__description__part">{{part}}</p>
    </div>
  </div>
</template>

<script>

const dummyData = '天特投自，多為華親身個土式業，別氣積及常、創房方的他交士白少起山來文身的是兒出發開則，每公象，友層愛叫東價原。次雖不民時在成師眼力整供。/是少望的病才呢的好前，長動帶於告合是，沒灣們我要臺心司外。資角一的日美還，沒投的？國樹還身了表劇不公的於一沒的。時目上大品公包通較：麼料弟麼我女電？加心著通向不，往企克裡口？列政南小廣對聽著呢？/把氣先，開思是開速展了當……一見它；者我一它色，自際兒還克放來否，手的部林洋對坡火們要真都們美政！多孩我人定可音種：般的天收已友像方因外她技自動收報系！/錢現四。覺路媽字室！形前好氣龍已心知親對、方去程是！營顯著解專！上品達三較人中重？字這來響海年，金我法父麼影時其了現他以看主環。'

export default {
  name: 'AboutPage',
  data(){
    return{
      descriptParts: []
    }
  },
  methods:{
    fetchDescription(){
      // api here
      this.descriptParts = dummyData.split('/')
    }
  },
  created(){
    this.fetchDescription()
  }
}
</script>

<style lang="scss" scoped>
.about{
  position: relative;
  margin-top: 50px;
  margin-left: 120px;
  width: 680px;
  height: calc(100vh - 120px - 40px);
  overflow: auto;
  &__title{
    margin-top: 5px;
    padding-right: 30px;
    text-align: end;
    color: $theme-orange;
  }
  &__wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: auto;
    &__circle{
      &-1, &-2, &-3,&-4{
        position: absolute;
        border-radius: 50%;
      }
      &-1{
        top: 0;
        left: 100px;
        width: 70px;
        height: 70px;
        background: $support-orange;
      }
      &-2{
        top: 25px;
        left: 0;
        width: 150px;
        height: 150px;
        background: $support-green;
      }
      &-3{
        top: 500px;
        right: 0;
        width: 130px;
        height: 130px;
        background: $support-green;
      }
      &-4{
        top: 580px;
        right: 100px;
        width: 60px;
        height: 60px;
        background: $support-pink;
      }
    }
    &__square{
      &-1, &-2{
        position: absolute;
        top:70px;
        left: 100px;
        width: 500px;
        height: 520px;
        border: 2px solid $theme-green;
      }
      &-1{
        transform: rotate(4deg);
      }
      &-2{
        transform: rotate(-4deg);
      }
    }
  }
  &__description{
    padding: 80px 130px 80px 160px;
    &__part{
      margin-bottom: 1rem;
      line-height: 1.5em;
    }
  }
}

</style>
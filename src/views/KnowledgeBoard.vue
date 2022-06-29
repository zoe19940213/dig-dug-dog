<template>
  <div class="knowledge">
    <div class="knowledge__categories">
      <h2 class="knowledge__categories__title">主題分類</h2>
      <CategoryBar 
        :categoryTag ="categoryTag"
        :categories="categories" />
    </div>
    <div class="knowledge__hot-topic">
      <h2 class="knowledge__hot-topic__title">發燒話題</h2>
      <BoardModel :showHeader="showTopicsHeader" :topics="topics" />
    </div>
  </div>
</template>

<script>
import CategoryBar from "../components/CategoryBar";
import BoardModel from "../components/BoardModel";

const dummyData = [
  {
    id: 31,
    title: "政法政刻、得些電不性，健倒任見國價？",
    createAt: "2022-06-11T03:50:34.000Z",
    updateAt: "2019-06-11T09:34:23.000Z",
    tag: "hot",
    category: {
      id: '3-1',
      board: "knowledge",
    },
  },
  {
    id: 32,
    title: "解而不統說的紅教文！",
    createAt: "2022-06-11T06:53:34.000Z",
    updateAt: "2019-06-11T12:34:33.000Z",
    tag: "hot",
    category: {
      id: '3-3',
      board: "knowledge",
    }
  },
  {
    id: 33,
    title: "人什們學好？一過能。而化素式角大造合？",
    createAt: "2022-06-12T04:50:54.000Z",
    updateAt: "2019-06-14T10:30:22.000Z",
    tag: "hot",
    category: {
      id: '3-2',
      board: "knowledge",

    }
  },
  {
    id: 34,
    title: "們快政但朋八大。馬一資似；人來那來知！",
    createAt: "2022-06-13T09:53:30.000Z",
    updateAt: "2019-06-14T11:55:29.000Z",
    tag: "hot",
    category: {
      id: '3-5',
      board: "knowledge",
    }
  },
  {
    id: 35,
    title: "個到可用不唱你有；三天片作時企手建經不與～",
    createAt: "2022-06-12T08:24:04.000Z",
    updateAt: "2019-06-16T04:50:28.000Z",
    tag: "hot",
    category: {
      id: '3-4',
      board: "knowledge",
    }
  },
];

export default {
  name: "MedicalBoard",
  components: {
    CategoryBar,
    BoardModel,
  },
  data() {
    return {
      categoryTag: 'knowledge',
      categories: [
        {
          id: "3-1",
          name: "幼犬照顧",
          image: require("../assets/logos/knowledge/babycare.jpg"),
        },
        {
          id: "3-2",
          name: "老犬照顧",
          image: require("../assets/logos/knowledge/eldercare.jpg"),
        },
        {
          id: "3-3",
          name: "行為問題",
          image: require("../assets/logos/knowledge/behavior.jpg"),
        },
        {
          id: "3-4",
          name: "醫療健康",
          image: require("../assets/logos/knowledge/medical.jpg"),
        },
        {
          id: "3-5",
          name: "社會化訓練",
          image: require("../assets/logos/knowledge/socialize.jpg"),
        },
        {
          id: "3-6",
          name: "才藝訓練",
          image: require("../assets/logos/knowledge/training.jpg"),
        },
        {
          id: "3-7",
          name: "寵物友善",
          image: require("../assets/logos/knowledge/friendly.jpg"),
        },
        {
          id: "3-8",
          name: "其他問題",
          image: require("../assets/logos/knowledge/other.jpg"),
        },
      ],
      topics: {},
      showTopicsHeader: false,
    };
  },
  methods: {
    fecthTopics() {
      this.topics = {
        category:{
          main: '找好商品',
          sub: '',
        },
        topicList: [...dummyData]
      }
    },
  },
  created() {
    this.fecthTopics();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/board.scss";
.knowledge {
  @extend %board-continaer;
  &__categories {
    @extend %part-space;
    &__title {
      @extend %title-space;
    }
  }
  &__hot-topic {
    @extend %part-space;
    &__title {
      @extend %title-space;
    }
  }
}
</style>
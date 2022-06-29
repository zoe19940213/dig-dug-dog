<template>
  <div class="shopping">
    <div class="shopping__categories">
      <h2 class="shopping__categories__title">主題分類</h2>
      <CategoryBar :categories="categories" />
    </div>
    <div class="shopping__hot-topic">
      <h2 class="shopping__hot-topic__title">發燒話題</h2>
      <BoardModel :showHeader="showTopicsHeader" :topics="topics" />
    </div>
  </div>
</template>

<script>
import CategoryBar from "../components/CategoryBar";
import BoardModel from "../components/BoardModel";

const dummyData = [
  {
    id: 1,
    title: "政法政刻、得些電不性，健倒任見國價？",
    createAt: "2022-06-11T03:50:34.000Z",
    updateAt: "2019-06-11T09:34:23.000Z",
    tag: "hot",
    category: {
      id: '1-1',
      board: "shopping",
    },
  },
  {
    id: 2,
    title: "解而不統說的紅教文！",
    createAt: "2022-06-11T06:53:34.000Z",
    updateAt: "2019-06-11T12:34:33.000Z",
    tag: "hot",
    category: {
      id: '1-3',
      board: "shopping",
    }
  },
  {
    id: 3,
    title: "人什們學好？一過能。而化素式角大造合？",
    createAt: "2022-06-12T04:50:54.000Z",
    updateAt: "2019-06-14T10:30:22.000Z",
    tag: "hot",
    category: {
      id: '1-2',
      board: "shopping",

    }
  },
  {
    id: 4,
    title: "們快政但朋八大。馬一資似；人來那來知！",
    createAt: "2022-06-13T09:53:30.000Z",
    updateAt: "2019-06-14T11:55:29.000Z",
    tag: "hot",
    category: {
      id: '1-5',
      board: "shopping",
    }
  },
  {
    id: 5,
    title: "個到可用不唱你有；三天片作時企手建經不與～",
    createAt: "2022-06-12T08:24:04.000Z",
    updateAt: "2019-06-16T04:50:28.000Z",
    tag: "hot",
    category: {
      id: '1-4',
      board: "shopping",
    }
  },
];

export default {
  name: "ShoppingBoard",
  components: {
    CategoryBar,
    BoardModel,
  },
  data() {
    return {
      categories: [
        {
          id: "1-1",
          name: "主食零食",
          image: require("../assets/logos/shopping/food.jpg"),
        },
        {
          id: "1-2",
          name: "玩具玩偶",
          image: require("../assets/logos/shopping/toys.jpg"),
        },
        {
          id: "1-3",
          name: "居家用品",
          image: require("../assets/logos/shopping/in-house.jpg"),
        },
        {
          id: "1-4",
          name: "外出用品",
          image: require("../assets/logos/shopping/outdoor.jpg"),
        },
        {
          id: "1-5",
          name: "清潔沐浴",
          image: require("../assets/logos/shopping/clean.jpg"),
        },
        {
          id: "1-6",
          name: "保健食品",
          image: require("../assets/logos/shopping/health.jpg"),
        },
        {
          id: "1-7",
          name: "衣帽領巾",
          image: require("../assets/logos/shopping/wear.jpg"),
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
.shopping {
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
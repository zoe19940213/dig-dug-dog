<template>
  <div class="medical">
    <div class="medical__categories">
      <h2 class="medical__categories__title">主題分類</h2>
      <CategoryBar 
        :categoryTag="categoryTag"
        :categories="categories" />
    </div>
    <div class="medical__hot-topic">
      <h2 class="medical__hot-topic__title">發燒話題</h2>
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
      id: "2-1",
      board: "medical",
    },
  },
  {
    id: 2,
    title: "解而不統說的紅教文！",
    createAt: "2022-06-11T06:53:34.000Z",
    updateAt: "2019-06-11T12:34:33.000Z",
    tag: "hot",
    category: {
      id: "2-3",
      board: "medical",
    },
  },
  {
    id: 3,
    title: "人什們學好？一過能。而化素式角大造合？",
    createAt: "2022-06-12T04:50:54.000Z",
    updateAt: "2019-06-14T10:30:22.000Z",
    tag: "hot",
    category: {
      id: "2-2",
      board: "medical",
    },
  },
  {
    id: 4,
    title: "們快政但朋八大。馬一資似；人來那來知！",
    createAt: "2022-06-13T09:53:30.000Z",
    updateAt: "2019-06-14T11:55:29.000Z",
    tag: "hot",
    category: {
      id: "2-5",
      board: "medical",
    },
  },
  {
    id: 5,
    title: "個到可用不唱你有；三天片作時企手建經不與～",
    createAt: "2022-06-12T08:24:04.000Z",
    updateAt: "2019-06-16T04:50:28.000Z",
    tag: "hot",
    category: {
      id: "2-4",
      board: "medical",
    },
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
      categoryTag: 'medical',
      categories: [
        {
          id: "2-1",
          name: "北北基",
          image: require("../assets/logos/medical/north.jpg"),
          
        },
        {
          id: "2-2",
          name: "桃竹苗",
          image: require("../assets/logos/medical/northwest.jpg"),
        },
        {
          id: "2-3",
          name: "中彰投",
          image: require("../assets/logos/medical/central.jpg"),
        },
        {
          id: "2-4",
          name: "雲嘉南",
          image: require("../assets/logos/medical/southwest.jpg"),
        },
        {
          id: "2-5",
          name: "高屏",
          image: require("../assets/logos/medical/south.jpg"),
        },
        {
          id: "2-6",
          name: "宜花東",
          image: require("../assets/logos/medical/east.jpg"),
        },
        {
          id: "2-7",
          name: "外島",
          image: require("../assets/logos/medical/island.jpg"),
        },
      ],
      topics: {},
      showTopicsHeader: false,
    };
  },
  methods: {
    fecthTopics() {
      this.topics = {
        category: {
          main: "找好醫院",
          sub: "",
        },
        topicList: [...dummyData],
      };
    },
  },
  created() {
    this.fecthTopics();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/board.scss";
.medical {
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
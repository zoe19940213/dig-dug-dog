<template>
  <div class="topics">
    <BoardModel :topics="topics"
                :showHeader="showHeader"/>
  </div>
</template>

<script>
import BoardModel from '../components/BoardModel'

const dummyData = {
  category:{
    id: 1-1,
    board: "shopping",
    main: '找好商品',
    sub: '主食零食'

  },
  topicList:[
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
    tag: "new",
    category: {
      id: '1-1',
      board: "shopping",
    }
  },
  {
    id: 3,
    title: "人什們學好？一過能。而化素式角大造合？",
    createAt: "2022-06-12T04:50:54.000Z",
    updateAt: "2019-06-14T10:30:22.000Z",
    tag: "",
    category: {
      id: '1-1',
      board: "shopping",

    }
  },
  {
    id: 4,
    title: "們快政但朋八大。馬一資似；人來那來知！",
    createAt: "2022-06-13T09:53:30.000Z",
    updateAt: "2019-06-14T11:55:29.000Z",
    tag: "",
    category: {
      id: '1-1',
      board: "shopping",
    }
  },
  {
    id: 5,
    title: "個到可用不唱你有；三天片作時企手建經不與～",
    createAt: "2022-06-12T08:24:04.000Z",
    updateAt: "2019-06-16T04:50:28.000Z",
    tag: "",
    category: {
      id: '1-1',
      board: "shopping",
    }
  },
]
};

export default {
  name: "TopicsBoard",
  components:{
    BoardModel,
  },
  data(){
    return{
      topics:{
        category: {},
        topicList:[]
      },
      showHeader: true
    }
  },
  methods:{
    fetchTopics(){
      //api here
      this.topics = {...dummyData}
    }
  },
  created(){
    this.fetchTopics()
  }

  
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/board.scss";
.topics{
  @extend %board-continaer;
}

</style>
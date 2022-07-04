<template>
  <div class="topic">
    <div class="topic__wrapper">
      <div class="topic__post">
        <PostModel :post="post"
                   @toggleReplyInput="toggleReplyInput"
                   @like="like"
                   @unlike="unlike"/>
      </div>
      <div class="topic__reply">
        <input :class="['topic__reply__input-box', {show: showReplyInput}]" 
               type="text" placeholder="回覆...">
        <ReplyBlock v-for="reply in replies" :key="reply.id"
                    :reply="reply"/>
      </div>
    </div>
  </div>
</template>

<script>
import PostModel from "../components/PostModel";
import ReplyBlock from "../components/ReplyBlock";

const dummyData = {
  post: {
    id: 1,
    category: {
      id: 1 - 1,
      board: "shopping",
    },
    user: {
      id: 1,
      name: "Zoe Chen",
    },
    title: "政法政刻、得些電不性，健倒任見國價？",
    content: `風人港就便也怎麼直點舉壓？所法界越定以。孩面同時：
發使表球眾界麼感，學說懷質實，理陽縣消代友演，方下此聲重往步藝影。

望家政間眼大親！了功讀！車者面生來，北安是中總氣的知地作訴經英想於生器我流公站代知農對……親己不他來明願不這如公質人。能什業可物，排學座著色身；家成遠地了同天人我經稱我海陸記身來領！
空麼做知世……時所年……來命團選有式之精，息漸可牛。書給不共。來急陸有紅升過民出；三權收次花、去可地發雖。近爾他錯，導還層增，常腳海國子心了，新師海身習導利特有轉不是我現？取走視夠來他室完朋看有？

行劇難企廣業有場樓不天家境；習車春：新及體遊小頭們克回，現在類量人信帶味師切著，知生生國。
什總有史通孩局開們高備求；然大開回效回。覺一了作區經，成得灣：該會應像教指業人眾。
非結的證家的成高發策、草約很實、後臺不這，考更運學元必會前為久談；竟友商色！
本一方直要難中世裡，長主居公大之像設的產黨這動朋友層無行要馬，到還發人而黃歡年多們只`,
    createdAt: "2022-06-11T03:50:34.000Z",
    updatedAt: "2019-06-11T09:34:23.000Z",
    likeCount: 20,
    replyCount: 2,
    isLiked: false,
  },
  replies: [
    {
      id:11,
      user:{
        id: 2,
        name: "A-boo"
      },
      content: '請金了那光出很心！沒是一共外而導近種園一遠於他灣在？受計年歡王如面視電影信生案望, 請金了那光出很心！沒是一共外而導近種園一遠於他灣在？受計年歡王如面視電影信生案望',
      createdAt: "2019-06-11T12:34:33.000Z",
      updatedAt: "2019-06-12T11:22:39.000Z",
    },
    {
      id:12,
      user:{
        id: 3,
        name: "Poly Hsieh"
      },
      content: '有上理，公體利懷香值選聯？腳期一，人醫後……分亞同不且的體費信',
      createdAt: "2019-06-11T12:34:33.000Z",
      updatedAt: "2019-06-12T11:22:39.000Z",
    },
    {
      id:13,
      user:{
        id: 5,
        name: "Agent"
      },
      content: '路一如大光夠。格日異的好！室特一酒身們由出總？',
      createdAt: "2019-06-13T12:34:33.000Z",
      updatedAt: "2019-06-14T11:22:39.000Z",
    }
  ],
};

export default {
  name: "SingleTopic",
  components: {
    PostModel,
    ReplyBlock,
  },
  data() {
    return {
      post: {},
      replies:[],
      showReplyInput: false,
    };
  },
  methods: {
    fetchPost() {
      // api here
      this.post = { ...dummyData.post };
    },
    fetchReplies(){
      // api here
      this.replies = {...dummyData.replies}
    },
    toggleReplyInput(){
      this.showReplyInput = !this.showReplyInput
    },
    like(){
      this.post.isLiked = true
    },
    unlike(){
      this.post.isLiked = false
    },
  },
  created() {
    this.fetchPost();
    this.fetchReplies()
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/board.scss";
.topic{
  @extend %board-continaer;
  
  border: 2px solid $theme-green;
  border-radius: 5px;
  &__post{
    padding: 1rem;
    border-bottom: 1px solid $theme-green;
  }
  &__reply{
    padding: 1rem 2rem; 
    &__input-box{
      width: 100%;
      border-radius: 15px;
      background: #F5F5F5;
      line-height: 1.5rem;
      transform: scale(1, 0);
      transform-origin: top;
      transition: transform 0.3s;
      &.show{
        margin-bottom: 1.5rem;
        padding: 8px 0.8rem;
        transform: scale(1, 1);
      }
    }
  }
}
</style>
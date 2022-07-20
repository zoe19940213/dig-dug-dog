"use strict";(self["webpackChunkdig_dug_dog"]=self["webpackChunkdig_dug_dog"]||[]).push([[677],{3879:function(t,a,e){e.d(a,{Z:function(){return w}});var o=e(6252),i=e(9963),r=e(3577);const s={class:"board"},c={class:"board__header__back"},_={class:"board__header__title"},n={class:"board__main"},d={class:"board__main__list"},p=["onClick"],g={class:"board__main__list__item__left-part"},l={class:"board__main__list__item__left-part__description"},u={class:"board__main__list__item__right-part"},m={class:"board__main__list__item__right-part__create-time"},h={class:"board__main__list__item__right-part__icon"};function y(t,a,e,y,f,b){const v=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",s,[e.showHeader?((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:a[0]||(a[0]=(0,i.iM)((a=>t.$router.back()),["prevent","stop"])),class:"board__header"},[(0,o._)("button",c,[(0,o.Wm)(v,{class:"icon",icon:"fa-solid fa-play"})]),(0,o._)("h2",_,(0,r.zw)(e.topics.category.main)+" - "+(0,r.zw)(e.topics.category.sub),1)])):(0,o.kq)("",!0),(0,o._)("div",n,[(0,o._)("ul",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.topics.topicList,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id,onClick:(0,i.iM)((a=>b.toTopic(t.category.board,t.category.id,t.id)),["prevent","stop"]),class:"board__main__list__item"},[(0,o._)("div",g,[(0,o._)("div",{class:(0,r.C_)(["board__main__list__item__left-part__spot",{hot:"hot"===t.tag,new:"new"===t.tag}])},null,2),(0,o._)("p",l,(0,r.zw)(t.title),1)]),(0,o._)("div",u,[(0,o._)("p",m,(0,r.zw)(t.updateAt),1),(0,o._)("div",h,[(0,o.Wm)(v,{class:"icon",icon:"fa-solid fa-play"})])])],8,p)))),128))])])])}var f={name:"TopicBoard",props:{topics:{type:Object,required:!0},showHeader:{type:Boolean,default:!1}},methods:{toTopic(t,a,e){this.$router.push({name:"topic",params:{category:t,categoryId:a,topicId:e}})}}},b=e(3744);const v=(0,b.Z)(f,[["render",y],["__scopeId","data-v-4f3e4da2"]]);var w=v},9332:function(t,a,e){e.d(a,{Z:function(){return u}});var o=e(6252),i=e(9963),r=e(3577);const s={class:"categories"},c=["onClick"],_=["src"],n={class:"categories__category-card__description"};function d(t,a,e,d,p,g){return(0,o.wg)(),(0,o.iD)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.categories,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id,onClick:(0,i.iM)((a=>g.getIntoCategory(t.id)),["prevent","stop"]),class:"categories__category-card"},[(0,o._)("img",{class:"categories__category-card__image",src:t.image,alt:""},null,8,_),(0,o._)("p",n,(0,r.zw)(t.name),1)],8,c)))),128))])}var p={name:"CategoryBar",props:{categoryTag:{type:String,required:!0},categories:{type:Array,required:!0}},data(){return{}},methods:{getIntoCategory(t){this.$router.push({name:"topics",params:{category:this.categoryTag,categoryId:t}})}}},g=e(3744);const l=(0,g.Z)(p,[["render",d],["__scopeId","data-v-4e0139e0"]]);var u=l},6677:function(t,a,e){e.r(a),e.d(a,{default:function(){return y}});var o=e(6252);const i=t=>((0,o.dD)("data-v-8ddee910"),t=t(),(0,o.Cn)(),t),r={class:"shopping"},s={class:"shopping__categories"},c=i((()=>(0,o._)("h2",{class:"shopping__categories__title"},"主題分類",-1))),_={class:"shopping__hot-topic"},n=i((()=>(0,o._)("h2",{class:"shopping__hot-topic__title"},"發燒話題",-1)));function d(t,a,e,i,d,p){const g=(0,o.up)("CategoryBar"),l=(0,o.up)("BoardModel");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",s,[c,(0,o.Wm)(g,{categoryTag:d.categoryTag,categories:d.categories},null,8,["categoryTag","categories"])]),(0,o._)("div",_,[n,(0,o.Wm)(l,{showHeader:d.showTopicsHeader,topics:d.topics},null,8,["showHeader","topics"])])])}var p=e(9332),g=e(3879);const l=[{id:1,title:"政法政刻、得些電不性，健倒任見國價？",createAt:"2022-06-11T03:50:34.000Z",updateAt:"2019-06-11T09:34:23.000Z",tag:"hot",category:{id:"1-1",board:"shopping"}},{id:2,title:"解而不統說的紅教文！",createAt:"2022-06-11T06:53:34.000Z",updateAt:"2019-06-11T12:34:33.000Z",tag:"hot",category:{id:"1-3",board:"shopping"}},{id:3,title:"人什們學好？一過能。而化素式角大造合？",createAt:"2022-06-12T04:50:54.000Z",updateAt:"2019-06-14T10:30:22.000Z",tag:"hot",category:{id:"1-2",board:"shopping"}},{id:4,title:"們快政但朋八大。馬一資似；人來那來知！",createAt:"2022-06-13T09:53:30.000Z",updateAt:"2019-06-14T11:55:29.000Z",tag:"hot",category:{id:"1-5",board:"shopping"}},{id:5,title:"個到可用不唱你有；三天片作時企手建經不與～",createAt:"2022-06-12T08:24:04.000Z",updateAt:"2019-06-16T04:50:28.000Z",tag:"hot",category:{id:"1-4",board:"shopping"}}];var u={name:"ShoppingBoard",components:{CategoryBar:p.Z,BoardModel:g.Z},data(){return{categoryTag:"shopping",categories:[{id:"1-1",name:"主食零食",image:e(4626)},{id:"1-2",name:"玩具玩偶",image:e(6415)},{id:"1-3",name:"居家用品",image:e(1915)},{id:"1-4",name:"外出用品",image:e(4727)},{id:"1-5",name:"清潔沐浴",image:e(8341)},{id:"1-6",name:"保健食品",image:e(8797)},{id:"1-7",name:"衣帽領巾",image:e(893)}],topics:{},showTopicsHeader:!1}},methods:{fecthTopics(){this.topics={category:{main:"找好商品",sub:""},topicList:[...l]}}},created(){this.fecthTopics()}},m=e(3744);const h=(0,m.Z)(u,[["render",d],["__scopeId","data-v-8ddee910"]]);var y=h},8341:function(t,a,e){t.exports=e.p+"img/clean.6058ca32.jpg"},4626:function(t,a,e){t.exports=e.p+"img/food.b9c284ce.jpg"},8797:function(t,a,e){t.exports=e.p+"img/health.e9b67494.jpg"},1915:function(t,a,e){t.exports=e.p+"img/in-house.19850af6.jpg"},4727:function(t,a,e){t.exports=e.p+"img/outdoor.7a7b4f10.jpg"},6415:function(t,a,e){t.exports=e.p+"img/toys.b9088609.jpg"},893:function(t,a,e){t.exports=e.p+"img/wear.9cc2ac2f.jpg"}}]);
//# sourceMappingURL=677.21d7c1ea.js.map
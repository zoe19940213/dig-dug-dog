(function(){"use strict";var e={3689:function(e,t,o){var a=o(9963),i=o(6252);const n={id:"app"},s={id:"nav-bar"},r={id:"main"},d={id:"side-bar"},l={id:"view-part"},c={id:"footer"},p={key:0,class:"modal-mask"};function m(e,t,o,a,m,u){const _=(0,i.up)("NavBar"),g=(0,i.up)("SideBar"),h=(0,i.up)("router-view"),b=(0,i.up)("Footer"),f=(0,i.up)("PostModal");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",s,[(0,i.Wm)(_)]),(0,i._)("div",r,[(0,i._)("div",d,[u.isLogin?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(g,{key:0,onOpenModal:u.openModal},null,8,["onOpenModal"]))]),(0,i._)("div",l,[m.routerShow?((0,i.wg)(),(0,i.j4)(h,{key:0})):(0,i.kq)("",!0)])]),(0,i._)("div",c,[(0,i.Wm)(b)]),m.modalOpen?((0,i.wg)(),(0,i.iD)("div",p)):(0,i.kq)("",!0),m.modalOpen?((0,i.wg)(),(0,i.j4)(f,{key:1,onCloseModal:u.closeModal,onSubmitForm:u.submitForm},null,8,["onCloseModal","onSubmitForm"])):(0,i.kq)("",!0)])}const u={class:"nav-bar"},_={class:"nav-bar__functions"},g={class:"nav-bar__functions__search"},h={class:"nav-bar__btns"};function b(e,t,o,n,s,r){const d=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("h1",{onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>r.toHomePage&&r.toHomePage(...e)),["prevent","stop"])),class:"nav-bar__title"},"Dig Dug Dog"),(0,i._)("div",_,[(0,i._)("div",g,[(0,i._)("button",null,[(0,i.Wm)(d,{class:"search icon",icon:"fa-solid fa-magnifying-glass"})]),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>s.keywords=e)},null,512),[[a.nr,s.keywords]])]),(0,i._)("div",h,[(0,i._)("button",{onClick:t[2]||(t[2]=(0,a.iM)(((...e)=>r.toAboutPage&&r.toAboutPage(...e)),["prevent","stop"]))},[(0,i.Wm)(d,{class:"paw icon",icon:"fa-solid fa-paw"})]),(0,i._)("button",{onClick:t[3]||(t[3]=(0,a.iM)(((...e)=>r.toSettingPage&&r.toSettingPage(...e)),["prevent","stop"]))},[(0,i.Wm)(d,{class:"user icon",icon:"fa-solid fa-user"})]),(0,i._)("button",{onClickPassive:t[4]||(t[4]=(0,a.iM)(((...e)=>r.logOut&&r.logOut(...e)),["stop"]))},[(0,i.Wm)(d,{class:"log icon",icon:"fa-solid fa-arrow-right-from-bracket"})],32)])])])}var f={name:"NavBar",data(){return{keywords:""}},methods:{toHomePage(){this.$router.push("/home")},toAboutPage(){this.$router.push("/about")},toSettingPage(){this.$router.push("/setting")},logOut(){this.$store.commit("revokeAuthentication"),this.$router.push("/login")}}},v=o(3744);const y=(0,v.Z)(f,[["render",b],["__scopeId","data-v-4e13ea2c"]]);var w=y,k=(o(6699),o(3577));const C={class:"side-bar"},j={class:"side-bar__wrapper"},M={class:"side-bar__list"},S={class:"side-bar__list__item"},D=(0,i.Uk)("找好商品"),T={class:"side-bar__list__item"},A=(0,i.Uk)("找好醫院"),P={class:"side-bar__list__item"},z=(0,i.Uk)("找好知識"),O={class:"side-bar__list__item"},R=(0,i.Uk)("找好狗狗");function H(e,t,o,n,s,r){const d=(0,i.up)("font-awesome-icon"),l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("div",j,[(0,i._)("ul",M,[(0,i._)("li",S,[(0,i.Wm)(d,{class:(0,k.C_)(["point",{active:this.$route.path.includes("shopping")}]),icon:"fa-solid fa-play"},null,8,["class"]),(0,i.Wm)(l,{to:"/board/shopping"},{default:(0,i.w5)((()=>[D])),_:1})]),(0,i._)("li",T,[(0,i.Wm)(d,{class:(0,k.C_)(["point",{active:this.$route.path.includes("medical")}]),icon:"fa-solid fa-play"},null,8,["class"]),(0,i.Wm)(l,{to:"/board/medical"},{default:(0,i.w5)((()=>[A])),_:1})]),(0,i._)("li",P,[(0,i.Wm)(d,{class:(0,k.C_)(["point",{active:this.$route.path.includes("knowledge")}]),icon:"fa-solid fa-play"},null,8,["class"]),(0,i.Wm)(l,{to:"/board/knowledge"},{default:(0,i.w5)((()=>[z])),_:1})]),(0,i._)("li",O,[(0,i.Wm)(d,{class:(0,k.C_)(["point",{active:this.$route.path.includes("getdogs")}]),icon:"fa-solid fa-play"},null,8,["class"]),(0,i.Wm)(l,{to:"/board/getdogs"},{default:(0,i.w5)((()=>[R])),_:1})])])]),(0,i._)("button",{onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>r.openModal&&r.openModal(...e)),["prevent","stop"])),class:"side-bar__post-btn"}," 我有情報 ")])}var L={name:"SideBar",methods:{openModal(){this.$emit("openModal")}}};const I=(0,v.Z)(L,[["render",H],["__scopeId","data-v-05173fd6"]]);var U=I;const F=e=>((0,i.dD)("data-v-b1d22a38"),e=e(),(0,i.Cn)(),e),B={class:"footer"},W=F((()=>(0,i._)("p",{class:"copy-right"},"© producted by Y.R.Chen",-1))),x=[W];function $(e,t,o,a,n,s){return(0,i.wg)(),(0,i.iD)("div",B,x)}var E={name:"FooterBar"};const Z=(0,v.Z)(E,[["render",$],["__scopeId","data-v-b1d22a38"]]);var N=Z;const q=e=>((0,i.dD)("data-v-a7aba9c8"),e=e(),(0,i.Cn)(),e),Y={class:"modal"},G={class:"modal__header"},K=q((()=>(0,i._)("h3",{class:"modal__header__title"},"我有情報",-1))),V={class:"modal__body"},J=q((()=>(0,i._)("label",{class:"modal__body__topic__label item-label",for:""},"Topic",-1))),Q=q((()=>(0,i._)("input",{class:"modal__body__topic__input",type:"text"},null,-1))),X=q((()=>(0,i._)("label",{class:"modal__body__category__label item-label",for:""},"Category",-1))),ee={class:"modal__body__category__group"},te={class:"modal__body__category__group__item"},oe=q((()=>(0,i._)("label",{class:"category-label",for:""},"找好商品",-1))),ae={class:"modal__body__category__group__item"},ie=q((()=>(0,i._)("label",{class:"category-label",for:""},"找好醫療",-1))),ne={class:"modal__body__category__group__item"},se=q((()=>(0,i._)("label",{class:"category-label",for:""},"找好知識",-1))),re={class:"modal__body__category__group__item"},de=q((()=>(0,i._)("label",{class:"category-label",for:""},"找好狗狗",-1))),le=q((()=>(0,i._)("label",{class:"modal__body__sub-category__label item-label",for:""},"Sub-Category",-1))),ce={class:"modal__body__sub-category__group"},pe=["value"],me={class:"category-label",for:""},ue=q((()=>(0,i._)("div",{class:"modal__body__content"},[(0,i._)("label",{class:"modal__body__content__label item-label",for:""},"Content"),(0,i._)("textarea",{class:"modal__body__content__textarea",name:"content",cols:"30",rows:"10"})],-1))),_e={class:"modal__footer"};function ge(e,t,o,n,s,r){const d=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",Y,[(0,i._)("div",G,[K,(0,i._)("button",{onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>r.closeModal&&r.closeModal(...e)),["prevent","stop"])),class:"modal__header__cross-btn"},[(0,i.Wm)(d,{icon:"fa-solid fa-xmark",class:"icon"})])]),(0,i._)("div",V,[J,Q,X,(0,i._)("div",ee,[(0,i._)("div",te,[(0,i.wy)((0,i._)("input",{type:"radio",name:"category","onUpdate:modelValue":t[1]||(t[1]=e=>s.selectCategory=e),value:"shopping",checked:""},null,512),[[a.G2,s.selectCategory]]),oe]),(0,i._)("div",ae,[(0,i.wy)((0,i._)("input",{type:"radio",name:"category","onUpdate:modelValue":t[2]||(t[2]=e=>s.selectCategory=e),value:"medical"},null,512),[[a.G2,s.selectCategory]]),ie]),(0,i._)("div",ne,[(0,i.wy)((0,i._)("input",{type:"radio",name:"category","onUpdate:modelValue":t[3]||(t[3]=e=>s.selectCategory=e),value:"knowledge"},null,512),[[a.G2,s.selectCategory]]),se]),(0,i._)("div",re,[(0,i.wy)((0,i._)("input",{type:"radio",name:"category","onUpdate:modelValue":t[4]||(t[4]=e=>s.selectCategory=e),value:"getdogs"},null,512),[[a.G2,s.selectCategory]]),de])]),le,(0,i._)("div",ce,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.subCategories[s.selectCategory],(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"modal__body__sub-category__group__item"},[(0,i._)("input",{type:"radio",name:"shopping",value:e.id},null,8,pe),(0,i._)("label",me,(0,k.zw)(e.name),1)])))),128))]),ue,(0,i._)("div",_e,[(0,i._)("button",{onClick:t[5]||(t[5]=(0,a.iM)(((...e)=>r.submitForm&&r.submitForm(...e)),["prevent","stop"])),class:"modal__footer__submit-btn"},"分享")])])])}var he={name:"PostModal",data(){return{subCategories:{shopping:[{id:"1-1",name:"主食零食"},{id:"1-2",name:"玩具玩偶"},{id:"1-3",name:"居家用品"},{id:"1-4",name:"外出用品"},{id:"1-5",name:"清潔沐浴"},{id:"1-6",name:"保健食品"},{id:"1-7",name:"衣帽領巾"}],medical:[{id:"2-1",name:"北北基"},{id:"2-2",name:"桃竹苗"},{id:"2-3",name:"中彰投"},{id:"2-4",name:"雲嘉南"},{id:"2-5",name:"高屏"},{id:"2-6",name:"宜花東"},{id:"2-7",name:"外島"}],knowledge:[{id:"3-1",name:"幼犬照顧"},{id:"3-2",name:"老犬照顧"},{id:"3-3",name:"行為問題"},{id:"3-4",name:"醫療健康"},{id:"3-5",name:"社會化訓練"},{id:"3-6",name:"才藝訓練"},{id:"3-7",name:"寵物友善"},{id:"3-8",name:"其他問題"}],getdogs:[{id:"4-1",name:"送養狗狗"},{id:"4-2",name:"領養狗狗"}]},selectCategory:"shopping"}},methods:{closeModal(){this.$emit("closeModal")},submitForm(){this.$emit("submitForm")}}};const be=(0,v.Z)(he,[["render",ge],["__scopeId","data-v-a7aba9c8"]]);var fe=be,ve={name:"App",data(){return{modalOpen:!1,routerShow:!0}},components:{NavBar:w,SideBar:U,Footer:N,PostModal:fe},methods:{openModal(){this.modalOpen=!0},closeModal(){this.modalOpen=!1},submitForm(){this.routerShow=!1,this.$nextTick((()=>{this.routerShow=!0})),this.closeModal()}},computed:{isLogin(){return"log-in"===this.$route.name||"sign-up"===this.$route.name}}};const ye=(0,v.Z)(ve,[["render",m]]);var we=ye,ke=o(2119);const Ce=e=>((0,i.dD)("data-v-6b98f782"),e=e(),(0,i.Cn)(),e),je={class:"home"},Me=Ce((()=>(0,i._)("div",{class:"home__latest"},[(0,i._)("h2",{class:"home__latest__title"},"最新活動"),(0,i._)("div",{class:"home__latest__dm"},[(0,i._)("img",{src:"https://imgpile.com/images/RzA4Gc.jpg",alt:""})])],-1))),Se={class:"home__hot-topic"},De=Ce((()=>(0,i._)("h2",{class:"home__hot-topic__title"},"發燒話題",-1))),Te={class:"home__hot-topic__board"},Ae={class:"home__top-ten"},Pe=Ce((()=>(0,i._)("h2",{class:"homt__top-ten__title"},"Top 10 推薦商品",-1))),ze={class:"home__collaborated"},Oe=Ce((()=>(0,i._)("h2",{class:"home__collaborated__title"},"合作品牌",-1))),Re={class:"home__collaborated__brands"},He=["src"];function Le(e,t,o,a,n,s){const r=(0,i.up)("SimpleBoard"),d=(0,i.up)("CarouselPart");return(0,i.wg)(),(0,i.iD)("div",je,[Me,(0,i._)("div",Se,[De,(0,i._)("div",Te,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.hotTopics,(e=>((0,i.wg)(),(0,i.j4)(r,{key:e.id,topics:e},null,8,["topics"])))),128))])]),(0,i._)("div",Ae,[Pe,(0,i.Wm)(d,{products:n.topTen},null,8,["products"])]),(0,i._)("div",ze,[Oe,(0,i._)("div",Re,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.brands,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"home__collaborated__brand"},[(0,i._)("img",{src:e.image,alt:""},null,8,He)])))),128))])])])}var Ie=o(7026);const Ue=e=>((0,i.dD)("data-v-f7c3e86e"),e=e(),(0,i.Cn)(),e),Fe={class:"carousel"},Be={class:"carousel__container"},We=Ue((()=>(0,i._)("p",{class:"carousel__cards__card__check"},"Check!",-1))),xe=["src"],$e={class:"carousel__cards__card__description"};function Ee(e,t,o,n,s,r){const d=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",Fe,[(0,i._)("button",{onClick:t[0]||(t[0]=(0,a.iM)((e=>r.handleBtnLeft()),["prevent","stop"])),class:"carousel__button-left"},[(0,i.Wm)(d,{class:"icon",icon:"fa-solid fa-play"})]),(0,i._)("div",Be,[(0,i._)("div",{class:(0,k.C_)(["carousel__cards",{"left-move":s.leftMove}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.products,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"carousel__cards__card"},[We,(0,i._)("img",{class:"carousel__cards__card__img",src:e.image,alt:""},null,8,xe),(0,i._)("p",$e,(0,k.zw)(e.description),1)])))),128))],2)]),(0,i._)("button",{onClick:t[1]||(t[1]=(0,a.iM)((e=>r.handleBtnRight()),["prevent","stop"])),class:"carousel__button-right"},[(0,i.Wm)(d,{class:"icon",icon:"fa-solid fa-play"})])])}var Ze={name:"CarouselPart",props:{products:{type:Array,required:!0}},data(){return{leftMove:!1}},methods:{handleBtnLeft(){this.leftMove=!1},handleBtnRight(){this.leftMove=!0}},created(){}};const Ne=(0,v.Z)(Ze,[["render",Ee],["__scopeId","data-v-f7c3e86e"]]);var qe=Ne;const Ye={shoppingHot:[{id:1,title:"政法政刻、得些電不性，健倒任見國價？",category:{id:"1-1",board:"shopping"}},{id:2,title:"感遊指比館生因思兒、業在意。藝兒間兒口是物！",category:{id:"1-2",board:"shopping"}},{id:3,title:"下度時賽這的下不，有食之年！",category:{id:"1-2",board:"shopping"}}],medicalHot:[{id:1,title:"面子不為童不有節……父來馬人育不北代知隨",category:{id:"2-1",board:"medical"}},{id:2,title:"必解而不統說的紅教文！",category:{id:"2-3",board:"medical"}},{id:3,title:"備半金著是，給和面兒小外母轉其件進那機時",category:{id:"2-2",board:"medical"}}],knowledgeHot:[{id:1,title:"政法政刻、得些電不性，健倒任見國價？",category:{id:"3-1",board:"knowledge"}},{id:2,title:"那不想無、法生如跑，減人破不個",category:{id:"3-4",board:"knowledge"}},{id:3,title:"應飯有舞調府仍，所城調的的康建球本將。",category:{id:"3-2",board:"knowledge"}}],getdogsHot:[{id:1,title:"未面時的行動市們小弟就是老計交開待！",category:{id:"4-1",board:"getdogs"}},{id:2,title:"愛地數團根推情那不想無、法生如跑，減人破不個",category:{id:"4-2",board:"getdogs"}},{id:3,title:"般色完落防狀子的未師整孩於，你是還我？",category:{id:"4-3",board:"getdogs"}}],topTen:[{id:1,description:"黃色雨衣",image:"https://imgpile.com/images/RzL11u.jpg"},{id:2,description:"黃色高筒雨鞋",image:"https://imgpile.com/images/RzL40i.jpg"},{id:3,description:"骨頭睡窩",image:"https://imgpile.com/images/RzAyiF.jpg"},{id:4,description:"陪伴鴨鴨玩偶",image:"https://imgpile.com/images/RzAjww.jpg"},{id:5,description:"紅黑格紋領巾",image:"https://imgpile.com/images/RzAavl.jpg"},{id:6,description:"兔寶寶頭巾",image:"https://imgpile.com/images/RzAZr3.jpg"},{id:7,description:"飛行墨鏡(L)",image:"https://imgpile.com/images/RzAShb.jpg"},{id:8,description:"毛絨獅子頭",image:"https://imgpile.com/images/RzAEZ8.jpg"},{id:9,description:"陶瓷食物碗",image:"https://imgpile.com/images/RzA6oS.jpg"},{id:10,description:"舒適沙發窩",image:"https://imgpile.com/images/RzA3xC.jpg"}],brands:[{id:1,brand:"Pets Moment",image:"https://imgpile.com/images/Rz3Kyl.jpg"},{id:2,brand:"Double D",image:"https://imgpile.com/images/Rz3xL3.jpg"},{id:3,brand:"Flowering",image:"https://imgpile.com/images/Rz3tPb.jpg"},{id:4,brand:"Sweet Diamond",image:"https://imgpile.com/images/Rz3G78.jpg"},{id:5,brand:"goody doogy",image:"https://imgpile.com/images/Rz3CFS.jpg"},{id:6,brand:"Luxury Doggy",image:"https://imgpile.com/images/Rz39lC.jpg"},{id:7,brand:"Another Half",image:"https://imgpile.com/images/Rz3bEj.jpg"},{id:8,brand:"Camp with Pets",image:"https://imgpile.com/images/Rz3TXx.jpg"},{id:9,brand:"Lovely You",image:"https://imgpile.com/images/Rz3RDL.jpg"},{id:10,brand:"Rock and Dog",image:"https://imgpile.com/images/Rz3wy1.jpg"}]};var Ge={name:"HomePage",components:{SimpleBoard:Ie.Z,CarouselPart:qe},data(){return{hotTopics:[],topTen:[],brands:[]}},methods:{fetchHotTopics(){this.hotTopics.push({category:"找好商品",topicList:[...Ye.shoppingHot]}),this.hotTopics.push({category:"找好醫療",topicList:[...Ye.medicalHot]}),this.hotTopics.push({category:"找好知識",topicList:[...Ye.knowledgeHot]}),this.hotTopics.push({category:"找好狗狗",topicList:[...Ye.getdogsHot]})},fetchTopTen(){this.topTen=[...Ye.topTen]},fetchBrand(){this.brands=[...Ye.brands]}},created(){this.fetchHotTopics(),this.fetchTopTen(),this.fetchBrand()}};const Ke=(0,v.Z)(Ge,[["render",Le],["__scopeId","data-v-6b98f782"]]);var Ve=Ke;const Je=(0,i._)("h2",null,"404 Not Found",-1),Qe=(0,i._)("p",null,"The page you search may have some problems or is not exist.",-1),Xe=[Je,Qe];function et(e,t){return(0,i.wg)(),(0,i.iD)("div",null,Xe)}const tt={},ot=(0,v.Z)(tt,[["render",et]]);var at=ot,it=o(3907);const nt=(0,it.MT)({state(){return{currentUser:{id:0,name:"",account:"",password:"",point:0,postCount:0,replyCount:0},isAuthenticated:!1,token:""}},mutations:{setCurrentUser(e,t){e.currentUser={...e.currentUser,...t},e.isAuthenticated=!0,e.token=sessionStorage.getItem("token")},revokeAuthentication(e){e.currentUser={},e.isAuthenticated=!1,sessionStorage.removeItem("token"),sessionStorage.removeItem("currentUser")}},actions:{fetchCurrentUser({commit:e}){const t=JSON.parse(sessionStorage.getItem("currentUser"));return e("setCurrentUser",t),!0}}});var st=nt;const rt=[{path:"/",name:"root",redirect:"/home"},{path:"/login",name:"log-in",component:()=>Promise.all([o.e(455),o.e(584)]).then(o.bind(o,3584))},{path:"/signup",name:"sign-up",component:()=>Promise.all([o.e(455),o.e(739)]).then(o.bind(o,8739))},{path:"/home",name:"home",component:Ve},{path:"/board/shopping",name:"shopping-board",component:()=>o.e(677).then(o.bind(o,6677))},{path:"/board/medical",name:"medical-board",component:()=>o.e(866).then(o.bind(o,1866))},{path:"/board/knowledge",name:"knowledge-board",component:()=>o.e(125).then(o.bind(o,1125))},{path:"/board/getdogs",name:"get-dogs",component:()=>o.e(194).then(o.bind(o,5194))},{path:"/topics/:category/:categoryId",name:"topics",component:()=>o.e(870).then(o.bind(o,5870))},{path:"/topics/:category/:categoryId/:topicId",name:"topic",component:()=>o.e(582).then(o.bind(o,7582))},{path:"/about",name:"about",component:()=>o.e(248).then(o.bind(o,2248))},{path:"/setting",name:"setting",component:()=>Promise.all([o.e(455),o.e(190)]).then(o.bind(o,3477))},{path:"/:catchAll(.*)",name:"not-found",component:at}],dt=(0,ke.p7)({history:(0,ke.r5)(),routes:rt});dt.beforeEach(((e,t,o)=>{const a=sessionStorage.getItem("token");let i=!1;a&&(i=st.dispatch("fetchCurrentUser")),i||"log-in"===e.name?i&&"log-in"===e.name?o("/home"):o():o("/login")}));var lt=dt,ct=o(7810),pt=o(8947),mt=o(1436),ut=o(6024);pt.vI.add(mt.ILF,mt.SJh,mt.kQp,mt.Y$T,mt.zc,mt.Mdf,mt.Aq,mt.m6i,ut.m6i,ut.Z6I,mt.xHz,mt.g82),(0,a.ri)(we).use(lt).use(st).component("font-awesome-icon",ct.GN).mount("#app")},7026:function(e,t,o){o.d(t,{Z:function(){return u}});var a=o(6252),i=o(3577);const n={class:"simple-board"},s={class:"simple-board__wrapper"},r={class:"simple-board__title"},d={class:"simple-board__topics"};function l(e,t,o,l,c,p){const m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("h3",r,(0,i.zw)(o.topics.category),1),(0,a._)("ul",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.topics.topicList,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id,class:"simple-board__topics__item"},[(0,a.Wm)(m,{to:{name:"topic",params:{category:e.category.board,categoryId:e.category.id,topicId:e.id}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.title),1)])),_:2},1032,["to"])])))),128))])])])}var c={name:"SimpleBoard",props:{topics:{type:Object,required:!0}}},p=o(3744);const m=(0,p.Z)(c,[["render",l],["__scopeId","data-v-cbef5890"]]);var u=m}},t={};function o(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,a,i,n){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],n=e[c][2];for(var r=!0,d=0;d<a.length;d++)(!1&n||s>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[d])}))?a.splice(d--,1):(r=!1,n<s&&(s=n));if(r){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,i,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,a){return o.f[a](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{125:"14b6b8a1",190:"3cd0ff6f",194:"4ae3de45",248:"6156e85d",455:"988e2f32",582:"265bc2f5",584:"d2ed1830",677:"21d7c1ea",739:"5abaa23d",866:"223de3c1",870:"2d568eae"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{125:"02877aec",190:"5378db1b",194:"fb9efd0c",248:"321147b3",582:"f5ee0c84",584:"d7c07de7",677:"2e2d9fbd",739:"77f292c3",866:"122bb0e2",870:"c0e71070"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dig-dug-dog:";o.l=function(a,i,n,s){if(e[a])e[a].push(i);else{var r,d;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==t+n){r=p;break}}r||(d=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",t+n),r.src=a),e[a]=[i];var m=function(t,o){r.onerror=r.onload=null,clearTimeout(u);var i=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(o)})),t)return t(o)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),d&&document.head.appendChild(r)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/dig-dug-dog/"}(),function(){var e=function(e,t,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var n=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=r,i.parentNode.removeChild(i),a(d)}};return i.onerror=i.onload=n,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var i=o[a],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){i=s[a],n=i.getAttribute("data-href");if(n===e||n===t)return i}},a=function(a){return new Promise((function(i,n){var s=o.miniCssF(a),r=o.p+s;if(t(s,r))return i();e(a,r,i,n)}))},i={143:0};o.f.miniCss=function(e,t){var o={125:1,190:1,194:1,248:1,582:1,584:1,677:1,739:1,866:1,870:1};i[e]?t.push(i[e]):0!==i[e]&&o[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,a){var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var n=new Promise((function(o,a){i=e[t]=[o,a]}));a.push(i[2]=n);var s=o.p+o.u(t),r=new Error,d=function(a){if(o.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;r.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",r.name="ChunkLoadError",r.type=n,r.request=s,i[1](r)}};o.l(s,d,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,n,s=a[0],r=a[1],d=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(d)var c=d(o)}for(t&&t(a);l<s.length;l++)n=s[l],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},a=self["webpackChunkdig_dug_dog"]=self["webpackChunkdig_dug_dog"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(3689)}));a=o.O(a)})();
//# sourceMappingURL=app.592240d0.js.map
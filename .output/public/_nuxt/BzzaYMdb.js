import{_ as d,o as u,c as p,b as t,x as v,n as y,r as a,d as e,w as s,h as _,p as w,a as x,i as B,I as N,H as P,f as A,J as T,t as i,K as U}from"./CxlUwgk-.js";const V={props:{align:{type:String,default:"left"}}};function j(o,m,n,r,c,k){return u(),p("div",{class:y(["title-secondary",n.align])},[t("h3",null,[v(o.$slots,"default",{},void 0,!0)])],2)}const lt=d(V,[["render",j],["__scopeId","data-v-90c4092c"]]),D={},h=o=>(w("data-v-27c0eb34"),o=o(),x(),o),F={class:"socmed-side-login"},H=h(()=>t("i",{class:"ion-logo-facebook"},null,-1)),M=h(()=>t("i",{class:"ion-logo-twitter"},null,-1)),Z=h(()=>t("i",{class:"ion-logo-google"},null,-1));function q(o,m){const n=a("v-btn");return u(),p("div",F,[e(n,{class:"navi-btn",large:""},{default:s(()=>[H,_(" Facebook ")]),_:1}),e(n,{class:"blue-btn",large:""},{default:s(()=>[M,_(" Twitter ")]),_:1}),e(n,{class:"red-btn",large:""},{default:s(()=>[Z,_(" Google ")]),_:1})])}const it=d(D,[["render",q],["__scopeId","data-v-27c0eb34"]]),b=B("/images/movie-logo.svg"),z={setup(){return{localePath:N()}},components:{Hidden:P},props:{title:{type:String,required:!0},subtitle:{type:String,default:""}},data(){return{brand:A,routerLink:T}}},l=o=>(w("data-v-36453717"),o=o(),x(),o),E={class:"page-wrap"},G={class:"logo logo-header"},J=l(()=>t("img",{src:b,alt:"logo"},null,-1)),K={class:"use-text-subtitle2"},R=l(()=>t("div",{class:"decoration"},[t("svg",{class:"left-deco",width:"1045px",height:"1468px",viewBox:"0 0 1045 1468",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[t("g",{transform:"translate(-1030.000000, 0.000000)"},[t("g",{transform:"translate(950.000000, 0.000000)"},[t("path",{d:"M0,0 L805.395445,0 C731.131815,0 740.666667,76.9414646 834,230.824394 C915.57424,365.319569 1045,513.536468 1045,652.024982 C1045,806.30828 951.877684,902.632061 904.5,1091.56209 C874.07902,1212.87314 909.795583,1338.35244 1011.64969,1468 L0,1468 L0,0 Z"})])])]),t("svg",{class:"right-deco",width:"389px",height:"1468px",viewBox:"0 0 389 1468",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[t("g",{transform:"translate(-2171.000000, 0.000000)"},[t("g",{transform:"translate(-950.000000, 0.000000)"},[t("g",{transform:"translate(950.000000, 0.000000)"},[t("path",{d:"M2329.58044,-732.909805 L3294.66463,-608.836163 C3018.10652,-208.944402 2934.07929,71.8618948 3042.58292,233.582726 C3136.98689,374.288498 3255.13325,471.945016 3255.13325,636.668858 C3255.13325,820.179655 3107.51302,903.798038 3059.64228,1128.51906 C3028.9047,1272.81133 3063.63816,1429.66837 3163.84265,1599.0902 L2141.66463,1599.0902 L2329.58044,-732.909805 Z",transform:"translate(2718.164626, 433.090195) rotate(179.000000) translate(-2718.164626, -433.090195) "})])])])])],-1)),O=l(()=>t("i",{class:"ion-ios-home-outline"},null,-1)),Q=l(()=>t("i",{class:"ion-ios-arrow-round-back-outline"},null,-1)),W={class:"auth-frame"},X={class:"greeting"},Y={class:"logo"},tt=l(()=>t("img",{src:b,alt:"logo"},null,-1)),ot={class:"use-text-subtitle2"},et={class:"use-text-subtitle pb-2"},st={class:"use-text-paragraph"},nt={class:"form-wrap"};function at(o,m,n,r,c,k){const S=U,g=a("hidden"),C=a("v-btn"),f=a("v-col"),L=a("v-row"),$=a("v-card"),I=a("v-container");return u(),p("div",E,[e(g,{point:"mdUp"},{default:s(()=>[t("div",G,[e(S,{to:r.localePath(c.routerLink.movie.home)},{default:s(()=>[J,t("p",K,i(c.brand.movie.projectName),1)]),_:1},8,["to"])])]),_:1}),e(I,{class:"max-lg inner-wrap"},{default:s(()=>[R,e($,{class:"form-box fragment-fadeUp"},{default:s(()=>[e(C,{to:r.localePath(c.routerLink.movie.home),variant:"text",icon:"",class:"backtohome"},{default:s(()=>[O,Q]),_:1},8,["to"]),t("div",W,[e(L,null,{default:s(()=>[e(f,{md:"5",cols:"12"},{default:s(()=>[e(g,{point:"smDown"},{default:s(()=>[t("div",X,[t("div",Y,[tt,t("p",ot,i(c.brand.movie.projectName),1)]),t("h4",et,i(n.title),1),t("h6",st,i(n.subtitle),1)])]),_:1})]),_:1}),e(f,{md:"7",cols:"12"},{default:s(()=>[t("div",nt,[v(o.$slots,"default",{},void 0,!0)])]),_:3})]),_:3})])]),_:3})]),_:3})])}const rt=d(z,[["render",at],["__scopeId","data-v-36453717"]]);export{rt as A,it as S,lt as T};
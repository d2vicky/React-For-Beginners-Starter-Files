(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),i=a(65),c=a(67),o=a(66),l=a(12),u=a(5),h=a(6),m=a(8),p=a(7),d=a(9),f=a(31),v=a.n(f),b=a(15),g=a.n(b),y=g.a.initializeApp({apiKey:"AIzaSyDfiszHOc0NXwev8md6Dz_X3skSmy1G9Qg",authDomain:"catch-of-the-day-shuang.firebaseapp.com",databaseURL:"https://catch-of-the-day-shuang.firebaseio.com"}),E=v.a.createClass(y.database());function O(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function j(e){return e[Math.floor(Math.random()*e.length)]}function w(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(j(e),"-").concat(j(e),"-").concat(j(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var k=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.name,n=t.price,s=t.status,i=t.desc,c=t.image,o="available"===s;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:c,alt:a}),r.a.createElement("h3",{className:"fish-name"},a,r.a.createElement("span",{className:"price"},O(n))),r.a.createElement("p",null,i),r.a.createElement("button",{disabled:!o,onClick:function(){return e.props.addToOrder(e.props.index)}},o?"Add to Cart":"Sold Out!"))}}]),t}(r.a.Component),S=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"of"),r.a.createElement("span",{className:"the"},"The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},F=a(18),C=a.n(F),N=a(22),x=a(17),R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),t}(r.a.Component),T=a(20),I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=Object(l.a)({},a.props.fish,Object(T.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateFish(a.props.index,t)},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",value:this.props.fish.name,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"price",value:this.props.fish.price,onChange:this.handleChange}),r.a.createElement("select",{type:"text",name:"status",value:this.props.fish.status,onChange:this.handleChange},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",value:this.props.fish.desc,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"image",value:this.props.fish.image,onChange:this.handleChange}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),t}(r.a.Component),D=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Log in to manage your store's inventory"),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log In With GitHub"),r.a.createElement("button",{className:"twitter",onClick:function(){return e.authenticate("Twitter")}},"Log In With Twitter"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log In With Facebook"))},A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,owner:null},a.authHandler=function(){var e=Object(N.a)(C.a.mark(function e(t){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.fetch(a.props.storeID,{context:Object(x.a)(Object(x.a)(a))});case 2:if((n=e.sent).owner){e.next=6;break}return e.next=6,E.post("".concat(a.props.storeID,"/owner"),{data:t.user.uid});case 6:a.setState({uid:t.user.uid,owner:n.owner||t.user.uid});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){var t=new(g.a.auth["".concat(e,"AuthProvider")]);y.auth().signInWithPopup(t).then(a.authHandler)},a.logout=Object(N.a)(C.a.mark(function e(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Logging out!"),e.next=3,g.a.auth().signOut();case 3:a.setState({uid:null});case 4:case"end":return e.stop()}},e)})),a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.auth().onAuthStateChanged(function(t){t&&e.authHandler({user:t})})}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Log out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry you are not the owner!"),t):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),t,Object.keys(this.props.fishes).map(function(t){return r.a.createElement(I,{key:t,index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})}),r.a.createElement(R,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes")):r.a.createElement(D,{authenticate:this.authenticate})}}]),t}(r.a.Component),L=a(16),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props.order[e],n=a.props.fishes[e],s=n&&"available"===n.status,i={classNames:"order",key:e,timeout:{enter:500,exit:500}};return n?s?r.a.createElement(L.CSSTransition,i,r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(L.TransitionGroup,{component:"span",className:"count"},r.a.createElement(L.CSSTransition,{classNames:"count",key:t,timeout:{enter:500,exit:500}},r.a.createElement("span",null,t))),"lbs ",n.name,O(t*n.price),r.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7")))):r.a.createElement(L.CSSTransition,i,r.a.createElement("li",{key:e},"Sorry ",n?n.name:"fish"," is no longer available")):null},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var n=e.props.order[a],r=e.props.fishes[a];return r&&"available"===r.status?t+n*r.price:t},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(L.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,O(a))))}}]),t}(r.a.Component),P={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},W=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(l.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.addToOrder=function(e){var t=Object(l.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(l.a)({},a.state.order);delete t[e],a.setState({order:t})},a.updateFish=function(e,t){var n=Object(l.a)({},a.state.fishes);n[e]=t,a.setState({fishes:n})},a.deleteFish=function(e){var t=Object(l.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t})},a.loadSampleFishes=function(){a.setState({fishes:P})},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeID);t&&this.setState({order:JSON.parse(t)}),this.ref=E.syncState("".concat(e.storeID,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params;localStorage.setItem(e.storeID,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){E.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(S,{tagline:"Fresh Seafood Market",age:200}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map(function(t){return r.a.createElement(k,{key:t,index:t,details:e.state.fishes[t],addToOrder:e.addToOrder})}))),r.a.createElement(M,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(A,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeID:this.props.match.params.storeID}))}}]),t}(r.a.Component),z=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found ~!~"))},H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Select A Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:w()}),r.a.createElement("button",{type:"submit"},"Visit Store ->")))}}]),t}(r.a.Component),G=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:H}),r.a.createElement(o.a,{path:"/store/:storeID",component:W}),r.a.createElement(o.a,{component:z})))};a(62);Object(s.render)(r.a.createElement(G,null),document.querySelector("#main"))}},[[33,1,2]]]);
//# sourceMappingURL=main.f0516261.chunk.js.map